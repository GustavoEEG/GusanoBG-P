# Trazabilidad interactiva de evidencia

La ventana de una cita no es una ficha bibliográfica. Su función es responder una pregunta concreta: **¿qué prueba contenida en esta fuente justifica que se cite precisamente en este punto de la metodología corregida?**

## Regla de publicación

La fuente metodológica vigente es `metodologia/00_metodologia_principal_corregida.md` en el repositorio privado. Una cita sólo se vuelve interactiva cuando existe una **prueba documental verificada para esa aparición concreta**. No basta con haber revisado el artículo, asignarle un ART o escribir una síntesis general de su relevancia.

Cada aparición autor–año recibe un identificador `CIT-M00-Sxx-nnn`. La misma publicación puede tener varias instancias si aparece en lugares distintos o sustenta decisiones diferentes.

## Qué debe mostrar la ventana

La vista breve y la vista completa deben conservar cuatro capas principales:

1. **Sustenta.** Qué parte exacta de la afirmación metodológica respalda esa fuente.
2. **Aplicación en GBG.** Cómo se traduce esa evidencia a la decisión o regla metodológica visible, sin presentar la inferencia del proyecto como resultado del artículo.
3. **No sustenta.** Qué parte de la afirmación no puede atribuirse a esa fuente, qué inferencia queda fuera de su diseño o qué parámetro no debe transferirse.
4. **Prueba documental.** Página/sección, tabla, figura o suplemento, descripción o paráfrasis verificada y explicación de por qué esa prueba respalda el texto.

La vista completa añade la **trazabilidad técnica**: instancia `CIT-*`, revisión/ART, UE vinculadas y enlace a la fuente original cuando pueda publicarse.

Cuando varias publicaciones aparecen en una misma oración o párrafo, cada una justifica únicamente el fragmento que realmente sostiene. La presencia de una cita dentro de un grupo no autoriza a atribuirle toda la afirmación.

## Tipos de prueba

**Cita textual breve.** Fragmento literal previamente verificado en el documento fuente. Se mantiene deliberadamente corto.

**Paráfrasis verificada.** Síntesis fiel de un pasaje cuya ubicación exacta se ha comprobado. Se identifica explícitamente como paráfrasis para no presentarla como palabras de los autores.

**Tabla, figura o suplemento.** Se identifica el objeto concreto y su ubicación; la explicación indica qué información de ese objeto sustenta el texto metodológico.

## Interacción

En computadora, al colocar el cursor o el foco sobre una cita verificada aparece la ventana breve. Con clic —o toque en dispositivos táctiles— se abre el detalle con todas las pruebas verificadas y sus límites. La interacción no debe obligar al lector a abandonar el punto de lectura.

Los identificadores `CIT-*`, `ART-*` y `UE_*` se mantienen para auditoría, pero quedan en un apartado secundario de **Trazabilidad técnica**. No sustituyen la justificación científica visible.

## Cobertura de la metodología corregida

La publicación v3 exige **cobertura total**: el inventario se reconstruye desde la metodología corregida y la exportación se bloquea mientras falte una sola aparición autor–año o mientras sobreviva una ficha perteneciente a la metodología anterior.

La localización de una instancia utiliza `section + methodology_text + match`. Esto permite distinguir correctamente varias apariciones de la misma fuente dentro de una misma sección.

Las fichas construidas contra `00_metodologia_principal.md` son históricas y no se reutilizan automáticamente. Sólo puede reaprovecharse una prueba documental cuando se vuelve a comprobar que sustenta la afirmación concreta de `00_metodologia_principal_corregida.md`.

!!! warning "Regla de transferencia"
    Que una fuente sustente un principio no convierte automáticamente sus cifras, umbrales, distancias, configuraciones o desempeño en parámetros locales. La ventana debe indicar ese límite cuando sea pertinente.

!!! info "Fuente de verdad"
    La prueba pública es una derivación verificable de la revisión científica privada. La fuente metodológica vigente es la metodología corregida; la interfaz pública explica por qué cada cita es defendible.
