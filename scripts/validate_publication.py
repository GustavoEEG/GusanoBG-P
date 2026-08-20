#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POLICY_PATH = ROOT / "publication_policy.json"

TEXT_SUFFIXES = {".md", ".yml", ".yaml", ".json", ".js", ".css", ".txt", ".py"}
TOKEN_PATTERNS = [
    re.compile(r"github_pat_[A-Za-z0-9_]+"),
    re.compile(r"ghp_[A-Za-z0-9]+"),
]


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)


def main() -> int:
    errors: list[str] = []
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))

    for rel in policy.get("required_files", []):
        if not (ROOT / rel).exists():
            fail(f"Falta archivo requerido: {rel}", errors)

    ignored_parts = {".git", "site", ".venv", "venv", "__pycache__"}
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        if ignored_parts.intersection(path.parts):
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

        required = policy.get("evidence_required_fields", [])
        for citation_id, item in items.items():
            if not re.fullmatch(r"CIT-[A-Z0-9-]+", citation_id):
                fail(f"ID de cita no válido: {citation_id}", errors)
            if not isinstance(item, dict):
                fail(f"Ficha {citation_id} no es un objeto", errors)
                continue
            for field in required:
                value = item.get(field)
                if value is None or (isinstance(value, str) and not value.strip()):
                    fail(f"Ficha {citation_id}: falta campo '{field}'", errors)

        methodology = (ROOT / "docs/metodologia.md").read_text(encoding="utf-8") if (ROOT / "docs/metodologia.md").exists() else ""
        used_ids = set(re.findall(r'data-evidence="([A-Z0-9-]+)"', methodology))
        missing = sorted(used_ids.difference(items))
        orphan = sorted(set(items).difference(used_ids))
        for citation_id in missing:
            fail(f"La metodología usa {citation_id} pero no existe su ficha pública", errors)
        if orphan:
            print("Aviso: fichas no usadas en metodologia.md:", ", ".join(orphan))

    if errors:
        print("PUBLICACIÓN BLOQUEADA")
        for error in errors:
            print(f"- {error}")
        return 1

    print("PUBLICACIÓN VALIDADA")
    return 0


if __name__ == "__main__":
    sys.exit(main())
