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

        items = evidence.get("items", {}) if isinstance(evidence, dict) else {}
        if not isinstance(items, dict):
            fail("evidence.json: 'items' debe ser un objeto", errors)
            items = {}

        if evidence.get("generated_from") == "PUBLIC_DEMO_ONLY":
            fail("evidence.json sigue marcado como demostración técnica", errors)

        methodology = methodology_path.read_text(encoding="utf-8") if methodology_path.exists() else ""
        required = policy.get("evidence_required_fields", [])

        for citation_id, item in items.items():
            if not CITATION_ID_RE.fullmatch(citation_id):
                fail(f"ID de cita no válido: {citation_id}", errors)
            if not isinstance(item, dict):
                fail(f"Ficha {citation_id} no es un objeto", errors)
                continue

            for field in required:
                value = item.get(field)
                if value is None or (isinstance(value, str) and not value.strip()):
                    fail(f"Ficha {citation_id}: falta campo '{field}'", errors)

            section = str(item.get("section", "")).strip()
            match = str(item.get("match", "")).strip()
            if not section.isdigit() or not match:
                continue

            explicit_count = len(re.findall(rf'data-evidence="{re.escape(citation_id)}"', methodology))
            if explicit_count > 1:
                fail(f"{citation_id}: aparece más de una vez como anotación explícita", errors)
                continue
            if explicit_count == 1:
                continue

            fragment = section_text(methodology, section)
            if fragment is None:
                fail(f"{citation_id}: no existe la sección {section} en metodologia.md", errors)
                continue
            raw_count = fragment.count(match)
            if raw_count != 1:
                fail(
                    f"{citation_id}: se esperaba 1 coincidencia de '{match}' en sección {section} y se encontraron {raw_count}",
                    errors,
                )

        used_ids = set(re.findall(r'data-evidence="([A-Z0-9-]+)"', methodology))
        missing = sorted(used_ids.difference(items))
        for citation_id in missing:
            fail(f"La metodología usa {citation_id} pero no existe su ficha pública", errors)

    if errors:
        print("PUBLICACIÓN BLOQUEADA")
        for error in errors:
            print(f"- {error}")
        return 1

    print("PUBLICACIÓN VALIDADA")
    return 0


if __name__ == "__main__":
    sys.exit(main())
