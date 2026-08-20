# Metadatos de liberación

`release.json` registra la procedencia de cada publicación de la metodología.

Para `v2.1-preview.1`, la transferencia se realizó mediante el puente fragmentado sanitizado porque la fuente canónica permanece en un repositorio privado. Se registran el commit y el blob exactos de la fuente privada, el hash SHA-256 de la fuente pública sanitizada y el número de enlaces operativos retirados. `source_sha256` permanece `null` en esta transferencia específica; no se sustituye con otro hash ni se inventa equivalencia. Las exportaciones ejecutadas directamente con el exportador privado pueden poblar ese campo.
