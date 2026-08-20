#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POLICY_PATH = ROOT / "publication_policy.json"
SELF_PATH = Path(__file__).resolve()

TEXT_SUFFIXES = {".md", ".yml", ".yaml", ".json", ".js", ".css", ".txt", ".py"}
TOKEN_PATTERNS = [
    re.compile(r"github_pat_[A-Za-z0-9_]+"),
    re.compile(r"ghp_[A-Za-z0-9]+"),
]
SECTION_RE = re.compile(r"^##\s+(\d+)\.\s+", re.MULTILINE)
CITATION_ID_RE = re.compile(r"CIT-M\d{2}-S\d{2}-\d{3}")


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)


def section_text(methodology: str, section_number: str) -> str | None:
    matches = list(SECTION_RE.finditer(methodology))
    for index, match in enumerate(matches):
        if match.group(1) != section_number:
            continue
        end = matches[index + 1].start() if index + 1 < len(matches) else len(methodology)
        return methodology[match.start():end]
    return None


def validate_evidence_item(citation_id: str, item: dict, policy: dict, methodology: str, errors: list[str]) -> None:
    if not CITATION_ID_RE.fullmatch(citation_id):
        fail(f"ID de cita no válido: {citation_id}", errors)
    if not isinstance(item, dict):
        fail(f"Ficha {citation_id} no es un objeto", errors)
        return

    for field in policy.get("evidence_required_fields", []):
        value = item.get(field)
        if value is None or (isinstance(value, str) and not value.strip()):
            fail(f"Ficha {citation_id}: falta campo '{field}'", errors)

    expected_status = policy.get("evidence_publication_status", "VERIFIED_SOURCE_PROOF")
    if item.get("publication_status") != expected_status:
        fail(f"Ficha {citation_id}: publication_status debe ser {expected_status}", errors)

    section = str(item.get("section", "")).strip()
    match = str(item.get("match", "")).strip()
    if not section.isdigit() or not match:
        fail(f"Ficha {citation_id}: section/match inválidos", errors)
        return

    fragment = section_text(methodology, section)
    if fragment is None:
        fail(f"{citation_id}: no existe la sección {section} en metodologia.md", errors)
        return

    explicit_count = len(re.findall(rf'data-evidence="{re.escape(citation_id)}"', fragment))
    if explicit_count > 1:
        fail(f"{citation_id}: aparece más de una vez como anotación explícita", errors)
    elif explicit_count == 0:
        raw_count = fragment.count(match)
        if raw_count != 1:
            fail(
                f"{citation_id}: se esperaba 1 coincidencia de '{match}' en sección {section} y se encontraron {raw_count}",
                errors,
            )

    methodology_text = str(item.get("methodology_text", "")).strip()
    if methodology_text and methodology_text not in fragment:
        fail(f"{citation_id}: methodology_text no aparece literalmente en la sección {section}", errors)

    blocks = item.get("evidence")
    if not isinstance(blocks, list) or not blocks:
        fail(f"{citation_id}: debe contener al menos un bloque de prueba documental", errors)
        return

    allowed_types = set(policy.get("evidence_allowed_types", []))
    max_quote_words = int(policy.get("max_quote_words", 25))
    for index, block in enumerate(blocks, start=1):
        if not isinstance(block, dict):
            fail(f"{citation_id}: prueba {index} no es un objeto", errors)
            continue
        location = str(block.get("location", "")).strip()
        evidence_type = str(block.get("evidence_type", "")).strip()
        text = str(block.get("text", "")).strip()
        link_to_claim = str(block.get("link_to_claim", "")).strip()
        if not location:
            fail(f"{citation_id}: prueba {index} sin ubicación exacta", errors)
        if evidence_type not in allowed_types:
            fail(f"{citation_id}: prueba {index} con evidence_type inválido: {evidence_type}", errors)
        if not text:
            fail(f"{citation_id}: prueba {index} sin texto o descripción", errors)
        if not link_to_claim:
            fail(f"{citation_id}: prueba {index} no explica por qué respalda la afirmación", errors)
        if evidence_type == "TEXT_QUOTE" and len(text.split()) > max_quote_words:
            fail(f"{citation_id}: cita textual {index} supera {max_quote_words} palabras", errors)


def main() -> int:
    errors: list[str] = []
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))

    for rel in policy.get("required_files", []):
        if not (ROOT / rel).exists():
            fail(f"Falta archivo requerido: {rel}", errors)

    ignored_parts = {".git", "site", ".venv", "venv", "__pycache__"}
    ignored_files = {POLICY_PATH.resolve(), SELF_PATH}
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        if path.resolve() in ignored_files or ignored_parts.intersection(path.parts):
            continue
        rel = path.relative_to(ROOT)
        text = path.read_text(encoding="utf-8", errors="replace")
        for forbidden in policy.get("forbidden_substrings", []):
            if forbidden in text:
                fail(f"Cadena prohibida '{forbidden}' en {rel}", errors)
        for pattern in TOKEN_PATTERNS:
            if pattern.search(text):
                fail(f"Posible credencial en {rel}: patrón {pattern.pattern}", errors)

    evidence_path = ROOT / "docs/data/evidence.json"
    methodology_path = ROOT / "docs/metodologia.md"
    if evidence_path.exists():
        try:
            evidence = json.loads(evidence_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            fail(f"evidence.json inválido: {exc}", errors)
            evidence = {}

        expected_schema = str(policy.get("evidence_schema_version", "2.0"))
        if str(evidence.get("schema_version", "")) != expected_schema:
            fail(f"evidence.json debe usar schema_version {expected_schema}", errors)
        if evidence.get("generated_from") != "PRIVATE_VERIFIED_SOURCE_PROOF_REGISTRY":
            fail("evidence.json no procede del registro privado de prueba documental verificada", errors)

        items = evidence.get("items", {}) if isinstance(evidence, dict) else {}
        if not isinstance(items, dict):
            fail("evidence.json: 'items' debe ser un objeto", errors)
            items = {}

        methodology = methodology_path.read_text(encoding="utf-8") if methodology_path.exists() else ""
        for citation_id, item in items.items():
            validate_evidence_item(citation_id, item, policy, methodology, errors)

        used_ids = set(re.findall(r'data-evidence="([A-Z0-9-]+)"', methodology))
        missing = sorted(used_ids.difference(items))
        for citation_id in missing:
            fail(f"La metodología usa {citation_id} pero no existe su prueba documental pública", errors)

    if errors:
        print("PUBLICACIÓN BLOQUEADA")
        for error in errors:
            print(f"- {error}")
        return 1

    print("PUBLICACIÓN VALIDADA")
    return 0


if __name__ == "__main__":
    sys.exit(main())
