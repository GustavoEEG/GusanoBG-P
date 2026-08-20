#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INCOMING = ROOT / "incoming" / "methodology"
OUT_MD = ROOT / "docs" / "metodologia.md"
OUT_RELEASE = ROOT / "docs" / "data" / "release.json"
POLICY = ROOT / "publication_policy.json"

VERSION_RE = re.compile(r"^\*\*Versión:\*\*\s*(.+?)\s*$", re.MULTILINE)
DATE_RE = re.compile(r"^\*\*Fecha:\*\*\s*(.+?)\s*$", re.MULTILINE)


def main() -> int:
    manifest_path = INCOMING / "manifest.json"
    parts = sorted(INCOMING.glob("part-*.md"))
    if not manifest_path.exists() or not parts:
        print("No hay una exportación fragmentada pendiente.")
        return 0

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    expected_parts = int(manifest.get("expected_parts", len(parts)))
    if len(parts) != expected_parts:
        print(
            f"EXPORTACIÓN BLOQUEADA: se esperaban {expected_parts} fragmentos y existen {len(parts)}.",
            file=sys.stderr,
        )
        return 1

    policy = json.loads(POLICY.read_text(encoding="utf-8"))
    # fetch_file por rangos no conserva el separador entre el último renglón de
    # un fragmento y el primero del siguiente. Insertamos exactamente un salto
    # entre fragmentos y preservamos cualquier línea vacía inicial del siguiente.
    source = "\n".join(
        path.read_text(encoding="utf-8").rstrip("\n") for path in parts
    ) + "\n"

    for forbidden in policy.get("forbidden_substrings", []):
        if forbidden in source:
            print(f"EXPORTACIÓN BLOQUEADA: cadena prohibida: {forbidden}", file=sys.stderr)
            return 1

    if "PUBLIC:OMIT:" in source:
        print("EXPORTACIÓN BLOQUEADA: marcador PUBLIC:OMIT sin procesar", file=sys.stderr)
        return 1

    version_match = VERSION_RE.search(source)
    date_match = DATE_RE.search(source)
    version = version_match.group(1).strip() if version_match else "NO_DETECTADA"
    source_date = date_match.group(1).strip() if date_match else "NO_DETECTADA"

    banner = (
        "<!-- ARCHIVO GENERADO: NO EDITAR DIRECTAMENTE -->\n\n"
        "!!! info \"Publicación derivada y controlada\"\n"
        "    Esta página se genera desde la metodología científica canónica mantenida en el repositorio privado de trabajo. "
        "La capa pública añade presentación, navegación y trazabilidad, pero no constituye una segunda fuente de verdad.\n\n"
    )
    public_text = banner + source.lstrip()
    OUT_MD.write_text(public_text, encoding="utf-8")

    release = {
        "schema_version": "1.0",
        "release_label": manifest["release_label"],
        "methodology_version": version,
        "methodology_source_date": source_date,
        "source_sha_private": manifest["source_sha_private"],
        "source_blob_sha_private": manifest.get("source_blob_sha_private"),
        "source_sha256": manifest.get("source_sha256"),
        "public_sanitized_source_sha256": hashlib.sha256(source.encode("utf-8")).hexdigest(),
        "generated_at_utc": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "private_links_sanitized": manifest.get("private_links_sanitized", 0),
        "canonical_source": "metodologia/00_metodologia_principal.md",
        "public_repository": "GustavoEEG/GusanoBG-P",
        "editing_policy": "GENERATED_DO_NOT_EDIT_DIRECTLY",
        "transfer_mode": "SANITIZED_FRAGMENT_BRIDGE"
    }
    OUT_RELEASE.parent.mkdir(parents=True, exist_ok=True)
    OUT_RELEASE.write_text(json.dumps(release, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Ensamblados {len(parts)} fragmentos.")
    print(f"SHA-256 público sanitizado: {release['public_sanitized_source_sha256']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
