# GusanoBG-P

Publicación interactiva y versionada de la metodología institucional del proyecto GBG.

> Este repositorio es una **capa pública derivada**. La fuente científica canónica se mantiene en el repositorio privado de trabajo y no se edita aquí.

## Arquitectura

- `docs/metodologia.md`: copia pública generada desde `metodologia/00_metodologia_principal_corregida.md` del repositorio privado.
- `docs/data/evidence.json`: fichas públicas para trazabilidad interactiva de cada instancia de cita.
- `docs/javascripts/evidence-tooltips.js`: interacción hover/foco/tap/clic de la evidencia.
- `docs/javascripts/mathjax.js`: renderizado de ecuaciones.
- `scripts/validate_publication.py`: puerta de seguridad antes de publicar.
- `.github/workflows/ci.yml`: valida cada PR.
- `.github/workflows/pages.yml`: despliega `main` en GitHub Pages.

## Regla de trabajo

El flujo es unidireccional:

`00_metodologia_principal_corregida.md (privado) → exportación sanitizada + trazabilidad completa → PR en GusanoBG-P → revisión → merge → GitHub Pages`

Los cambios científicos se realizan únicamente en la fuente privada. Los archivos generados no deben editarse manualmente para corregir la metodología.

La metodología anterior `00_metodologia_principal.md` dejó de ser la fuente de nuevas exportaciones. Cualquier rama o ficha de evidencia construida contra esa versión debe considerarse histórica y no puede mezclarse con la publicación basada en la metodología corregida.

## Regla de evidencia

La publicación basada en la metodología corregida sólo se considera completa cuando **todas las apariciones autor–año del cuerpo metodológico** tienen una ficha de evidencia propia con:

- qué parte de la afirmación sustenta la fuente;
- cómo se aplica al GBG;
- qué no sustenta o no debe transferirse;
- prueba documental localizada;
- UE y revisión/ART de procedencia cuando existan.

La puerta de publicación debe bloquear una liberación parcial o una mezcla de fichas provenientes de la metodología anterior.
