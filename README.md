# GusanoBG-P

Publicación interactiva y versionada de la metodología institucional del proyecto GBG.

> Este repositorio es una **capa pública derivada**. La fuente científica canónica se mantiene en el repositorio privado de trabajo y no se edita aquí.

## Arquitectura

- `docs/metodologia.md`: copia pública generada desde `metodologia/00_metodologia_principal.md` del repositorio privado.
- `docs/data/evidence.json`: fichas públicas para trazabilidad interactiva de citas.
- `docs/javascripts/evidence-tooltips.js`: interacción hover/foco/clic de la evidencia.
- `docs/javascripts/mathjax.js`: renderizado de ecuaciones.
- `scripts/validate_publication.py`: puerta de seguridad antes de publicar.
- `.github/workflows/ci.yml`: valida cada PR.
- `.github/workflows/pages.yml`: despliega `main` en GitHub Pages.

## Regla de trabajo

El flujo es unidireccional:

`repositorio privado → exportación sanitizada → PR en GusanoBG-P → revisión → merge → GitHub Pages`

Los cambios científicos se realizan únicamente en la fuente privada. Los archivos generados no deben editarse manualmente para corregir la metodología.

## Estado inicial

La primera rama configura la infraestructura y una demostración de la trazabilidad interactiva. La metodología completa se incorporará mediante el exportador controlado antes de declarar la primera liberación pública.
