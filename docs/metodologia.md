<!-- ARCHIVO GENERADO: NO EDITAR DIRECTAMENTE -->

!!! info "Publicación derivada y controlada"
    Esta página se genera desde la metodología científica canónica mantenida en el repositorio privado de trabajo. La capa pública añade presentación, navegación y trazabilidad, pero no constituye una segunda fuente de verdad.

# Metodología única consolidada para vigilancia, análisis espacial, percepción remota y modelación del GBG

**Versión:** 2.1-draft  
**Estado:** única metodología científica y operativa vigente  
**Fecha:** 2 de agosto de 2026  
**Área:** Escárcega y Champotón, Campeche  
**Organismo de interés:** Gusano Barrenador del Ganado, *Cochliomyia hominivorax*

> **Regla de lectura.** Este documento se lee de principio a fin como un solo flujo. No requiere abrir anexos metodológicos, lecturas guiadas, ejemplos separados ni documentos canónicos paralelos. Las tablas breves se incorporan aquí. Únicamente se conservan enlaces a archivos CSV cuando la estructura completa es demasiado extensa o debe emplearse directamente como plantilla operativa.

> **Regla sobre ejemplos.** Todo nombre, identificador, cantidad, fecha, coordenada, resultado, costo, métrica, umbral o configuración señalado como **EJEMPLO SINTÉTICO** es completamente ficticio. Su función es demostrar con precisión qué se hará y qué decisión se tomará; no acredita que los datos, permisos, equipos, acuerdos o resultados reales ya existan.

> **Regla de fundamentación.** Las citas autor–año identifican la evidencia que sustenta cada principio. Una cita respalda el criterio metodológico, pero no transfiere automáticamente cifras, umbrales, distancias, configuraciones ni desempeño al contexto de Campeche.

---

## 0. Propósito, alcance y fuerza normativa

**Fundamentación científica.** La integración de vigilancia, epidemiología espacial, percepción remota, gobernanza y reproducibilidad responde al protocolo del proyecto y a marcos que exigen distinguir la pregunta sanitaria, el proceso de observación, la procedencia de los datos y la capacidad real de implementación (El Colegio de la Frontera Sur, 2026; Destoumieux-Garzón et al., 2018; Kass et al., 2024).

Esta metodología define de forma acumulativa y completa el diseño científico, técnico y operativo del componente de vigilancia, percepción remota, epidemiología espacial, modelación y cartografía del GBG en Escárcega y Champotón. Regula:

1. población, unidades de observación y periodos de análisis;
2. padrón de Unidades de Producción Pecuaria, en adelante UPP;
3. vigilancia, diagnóstico y construcción de eventos epidemiológicos;
4. muestreo y validación interna, temporal y externa;
5. estaciones meteorológicas, productos satelitales y vuelos UAV;
6. termografía, cobertura del paisaje y verdad de campo;
7. movilidad pecuaria, vigilancia entomológica y módulos genómicos;
8. curaduría, procedencia, calidad y armonización de datos;
9. análisis espacial exploratorio;
10. construcción de covariables y modelación;
11. incertidumbre, soporte, extrapolación y abstención;
12. generación de mapas, alertas y decisiones sanitarias;
13. gobernanza, ética, seguridad y reproducibilidad;
14. reglas de contingencia cuando los datos no sostengan la inferencia prevista.

Los términos siguientes son normativos:

| Término | Significado |
|---|---|
| **OBLIGATORIO** | Debe cumplirse. Toda desviación requiere decisión documentada y un PR metodológico. |
| **CONDICIONAL** | Solo se ejecuta si se satisface una puerta de entrada explícita. |
| **PILOTO** | Se prueba antes de escalar; no produce por sí solo un resultado definitivo. |
| **PENDIENTE DE CIERRE** | El dato, parámetro o acuerdo real todavía no existe o no está verificado. |
| **NO EVALUABLE** | No puede producirse una inferencia válida para esa unidad o periodo. |
| **ABSTENCIÓN** | El sistema se niega explícitamente a predecir o clasificar por falta de soporte. |
| **DESCARTADO** | No forma parte del flujo principal con la evidencia disponible. |

Todo parámetro, umbral, ventana, escala, dominio, transformación, fuente, exclusión y decisión deberá tener nombre, definición, unidad, origen, responsable, versión, momento de fijación, datos usados para fijarlo y criterio de modificación. No se aceptarán valores predeterminados silenciosos de programas ni cifras tomadas de otra región sin validación local.

### Resultado de esta sección

Al terminar esta sección debe quedar claro que existe una sola metodología vigente y que cualquier componente no descrito aquí no puede incorporarse como decisión científica definitiva sin actualizar este documento.

---

## 1. Pregunta científica, decisiones y productos permitidos

**Fundamentación científica.** La separación entre descripción, idoneidad, exposición, riesgo y pronóstico evita atribuir significado probabilístico a salidas presencia–fondo y obliga a vincular cada producto con un estimando, un dominio y una prueba compatibles (Phillips et al., 2006; Phillips y Dudík, 2008; Elith y Leathwick, 2009; Dufleit et al., 2026).

### 1.1 Pregunta principal

La pregunta epidemiológica principal es:

> ¿Cuál es la probabilidad de que una UPP de Escárcega o Champotón registre al menos un caso confirmado nuevo de GBG durante los 30 días posteriores a una fecha de corte, dadas únicamente la información disponible hasta esa fecha, las condiciones ambientales, la exposición ganadera, el manejo, la movilidad, los antecedentes y la intensidad de vigilancia?

El horizonte de 30 días es la hipótesis operativa principal. Solo se conservará como horizonte definitivo si la precisión temporal de los registros, la biología local, la utilidad sanitaria y la validación externa lo sostienen. Las ventanas de 1, 3, 7, 14, 21 y 30 días serán candidatas y se compararán exclusivamente dentro del desarrollo.

### 1.2 Decisiones que el sistema apoyará

El sistema apoyará, sin sustituir a la autoridad sanitaria:

- priorización de UPP y comunidades para vigilancia;
- identificación de zonas con alta incertidumbre y baja cobertura;
- localización de condiciones ambientales compatibles con el ciclo del GBG;
- identificación de coincidencia entre condiciones favorables y ganado susceptible;
- delimitación descriptiva y seguimiento de focos confirmados;
- selección de UPP que requieren inspección de campo, UAV o termografía;
- abstención cuando no exista soporte suficiente;
- selección de información adicional que reduzca incertidumbre.

### 1.3 Decisiones que el sistema no realizará automáticamente

No declarará por sí mismo:

- presencia oficial de GBG;
- origen exacto de un brote;
- ruta o dirección de transmisión;
- cuarentena, sacrificio, tratamiento o liberación de insectos estériles;
- ausencia, erradicación o libertad sanitaria;
- causalidad de una covariable;
- diagnóstico a partir de una imagen visible o térmica.

### 1.4 Taxonomía obligatoria de productos

| Producto | Insumo principal | Significado permitido | Interpretación prohibida |
|---|---|---|---|
| Mapa descriptivo | casos, tasas o esfuerzo | distribución observada | riesgo futuro |
| Moran, Getis–Ord o LISA | valores y matriz espacial | asociación espacial exploratoria | foco causal o transmisión |
| Idoneidad relativa | presencia y fondo | contraste ambiental respecto del fondo | probabilidad calibrada de caso |
| Exposición potencial | idoneidad y ganado | coincidencia espacial-temporal | número de animales infectados |
| Riesgo epidemiológico | casos y negativos defendibles | probabilidad o tasa del estimando | distribución de la mosca |
| Pronóstico | información disponible antes del horizonte | predicción futura evaluada prospectivamente | descripción retrospectiva |
| Prioridad de vigilancia | riesgo, incertidumbre, esfuerzo y logística | orden de inspección | probabilidad epidemiológica |
| Anomalía térmica | radiometría | candidato para inspección | diagnóstico de GBG |
| Corredor | fricción y nodos | hipótesis de conectividad | trayectoria observada |
| Compatibilidad genética | muestras y referencia | afinidad o estructura | origen exacto o ruta demostrada |

Solo se utilizará el término **mapa de riesgo** cuando exista una respuesta epidemiológica definida, negativos o denominadores defendibles, evaluación en datos protegidos, calibración, soporte e incertidumbre. Un resultado presencia–fondo se denominará **idoneidad relativa** aunque sus valores estén entre 0 y 1.

### EJEMPLO SINTÉTICO 1 — nombre correcto del producto

Se dispone de siete casos confirmados y no existen UPP-periodos negativos con vigilancia activa. Se ajusta un modelo con presencia y fondo. Aunque la salida tenga valores de 0.02 a 0.91, el producto se llama **idoneidad relativa**, no probabilidad de caso. Cuando después se incorporan negativos defendibles, se demuestra una rama epidemiológica separada; no se cambia retroactivamente el nombre de la primera salida.

---

## 2. Modelo conceptual del proceso biológico, de observación y de decisión

**Fundamentación científica.** La ecología y epidemiología del GBG dependen de clima, hospedadores, heridas, manejo, movilidad, detección y respuesta; por ello el proceso biológico debe separarse del proceso de vigilancia y de las intervenciones reactivas (Forero Becerra et al., 2007; Skoda et al., 2018; Wijburg et al., 2026; Mamanova et al., 2026).

La metodología separa tres procesos que no deben confundirse.

### 2.1 Proceso biológico

La cadena mínima comprende:

1. introducción de adultos, larvas o animales infestados;
2. supervivencia y reproducción del insecto;
3. disponibilidad de hospedadores;
4. presencia y duración de heridas susceptibles;
5. encuentro entre hembra y herida;
6. infestación y desarrollo larvario;
7. resolución natural, tratamiento o progresión.

Las covariables se asignarán a un eslabón específico:

- adultos: temperatura, humedad, viento, refugio, recursos florales, hospedadores y movilidad;
- huevos y larvas: microambiente de la herida, tejido, tratamiento y tiempo desde lesión;
- pupas: temperatura y humedad del suelo, sombra, cobertura, materia orgánica y drenaje;
- heridas: partos, castración, descorne, alambre, ectoparásitos, transporte y manejo.

### 2.2 Proceso de observación

Un caso existente puede no ser observado. Conceptualmente:

\[
P(\text{caso observado}) = P(\text{infestación}) \times P(\text{animal inspeccionado}) \times P(\text{lesión detectada}) \times P(\text{muestra obtenida}) \times P(\text{identificación correcta}) \times P(\text{reporte}).
\]

Cada transición deberá conservar un denominador. Cuando no puedan estimarse todos los componentes, se incorporarán medidas de vigilancia y la inferencia se describirá como riesgo de **caso confirmado bajo el sistema de observación existente**, no como incidencia biológica latente.

### 2.3 Proceso de decisión

Una predicción solo adquiere utilidad operativa cuando existe una ruta explícita:

> predicción → priorización → asignación → inspección → muestreo → diagnóstico → intervención → cierre → retroalimentación.

Las intervenciones son con frecuencia respuestas al riesgo. Tratamiento, aumento de vigilancia, control de movimientos, campañas y visitas extraordinarias conservarán fecha, motivo e intensidad. No se interpretarán como factores protectores o causales sin un diseño causal específico.

### EJEMPLO SINTÉTICO 2 — vigilancia desigual

La UPP-S01 recibe cuatro inspecciones mensuales y la UPP-S02 ninguna. S01 registra dos casos y S02 cero reportes. El cero de S02 no se codifica como ausencia. La diferencia puede reflejar enfermedad, vigilancia o ambas; por ello S02 queda como **no evaluable**.

---

## 3. Área de estudio, población, unidades y dominios

**Fundamentación científica.** La definición previa de unidades, soporte, resolución y dominios de calibración y proyección es indispensable para evitar falsa precisión, truncamiento del nicho e inferencias fuera de la población observada (Elith y Leathwick, 2009; Moudrý et al., 2024; Guisan et al., 2025; Gilbert et al., 2018).

### 3.1 Área

El área comprometida son los municipios de Escárcega y Champotón, Campeche, y las UPP válidas del padrón autorizado. Los límites administrativos son límites de gestión, no barreras ecológicas.

### 3.2 Unidad epidemiológica primaria

La unidad primaria será la combinación **UPP–periodo móvil**. Para el horizonte principal:

\[
Y_{i,t+1}=1
\]

si se confirma al menos un caso nuevo en la UPP \(i\) durante los 30 días posteriores a la fecha de corte \(t\). Se codificará:

\[
Y_{i,t+1}=0
\]

solo cuando el UPP-periodo cumpla los requisitos de vigilancia negativa definidos posteriormente. En los demás casos será `NO_EVALUABLE`.

### 3.3 Entidades con identificadores no reutilizables

Se asignará un identificador estable a:

- productor o responsable;
- UPP y polígono;
- visita;
- animal;
- lesión;
- muestra;
- resultado diagnóstico;
- reporte, caso, episodio y brote;
- trampa y periodo de exposición;
- movimiento pecuario;
- campaña, misión, vuelo, imagen, video y ortomosaico;
- estación y observación meteorológica;
- raster, covariable, modelo, corrida, predicción y alerta.

### 3.4 Dominios separados

Se versionarán de forma independiente:

1. dominio administrativo;
2. dominio realmente vigilado;
3. dominio de UPP elegibles para riesgo;
4. área accesible entomológica;
5. dominio de calibración de cada modelo;
6. dominio de proyección con predictores compatibles;
7. dominio local efectivamente sobrevolado;
8. dominio público agregado y anonimizado.

Ningún dominio se derivará automáticamente de la extensión de un raster, una envolvente de casos o un buffer fijo.

### 3.5 Soporte y resolución

Cada dato tendrá ubicación original y corregida, precisión, fecha o intervalo, unidad espacial efectiva y periodo de validez. Un raster de 10 m no convierte un censo municipal, una UPP puntual o una climatología en información de 10 m.

Mallas candidatas:

- 1 km para contexto climático;
- 250 m para integración territorial;
- polígonos de UPP para riesgo epidemiológico;
- objetos y celdas de alta resolución dentro de UPP para microhábitat.

La decisión sanitaria se reportará por UPP o comunidad, no por píxeles con falsa precisión.

---

## 4. Gobernanza, permisos, ética y factibilidad antes del campo

**Fundamentación científica.** La gobernanza se trata como parte del diseño científico porque la cobertura, el acceso, la custodia y la participación pueden modificar tanto el proceso de observación como la equidad del sistema (Lerner y Berg, 2017; Destoumieux-Garzón et al., 2018; Steele et al., 2026).

Antes de adquirir datos deben existir reglas sobre:

- consentimiento de productores;
- autorización de entrada, vuelo, fotografía y termografía;
- propiedad y custodia de cada modalidad;
- acceso por roles;
- retención, revocación y eliminación;
- publicación o enmascaramiento de coordenadas;
- intercambio entre instituciones;
- operación sin conectividad;
- almacenamiento, respaldo y recuperación;
- costos, mantenimiento y horas de trabajo.

Cada fuente tendrá propietario, custodio, finalidad, nivel de sensibilidad y condiciones de publicación. Interoperabilidad no significa acceso irrestricto. Los productos públicos agregarán o enmascararán coordenadas sensibles.

### 4.1 Equidad

Se auditará cobertura y desempeño por municipio, comunidad, conectividad, tamaño de UPP, capacidad de reporte e intensidad de vigilancia. Una zona con pocos casos y poca vigilancia no se clasificará automáticamente como bajo riesgo.

### 4.2 Salud humana y fauna

Los módulos de salud humana y fauna mantendrán instituciones, permisos, denominadores, rutas diagnósticas y bases separadas. No se fusionarán registros humanos, bovinos y fauna como una única respuesta.

### Puerta de inicio

No comenzará el campo definitivo sin padrón inicial, permisos, protocolo diagnóstico, inventario técnico, esquema de custodia y plan de respaldo.

### EJEMPLO SINTÉTICO 3 — permiso parcial

La UPP-S07 autoriza visita clínica, pero no vuelo. Permanece elegible para vigilancia epidemiológica y se excluye del componente UAV. No se imputa una imagen ni se reemplaza por otra UPP sin registrar el cambio de estrato.

---

## 5. Padrón de UPP, depuración y selección del panel

**Fundamentación científica.** La selección debe respetar la estructura jerárquica, la heterogeneidad territorial y la independencia de la evaluación; el tamaño nominal pierde significado cuando las unidades están agrupadas o cuando la prueba reproduce el mismo proceso de muestreo (Roberts et al., 2017; Valavi et al., 2019; Galvis et al., 2026).

### 5.1 Padrón maestro

Antes del muestreo se construirá una tabla maestra con:

- identificador estable;
- nombre original y normalizado;
- municipio y comunidad;
- coordenada original, método, precisión y fecha;
- coordenada verificada;
- polígono, superficie y fuente;
- inventario por especie y categoría;
- sistema de producción;
- prácticas de manejo y calendario;
- antecedentes de miasis y GBG;
- movilidad de animales;
- accesibilidad y conectividad;
- intensidad histórica de vigilancia;
- permisos de visita, vuelo y uso de datos;
- estado: elegible, pendiente o excluida, con motivo.

La plantilla completa se conserva en plantilla operativa de UPP *(recurso operativo no incluido en la versión pública)*.

Duplicados, variantes ortográficas y conflictos coordenada–comunidad se resolverán antes de seleccionar la muestra. El registro original permanecerá inmutable y la versión normalizada conservará trazabilidad.

### 5.2 Universo descriptivo y universo analítico

Todas las UPP cooperantes con identidad y localización verificables integrarán el universo descriptivo. Una UPP-periodo será elegible para riesgo únicamente si tiene respuesta, vigilancia mínima y covariables temporalmente compatibles.

### 5.3 Panel de desarrollo

La hipótesis operativa inicial es 24 UPP de desarrollo, 12 por municipio. Se estratificarán por:

- comunidad;
- antecedentes positivos y sin antecedentes;
- inventario y densidad;
- agua, sombra y vegetación;
- manejo y heridas;
- movilidad;
- accesibilidad;
- gradientes ambientales;
- intensidad de vigilancia.

El número 24 no se considerará suficiente por decreto. Antes del cierre se estimarán:

1. eventos independientes esperados;
2. precisión de sensibilidad y calibración;
3. tamaño efectivo tras agrupación por UPP y campaña;
4. representación de estratos;
5. factibilidad logística.

Si se requieren más UPP y existen elegibles, se ampliará el panel. Si el universo es menor, se incluirán todas y se reducirá la complejidad.

### 5.4 Conjunto externo

La meta inicial es seis UPP externas, tres por municipio. No participarán en selección de variables, fondo, pseudoausencias, hiperparámetros, algoritmo, calibración, ensamble o umbral. Si no pueden reservarse UPP, se reservará una campaña o periodo futuro completo. Una división aleatoria del mismo conjunto no se denominará externa.

### 5.5 Muestreo jerárquico

La jerarquía será:

\[
\mathrm{UPP}\rightarrow\mathrm{potrero/corral/grupo}\rightarrow\mathrm{animal}\rightarrow\mathrm{lesión}\rightarrow\mathrm{muestra}.
\]

El piloto comparará cobertura amplia con menor intensidad frente a inspección intensiva de menos unidades; selección aleatoria frente a dirigida; y reglas sistemáticas frente a selección basada en signos. La selección dirigida nunca será la única vía.

### EJEMPLO SINTÉTICO 4 — depuración y partición

Se reciben 34 registros. Tres son duplicados por variantes del nombre del productor y uno presenta coordenadas fuera del municipio sin respaldo. Quedan 30 UPP elegibles. Veinticuatro se asignan al desarrollo y seis se sellan como externas. Esta cifra demuestra el procedimiento, no establece que el panel real será suficiente.

---

## 6. Vigilancia, diagnóstico y construcción de eventos

**Fundamentación científica.** Los negativos solo son defendibles cuando existe búsqueda documentada, mientras que la falta de reporte debe modelarse como ausencia de observación; la complementariedad diagnóstica y la trazabilidad de la cascada son requisitos para construir una respuesta epidemiológica válida (Forero Becerra et al., 2007; Skoda et al., 2018; Wijburg et al., 2026; Mamanova et al., 2026).

### 6.1 Definiciones

**Caso confirmado:** animal con miasis y larvas identificadas como *C. hominivorax* mediante confirmación oficial, identificación morfológica por personal acreditado con cadena de custodia o método molecular validado.

**Caso probable:** miasis compatible inspeccionada por personal capacitado, con evidencia documentada, pero sin identificación específica suficiente.

**Caso sospechoso:** reporte comunitario o clínico sin inspección y confirmación trazables.

**No caso observado:** animal efectivamente inspeccionado en una visita definida sin lesión compatible ni larvas. Solo aplica al animal y momento inspeccionados.

**UPP-periodo negativo defendible:** periodo con vigilancia activa documentada, animales presentes y examinados, áreas cubiertas, responsable, protocolo, oportunidad diagnóstica, tratamientos recientes, ausencia de confirmado y canal de seguimiento activo.

La falta de reporte, una UPP no visitada o una trampa sin esfuerzo conocido serán `NO_EVALUABLE`, no negativos.

### 6.2 Cascada de vigilancia

Se registrará:

> UPP seleccionada → visita realizada → animales presentes → animales observables → animales examinados → heridas detectadas → muestras obtenidas → muestras conservadas → identificación realizada → resultado validado → evento notificado.

Cada transición tendrá numerador, denominador, fecha, responsable y motivo de pérdida.

### 6.3 Laboratorio y cadena de custodia

Antes del campo se acordarán con SENASICA y laboratorios:

- definición operativa definitiva;
- método morfológico y molecular;
- recolector y receptor;
- recipiente y preservación;
- transporte y tiempos máximos;
- controles positivos y negativos;
- revisión y liberación del resultado;
- conservación de muestra y archivos crudos;
- responsabilidades y ruta de corrección.

Un probable o sospechoso no sustituirá silenciosamente a un confirmado.

### 6.4 Episodios e independencia

Registros del mismo animal y lesión permanecerán en un episodio mientras no exista resolución documentada. Una nueva lesión o infestación posterior a resolución constituirá un episodio distinto. Casos de animales diferentes serán casos distintos, pero compartirán UPP, periodo y brote cuando corresponda.

La deduplicación empleará identidad, fecha, animal, lesión, muestra, diagnóstico y fuente. No se aplicará adelgazamiento espacial general a casos epidemiológicos.

### 6.5 Uso analítico

- análisis primario: confirmados;
- sensibilidad: confirmados más probables;
- sospechosos: señal de vigilancia y demanda de inspección;
- negativos: únicamente bajo vigilancia defendible;
- históricos imprecisos: descripción agregada o sensibilidad.

La estructura completa de captura se conserva en eventos y vigilancia *(recurso operativo no incluido en la versión pública)*.

### EJEMPLO SINTÉTICO 5 — deduplicación

Dieciocho reportes iniciales corresponden, después de vincular animales, lesiones y muestras, a once eventos independientes: siete confirmados, dos probables y dos sospechosos. Dos UPP sin reporte quedan no evaluables. Cinco UPP-periodos cumplen vigilancia negativa. El ejemplo ilustra la transformación; no describe casos reales.

---

## 7. Temporalidad, campañas y prevención de fuga

**Fundamentación científica.** Las ventanas y horizontes deben corresponder a la precisión temporal disponible y seleccionarse dentro del desarrollo; la evaluación de cambio y de transferencia futura no puede sustituirse por reconstrucciones retrospectivas o particiones aleatorias (Elith y Leathwick, 2009; Piirainen et al., 2023; Koldasbayeva y Zaytsev, 2025).

### 7.1 Precisión temporal

Cada evento se clasificará como:

- fecha exacta;
- intervalo corto;
- semana aproximada;
- mes aproximado;
- fecha de reporte sin fecha de inicio;
- temporalidad no recuperable.

La precisión temporal determinará las ventanas permitidas. Un registro con mes aproximado no se utilizará para validar una exposición de tres días.

### 7.2 Ventanas candidatas

Para lluvia, temperatura, humedad, agua, sombra, heridas, tratamientos y movilidad se evaluarán ventanas de 1, 3, 7, 14, 21 y 30 días y otras biológicamente justificadas. La selección se realizará dentro de folds de entrenamiento.

### 7.3 Campañas base

| Campaña | Periodo inicial | Papel |
|---|---|---|
| C1 | agosto–septiembre de 2026 | lluvias y línea base |
| C2 | noviembre–diciembre de 2026 | transición |
| C3 | marzo–abril de 2027 | sequía y piloto térmico |
| C4 | agosto–septiembre de 2027 | validación temporal protegida |

Las fechas son planificación inicial y deberán actualizarse si la ejecución real cambia. C4 no participará en selección de modelos.

### 7.4 Regla de corte

Para predecir después de \(t\), solo se utilizará información disponible hasta \(t\). Quedan prohibidas variables posteriores al horizonte, productos reprocesados con información futura si no se congelan correctamente y decisiones de preprocesamiento calculadas con el conjunto de prueba.

### EJEMPLO SINTÉTICO 6 — selección de ventana

Se comparan lluvia antecedente de 7, 14, 21 y 30 días dentro de los folds internos. La ventana de 14 días obtiene mejor desempeño sintético, pero las UPP externas no se consultan. La cifra no se adopta como parámetro real hasta validación.

### Contingencia temporal

Si la auditoría demuestra que la mayoría de los eventos solo tiene mes aproximado, el horizonte de 30 días se suspenderá. Se utilizarán periodos compatibles, análisis descriptivo o ventanas amplias y se prohibirá denominar pronóstico a una reconstrucción retrospectiva imprecisa.

---

## 8. Formularios, base relacional y diccionario de datos

**Fundamentación científica.** La reproducibilidad de modelos espaciales depende de contratos explícitos de datos, procedencia, versiones y equivalencia entre entrenamiento e inferencia, no únicamente del algoritmo elegido (Gorelick et al., 2017; Kass et al., 2021; Kass et al., 2024).

### 8.1 Datos mínimos por UPP

Identidad, polígono, superficie, inventario, sistema, potreros, corrales, agua, sombra, vegetación, residuos, manejo, heridas, ectoparásitos, partos, procedimientos, tratamientos, bioseguridad, entradas y salidas, visitas veterinarias, conectividad, permisos y observaciones.

### 8.2 Datos por visita

Tipo de vigilancia, motivo, fecha y hora, duración, observadores, áreas recorridas, animales presentes, observables y examinados, interrupciones, signos, muestras, tratamientos previos, canal de reporte, última inspección y próxima acción.

### 8.3 Datos por animal y lesión

Identidad, especie, sexo, edad, raza, categoría, condición, origen, movimiento, localización anatómica, tamaño, profundidad, fecha probable, humedad, costra, larvas, signos, fotografías, termografía, tratamiento, muestra y desenlace.

### 8.4 Tablas mínimas

`upp`, `poligonos_upp`, `visitas`, `animales`, `lesiones`, `muestras`, `resultados`, `casos`, `episodios`, `brotes`, `trampas`, `movimientos`, `vuelos`, `imagenes`, `videos`, `meteorologia`, `rasters`, `cobertura`, `covariables`, `vigilancia`, `particiones`, `modelos`, `predicciones`, `alertas`, `calidad`, `exclusiones` y `manifiestos`.

### 8.5 Identificadores y claves

Las claves nunca se reutilizarán. Toda relación deberá poder recorrerse desde UPP hasta resultado y desde predicción hasta datos de entrada. Se prohibirán combinaciones implícitas basadas únicamente en nombre o proximidad.

### 8.6 Diccionario

Cada campo tendrá nombre, entidad, definición, tipo, unidad, obligatoriedad, valores permitidos, regla de calidad, fuente, temporalidad, sensibilidad, código de faltante y consecuencia de ausencia. El detalle completo se conserva en diccionario de campos *(recurso operativo no incluido en la versión pública)*.

---

## 9. Estaciones meteorológicas, clima y satélite

**Fundamentación científica.** Las climatologías, reanálisis, observaciones satelitales y estaciones tienen soportes y significados distintos; la escala nominal de un producto no autoriza interpretarlo como microclima local sin comparación independiente (Fick y Hijmans, 2017; Gorelick et al., 2017; Abbasi, 2025; Ahmed et al., 2026).

### 9.1 Inventario y configuración

Se confirmarán documentalmente SKU, sensores, abrigo, consola, registrador, alimentación, comunicación, firmware, intervalos, almacenamiento y exportación de cada estación Davis. Ninguna capacidad se asumirá por el nombre comercial.

### 9.2 Instalación

- temperatura y humedad: 1.5–2 m con abrigo adecuado;
- pluviómetro: nivelado y sin obstrucciones;
- radiación y UV: horizonte despejado;
- anemómetro: 10 m cuando sea posible; otra altura se reportará como viento local;
- coordenadas, croquis y fotografías de emplazamiento.

### 9.3 Registro y control

Resolución inicial: cinco minutos. Se generarán agregados horarios y diarios. Se conservarán datos originales, UTC y hora local, sincronización, mantenimiento y banderas de calidad.

Una serie mensual será completa para resúmenes ordinarios con al menos 90 % de observaciones válidas. Periodos inferiores se marcarán y no se rellenarán silenciosamente.

### 9.4 Fuentes remotas

Se diferenciarán estación local, reanálisis, producto satelital dinámico, climatología, pronóstico y escenario climático futuro. Cada raster declarará proveedor, colección, versión, banda, unidad, escala, periodo, hora, resolución nativa, CRS, máscara, bits de calidad, remuestreo, porcentaje válido, condición observada o derivada y licencia.

### 9.5 LST y aire

La temperatura de superficie terrestre no equivale a temperatura del aire, suelo sombreado, herida o animal. Se comparará con estaciones según fecha, hora, cobertura y nubosidad. Sin comparación local, LST seguirá siendo covariable remota, no medición validada del microclima.

### EJEMPLO SINTÉTICO 7 — serie incompleta

Una estación tiene 82 % de completitud mensual. El mes se marca incompleto. No se interpola automáticamente y no se usa como referencia de validación plena. Otra estación con 96 % y faltantes breves puede aportar agregados con bandera de calidad.

### Contingencia climática

Si LST y temperatura del aire muestran desacuerdo sistemático, ambas variables se mantendrán separadas, se documentará su soporte y se prohibirá aplicar una corrección universal sin validación independiente.

---

## 10. Adquisición UAV, bienestar animal y productos

**Fundamentación científica.** La adquisición UAV debe diseñarse por tarea y documentar geometría, radiometría, condiciones atmosféricas, exactitud y perturbación; las configuraciones de otros estudios son puntos de partida de piloto, no parámetros transferibles (Giannetti et al., 2024; Amarasingam et al., 2025; Mashori et al., 2026).

### 10.1 Principio general

Cada misión se diseñará según la tarea: cartografía, cobertura, localización de animales, termografía de lesión, detección o seguimiento. Una configuración no se transferirá automáticamente entre tareas.

Se suspenderá el vuelo ante conducta de huida, agrupamiento intenso, agitación, riesgo de accidente, lluvia, viento fuera de seguridad, pérdida de enlace o incumplimiento legal.

### 10.2 Inventario previo

Se verificarán:

- plataforma, cámara y número de serie;
- firmware;
- RTK o NTRIP;
- GNSS para control;
- panel de reflectancia;
- baterías y ciclos;
- licencias de procesamiento;
- formatos de exportación;
- capacidad de almacenamiento y respaldo.

### 10.3 Piloto multiespectral

Configuraciones iniciales candidatas:

| Parámetro | Valor inicial | Alternativas |
|---|---:|---:|
| Altura | 80 m | 60 y 100 m |
| Traslape frontal | 80 % | 85 % |
| Traslape lateral | 75 % | 80 % |
| Velocidad | 5 m/s | según viento y tarea |
| Horario | 10:00–14:00 | condicionado por elevación solar |

El piloto comparará cobertura, GSD, geometría, radiometría, tiempo, baterías, nubosidad, viento y perturbación.

### 10.4 Calibración y georreferenciación

Se utilizará panel antes y después cuando exista, sensor de irradiancia limpio, captura simultánea y metadatos completos. Se requerirá RTK fijo en al menos 90 % de imágenes o controles independientes suficientes para demostrar precisión.

### 10.5 Criterios de aceptación

- cobertura del polígono al menos 95 %;
- ausencia de huecos relevantes;
- enfoque y exposición aceptables;
- bandas y metadatos íntegros;
- geometría verificada;
- panel y condiciones documentadas;
- reporte de misión, archivos y checksum.

La estructura completa de campañas y sensores se conserva en campañas y sensores *(recurso operativo no incluido en la versión pública)*.

### EJEMPLO SINTÉTICO 8 — misión rechazada parcialmente

Una misión presenta nubosidad variable. Se rechaza para reflectancia cuantitativa, pero se conservan las imágenes RGB para revisión visual con estado `USO_LIMITADO`. No se mezclan con misiones radiométricamente válidas.

---

## 11. Termografía y visión computacional

**Fundamentación científica.** La termografía remota requiere controles, repetibilidad y contexto ambiental, mientras que detección, seguimiento y conteo son tareas diferentes con referencias y métricas propias; ninguna sustituye al diagnóstico clínico (Włodarczyk y Jóźków, 2025; Grudzinski et al., 2026; Luo et al., 2026; Zhang et al., 2026; Zhao et al., 2026).

### 11.1 Papel de la termografía

La termografía localizará anomalías que requieran inspección. No diagnosticará GBG por sí sola.

### 11.2 Adquisición térmica

Para lesiones se registrarán:

- animal identificado;
- distancia y ángulo;
- al menos tres capturas y tres ángulos cuando sea seguro;
- archivo radiométrico;
- región lesionada, tejido adyacente y contralateral;
- controles sin lesión y heridas no GBG;
- temperatura, humedad, viento, radiación, pelaje, suciedad y actividad;
- referencia térmica terrestre cuando sea posible.

Variables candidatas: media, mediana, máximo, P95, diferencia con control, área, gradiente, textura y repetibilidad.

### 11.3 Puerta cuantitativa

Antes de análisis térmico cuantitativo se cerrarán:

- emisividad por pelaje, tejido y lesión;
- temperatura reflejada;
- correcciones atmosféricas;
- referencia térmica;
- repetibilidad entre ángulos;
- controles con heridas no GBG;
- tasa de falsas alertas.

Si no se demuestra repetibilidad y discriminación, la termografía permanecerá como localizador clínico.

### 11.4 Detección, seguimiento y conteo

Se tratarán como tareas distintas:

1. detectar bovinos por imagen;
2. mantener identidad aparente en secuencia;
3. contar individuos únicos;
4. geolocalizar detecciones.

Fotogramas vecinos, recortes y vistas del mismo animal permanecerán en el mismo subconjunto. Métricas de detección no se llamarán exactitud de inventario.

Métricas candidatas:

- detección: mAP50-95, precisión, recuperación, falsos positivos y omisiones;
- seguimiento: HOTA, MOTA, IDF1, cambios de identidad y fragmentación;
- conteo: sesgo, MAE, RMSE, sobreconteo y subconteo;
- operación: FPS integral, memoria, energía, latencia y tiempo de revisión.

### EJEMPLO SINTÉTICO 9 — termografía no repetible

Las diferencias térmicas cambian fuertemente entre ángulos y las heridas no GBG generan alertas similares. El módulo no avanza a clasificador diagnóstico. Se conserva únicamente para orientar una inspección veterinaria.

---

## 12. Movilidad pecuaria, trampas, área accesible y genética

**Fundamentación científica.** La conectividad puede reflejar dispersión biológica, movimiento pecuario o similitud ambiental, y la afinidad genética no demuestra por sí sola origen ni dirección; por ello se requieren redes temporales, escenarios de accesibilidad y referencias genómicas contemporáneas (Fresia et al., 2014; Mulieri y Patitucci, 2019; Tietjen et al., 2022; Tietjen et al., 2023; Zaldivar-Gomez et al., 2025; da Silva e Souza et al., 2025).

### 12.1 Movilidad

La red temporal debe contener origen, destino, fecha, especie, número de animales, propósito, vehículo, fuente y calidad. Distancia euclidiana, tiempo de viaje y red pecuaria serán hipótesis diferentes.

### 12.2 Vigilancia entomológica

Cada trampa registrará identificador, ubicación y precisión, UPP o sitio, tipo, atrayente, lote, instalación, retiro, días-trampa, clima, vegetación, hospedadores próximos, fallas, mantenimiento, capturas, identificación y esfuerzo perdido.

### 12.3 Área accesible

Se construirán escenarios separados:

1. accesibilidad biológica;
2. área cubierta por vigilancia;
3. accesibilidad mediante movilidad;
4. intersecciones o uniones justificadas de los anteriores.

Cada escenario será espacialmente explícito y versionado. No se elegirá por producir el AUC más alto.

### 12.4 Fondo para presencia–fondo

Dentro de cada fold se compararán:

- fondo uniforme dentro del área accesible;
- fondo estratificado ambiental o geográficamente;
- fondo que represente esfuerzo;
- grupo objetivo cuando comparta proceso de observación;
- negativos ambientalmente difíciles;
- ambientes claramente inadecuados.

Un punto de fondo no se denominará ausencia.

### 12.5 Corredores

Una ruta mínima o superficie de costo será una hipótesis de conectividad. Se evaluará sensibilidad a fricción, resolución, nodos, barreras y escenarios. No se utilizará `1 - idoneidad` como fricción automática.

### 12.6 Genética

La atribución requerirá una referencia contemporánea, regional, georreferenciada y basada principalmente en individuos silvestres. Se validará retirando individuos, sitios, campañas, poblaciones y regiones. El resultado permitirá `FUENTE_NO_REPRESENTADA` y `NO_ASIGNABLE`.

mtDNA, FST, afinidad o ausencia de aislamiento por distancia no demostrarán dirección, fecha ni ruta de introducción.

### EJEMPLO SINTÉTICO 10 — sensibilidad del fondo

Se comparan tres áreas accesibles y cuatro fondos. La idoneidad cambia en una franja norte. La franja se reporta como sensible a la definición del dominio; no se selecciona el escenario que maximiza AUC.

### Contingencia de movilidad

Si los movimientos cubren solo una fracción no cuantificable de las UPP, la red se utilizará descriptivamente. No se afirmarán corredores de introducción ni conectividad completa.

---

## 13. Curaduría, procedencia, calidad y faltantes

**Fundamentación científica.** La cantidad, incertidumbre posicional y sesgo de las ocurrencias alteran la respuesta del modelo; la corrección de sesgo y la imputación deben evaluarse dentro del entrenamiento y conservar indicadores explícitos de calidad y ausencia (Moudrý et al., 2024; Baker et al., 2024; Kass et al., 2024; Zbinden et al., 2026).

### 13.1 Estados del dato

Todo registro seguirá:

`ORIGINAL → NORMALIZADO → GEORREFERENCIADO → VALIDADO → ELEGIBLE → INCLUIDO`.

Los excluidos conservarán regla, responsable, fecha y posibilidad de reversión.

### 13.2 Coordenadas

Se conservarán coordenada original y corregida, método, precisión, fecha y unidad compatible. Cuando la incertidumbre exceda la escala del análisis, el registro se agregará o excluirá de ese producto.

### 13.3 Cero, ausencia y NoData

Se distinguirán:

- cero observado;
- ausencia confirmada;
- no detección con esfuerzo;
- dato no recolectado;
- dato perdido;
- fuera de cobertura;
- máscara normativa;
- no aplicable;
- imputado.

NoData nunca se convertirá automáticamente en cero.

### 13.4 Dependencias y circularidad

Se construirá un grafo de procedencia. Si una capa desagregada de ganado se generó con clima, vegetación o accesibilidad, no se interpretará posteriormente como evidencia independiente de esas mismas variables.

### 13.5 Faltantes

La causa y duración serán explícitas. La imputación se ajustará solo dentro del entrenamiento, con indicador de ausencia. Un valor imputado no se presentará como observado. Se probará la degradación al retirar modalidades completas.

### EJEMPLO SINTÉTICO 11 — geometría inválida

Un polígono se autocruza. El original se conserva, se crea una copia corregida, se registra la operación y se verifica el cambio de superficie. La corrección no sobrescribe el original.

---

## 14. Cobertura del paisaje, verdad de campo y covariables

**Fundamentación científica.** Las capas de cobertura y ganado solo pueden actuar como mediciones cuando su soporte, procedencia y validación independiente son compatibles con la unidad de decisión; productos globales o clasificaciones internas no sustituyen inventarios ni verdad de campo local (Fick y Hijmans, 2017; Gilbert et al., 2018; Giannetti et al., 2024; Guisan et al., 2025).

### 14.1 Clases iniciales

- pastizal;
- árboles y arbustos;
- suelo expuesto;
- construcciones;
- caminos;
- agua;
- suelo húmedo;
- sombra o no clasificable.

Objetos de manejo: corrales, bebederos, estanques, cursos, zonas de descanso y vegetación ribereña.

### 14.2 Verdad de campo

La referencia será independiente de los predictores y se estratificará por clase, UPP y campaña. UPP, potreros, vuelos y campañas relacionadas no cruzarán entre desarrollo y prueba. Se evaluará el producto final después del posprocesamiento.

Sin referencia independiente no se declarará validada la clasificación ni se utilizarán sus variables como mediciones definitivas.

### 14.3 Algoritmos de cobertura

Random Forest será línea base. U-Net u otra arquitectura solo se adoptará si supera de forma estable la línea base en unidades retenidas y existe referencia suficiente. No se adoptará aprendizaje profundo por novedad.

### 14.4 Familias de covariables

1. temperatura, humedad, lluvia, viento, radiación y déficit de presión de vapor;
2. LST diurna/nocturna y amplitud;
3. vegetación y estacionalidad;
4. agua, humedad y días desde lluvia;
5. suelo, relieve, drenaje y sombra;
6. cobertura y configuración del paisaje;
7. inventario, densidad y ubicación de hospedadores;
8. heridas, manejo y tratamientos;
9. movilidad y conectividad;
10. accesibilidad y servicios;
11. vigilancia y oportunidad diagnóstica;
12. intervención;
13. calidad y disponibilidad de datos.

### 14.5 Escalas y transformaciones

Extracciones territoriales candidatas: polígono de UPP y buffers de 100, 250, 500 y 1,000 m. Microhábitat: 5, 10, 25 y 50 m cuando la precisión lo permita.

Dentro de cada entrenamiento se recalcularán imputación, escalamiento, transformaciones, correlación, VIF, PCA, selección, escalas, ventanas, fondo, balance, hiperparámetros, calibración, ensamble y umbral.

### 14.6 Etiqueta funcional

Cada predictor se marcará como directo, recurso, proximal, distal, observacional o de calidad. Coordenadas, elevación, carreteras o cobertura no se interpretarán como mecanismos si solo absorben ubicación.

### EJEMPLO SINTÉTICO 12 — comparación de clasificadores

Random Forest supera una línea base trivial. U-Net mejora el promedio, pero falla en dos UPP retenidas y requiere mucha más anotación. No se adopta como modelo definitivo; queda en piloto.

---

## 15. Epidemiología espacial exploratoria

**Fundamentación científica.** Moran, Getis–Ord y LISA describen dependencia y asociación bajo una matriz definida, pero no prueban transmisión ni causalidad; su interpretación debe incorporar multiplicidad, sensibilidad de vecindario, esfuerzo y soporte (Getis y Ord, 1992; Anselin, 1995; Ngwira et al., 2024; Maulana et al., 2025; Heusler et al., 2025).

### 15.1 Secuencia obligatoria

1. mapear casos y esfuerzo;
2. calcular tasas solo con denominador;
3. evaluar distribución global;
4. analizar patrones locales;
5. comparar matrices y escalas;
6. formular hipótesis para modelación o muestreo.

### 15.2 Matrices espaciales

Se predefinirán según proceso:

- contigüidad de UPP o comunidades;
- distancia euclidiana;
- k vecinos;
- tiempo de viaje o red;
- conectividad pecuaria;
- espacio-tiempo.

Cada matriz tendrá unidad, dirección, periodo, normalización, tratamiento de islas y análisis de sensibilidad. No se elegirá la que produzca más significancia.

### 15.3 Moran global

Describirá autocorrelación de valores o residuos bajo la matriz declarada. Un resultado significativo no demostrará transmisión.

### 15.4 Getis–Ord

Se aplicará a variables positivas con origen natural. \(G_i\) excluirá el valor focal y \(G_i^*\) lo incluirá. El signo positivo representa concentración de valores altos y el negativo de valores bajos. No se aplicará G a residuos centrados.

### 15.5 LISA

Se reportarán HH, LL, HL y LH. Se separarán conglomerados significativos de contribuciones influyentes. Un valor extremo no equivale a hotspot significativo.

### 15.6 Inferencia local y multiplicidad

Se utilizarán permutaciones condicionales con semilla y número registrados. El análisis principal controlará FDR; una corrección de error familiar se reportará como sensibilidad.

### 15.7 KDE, elipse e interpolación

KDE representará intensidad observada; la elipse estándar, orientación descriptiva. Ninguno será riesgo, ruta ni transmisión. Kriging solo procederá para una variable continua con soporte, variograma evaluable y validación; no se hará kriging de UPP positivas como probabilidad.

### EJEMPLO SINTÉTICO 13 — sensibilidad del vecindario

Un agrupamiento aparece HH con k vecinos y deja de ser significativo con tiempo de viaje. Se reporta como resultado sensible. No se selecciona k vecinos por producir el mapa más llamativo.

---

## 16. Puertas de modelación y líneas base

**Fundamentación científica.** La familia de modelo debe depender del tipo de respuesta y de la información disponible; los modelos presencia–fondo, epidemiológicos y descriptivos responden a preguntas diferentes y deben compararse con líneas base y pruebas estructuradas (Phillips et al., 2006; Elith et al., 2006; Veloz, 2009; Roberts et al., 2017).

### 16.1 Puerta A — riesgo epidemiológico

Se abrirá si existen:

- casos confirmados suficientes e independientes;
- UPP-periodos negativos defendibles;
- covariables temporalmente compatibles;
- vigilancia cuantificada;
- prueba protegida.

### 16.2 Puerta B — idoneidad presencia–fondo

Se abrirá si existen presencias de calidad, pero no negativos defendibles. El producto será relativo y no se llamará riesgo.

### 16.3 Puerta C — evidencia insuficiente

Si los eventos o negativos no permiten modelación, se entregarán descripción, mapas de esfuerzo, exposición o idoneidad condicionada si es viable y diseño de vigilancia para adquirir información. No se fabricarán probabilidades mediante una suma ponderada arbitraria.

### 16.4 Líneas base

Antes de modelos complejos se evaluarán:

- prevalencia o riesgo medio;
- persistencia o último estado;
- promedio por comunidad;
- vecino más próximo;
- GLM simple o regularizado;
- tendencia temporal sencilla.

Un modelo complejo deberá demostrar valor frente a estas líneas base.

### Contingencia por pocos eventos

Con pocos eventos se reducirá el número de predictores, se limitarán funciones e interacciones, se aplicará regularización y se reportarán intervalos amplios. No se hará una afirmación fuerte de transferencia.

---

## 17. Modelo epidemiológico primario

**Fundamentación científica.** Los modelos de riesgo veterinario deben representar agrupación, tiempo, vigilancia y calibración, y demostrar utilidad fuera del conjunto usado para seleccionarlos; la complejidad no compensa denominadores o diagnósticos insuficientes (Dufleit et al., 2026; Mamanova et al., 2026; Keshavamurthy et al., 2026).

### 17.1 Forma principal

El modelo interpretable será logístico jerárquico de tiempo discreto o GAMM equivalente:

\[
\mathrm{logit}\{P(Y_{i,t+1}=1)\}=\beta_0+\sum_k f_k(X_{kit})+b_i+c_{j(i)}+s(t)+\gamma^T O_{it},
\]

con:

- \(f_k\): efectos lineales o suaves justificados;
- \(b_i\): efecto de UPP cuando existan repeticiones;
- \(c_{j(i)}\): efecto de comunidad o nivel superior;
- \(s(t)\): estacionalidad o tendencia;
- \(O_{it}\): variables del proceso de observación.

La complejidad se limitará por eventos efectivos. Con separación o pocos eventos se aplicará regularización o estimación jerárquica.

### 17.2 Conteos

Para número de casos se compararán Poisson y binomial negativa, con animales bajo vigilancia como exposición. Cero-inflación solo se utilizará cuando se justifique un proceso estructural separado.

### 17.3 Comparadores

- GLM regularizado;
- GAMM;
- Random Forest;
- XGBoost o GBM si el tamaño efectivo lo permite.

### 17.4 Interacciones candidatas

Temperatura×humedad, lluvia×heridas, lluvia×suelo, agua×sombra, densidad×movilidad y manejo×vigilancia. Se probarán con hipótesis previa y dentro del entrenamiento.

### 17.5 Explicación

Coeficientes, permutación o valores de Shapley explicarán el comportamiento del modelo, no causalidad. Se evaluará estabilidad entre folds y correlación entre predictores.

---

## 18. Modelación presencia–fondo con `maxnet`

**Fundamentación científica.** MaxEnt estima una distribución relativa condicionada al dominio y al fondo; su complejidad, sesgo, regularización y salida deben seleccionarse y evaluarse explícitamente, sin interpretar automáticamente una salida entre cero y uno como probabilidad de caso (Phillips et al., 2006; Phillips y Dudík, 2008; Muscarella et al., 2014; Fourcade et al., 2014; Cobos et al., 2019; Yoon y Lee, 2026).

`maxnet` será la implementación canónica en R para MaxEnt. Maxent Java se utilizará únicamente para reproducción histórica, sensibilidad o una función no disponible, con prueba de paridad.

### 18.1 Uso

Solo se aplicará para presencia–fondo y con estimando relativo. No convertirá casos de UPP directamente en probabilidad calibrada.

### 18.2 Ajuste

Dentro de validación anidada se seleccionarán:

- área accesible;
- fondo;
- corrección de sesgo;
- clases de características;
- regularización;
- variables;
- resolución;
- clamping;
- salida y umbral comunicativo.

Los valores históricos del programa serán líneas base, no defaults científicos.

### 18.3 Sesgo y thinning

Toda corrección se comparará contra no corregir. Filtrado, ponderación, bias file y fondo restringido serán hipótesis. El thinning no sustituirá deduplicación ni validación independiente.

### 18.4 Salida

Se conservará la salida continua y se declarará raw, logística o cloglog. Se llamará idoneidad o tasa relativa. Un intervalo de 0 a 1 no será probabilidad sin calibración externa y supuestos de prevalencia.

### 18.5 Evaluación

Se reportarán omisión, discriminación frente al fondo declarado, estabilidad, curvas, complejidad, transferencia, soporte y desempeño independiente. AICc, AUC o parcial ROC no decidirán solos.

---

## 19. Ensambles y fusión multimodal

**Fundamentación científica.** Los ensambles representan incertidumbre condicionada al universo de modelos y solo agregan valor cuando superan modelos individuales; la fusión multimodal exige líneas base por modalidad y evaluación explícita cuando una fuente falta (Araújo y New, 2007; Elith et al., 2006; Zhao et al., 2026; Zhang et al., 2026).

### 19.1 Ensamble

Un ensamble declarará estimando común, familias, implementaciones, configuraciones, particiones, fondos, escenarios, regla de elegibilidad, unidad de voto, pesos y método de combinación.

Se evitará que una familia domine por tener más hiperparámetros. Los pesos se aprenderán solo en entrenamiento. Se conservarán predicciones individuales, mediana, cuantiles, rango, desacuerdo y soporte.

El ensamble solo se adoptará si supera al mejor modelo individual o mejora calibración, estabilidad o transferencia de forma defendible.

### 19.2 Fusión multimodal

Cada modalidad se evaluará primero sola. Se compararán fusión temprana, tardía e híbrida con las mismas particiones. Se retirará una modalidad a la vez para medir dependencia y degradación.

La fusión solo avanzará si mejora la tarea principal y mantiene operación cuando falten modalidades. No se asignarán pesos por número de variables.

### EJEMPLO SINTÉTICO 14 — modalidad frágil

La fusión mejora el desempeño cuando existe termografía, pero esa modalidad falta en la mitad de las campañas y su ausencia degrada severamente la salida. El sistema multimodal no se adopta como núcleo operativo; se conserva un modelo reducido preespecificado.

---

## 20. Validación protegida y congelamiento

**Fundamentación científica.** La validación debe reproducir la transferencia prevista y mantener juntas las observaciones relacionadas; el bloqueo espacial, el encadenamiento temporal y el congelamiento previo a la prueba reducen el optimismo causado por dependencia y selección reiterada (Roberts et al., 2017; Valavi et al., 2019; Ploton et al., 2020; Piirainen et al., 2023; Koldasbayeva y Zaytsev, 2025).

### 20.1 Diseño anidado

1. bucle interno para preprocesamiento, selección e hiperparámetros;
2. bucle externo para estimar transferencia;
3. prueba externa con UPP o periodo completamente retenido.

No se utilizará división aleatoria simple como validación principal.

### 20.2 Agrupación

Animales, lesiones, episodios, UPP, campañas, vuelos y secuencias relacionadas permanecerán en un solo fold.

### 20.3 Escenarios de transferencia

Se reportará por separado:

- nueva observación en UPP conocida;
- periodo futuro en UPP conocida;
- nueva UPP en comunidad conocida;
- nueva comunidad;
- nueva región o corredor;
- nueva campaña, brigada o laboratorio;
- ambiente novedoso.

### 20.4 Espacio y tiempo

Se aplicarán leave-one-community-out o bloques equivalentes, forward chaining pasado→futuro, C4 como validación temporal y prueba externa prospectiva. Tamaño y orientación de bloques se decidirán en desarrollo.

### 20.5 Métricas

Para riesgo binario:

- ROC-AUC y PR-AUC;
- sensibilidad, especificidad, precisión y F1;
- Brier;
- intercepto y pendiente de calibración;
- curva de calibración;
- PPV y NPV bajo prevalencias relevantes;
- costo o utilidad;
- intervalos que respeten agrupación.

Para conteos: MAE, RMSE, devianza, calibración y cobertura de intervalos.

### 20.6 Congelamiento

Antes de evaluación externa se congelarán datos elegibles, código, ambiente, variables, ventanas, escalas, algoritmo, hiperparámetros, calibración, ensamble, umbral y formato de salida. Un cambio posterior invalidará esa prueba para selección.

### EJEMPLO SINTÉTICO 15 — validación pequeña

Se reservan seis UPP, pero solo ocurre un evento confirmado en ellas. Se reporta la evaluación con intervalos amplios como evidencia parcial. No se afirma transferencia robusta ni calibración definitiva.

---

## 21. Incertidumbre, soporte y abstención

**Fundamentación científica.** La incertidumbre debe descomponerse por fuente, escenario, modelo y transferencia; las proyecciones fuera del soporte requieren diagnóstico de novedad y una regla de abstención, no solo dispersión entre modelos (Ploton et al., 2020; Brodie et al., 2022; Bracho-Estévanez et al., 2024; Mearns et al., 2025; Guisan et al., 2025).

### 21.1 Ledger de incertidumbre

Cada producto registrará incertidumbre de:

- respuesta y diagnóstico;
- observación;
- coordenada;
- tiempo;
- covariables;
- soporte;
- modelo e hiperparámetros;
- fondo o pseudoausencias;
- escenario;
- intervención;
- transferencia;
- operación y faltantes.

### 21.2 Productos obligatorios junto a la predicción

1. soporte ambiental;
2. distancia al entrenamiento;
3. novedad univariada y multivariada;
4. densidad de datos;
5. intensidad de vigilancia;
6. calidad y recencia de covariables;
7. desacuerdo entre modelos;
8. máscara de no evaluabilidad.

MESS o MOP se interpretarán como soporte, no como error.

### 21.3 Regla de abstención

El sistema marcará `NO_EVALUABLE` cuando:

- falten predictores críticos;
- la combinación ambiental esté fuera del soporte acordado;
- la UPP no tenga georreferencia compatible;
- la vigilancia sea desconocida para un estimando que la requiera;
- falle calidad o versión;
- la distancia de transferencia exceda el rango validado;
- no se cumpla la puerta del modelo.

### Contingencia por modalidad faltante

Se activará un modelo reducido previamente especificado; se registrará la modalidad ausente y no se imputará silenciosamente. Si no existe modelo reducido validado, el sistema se abstendrá.

---

## 22. Cartografía, umbrales, alertas y carga operativa

**Fundamentación científica.** La cartografía sanitaria solo se vuelve operativa al vincular predicción, capacidad, consecuencias y respuesta; los umbrales estadísticos no son automáticamente umbrales de acción y la participación institucional forma parte de la validez del sistema (Liu et al., 2024; Jean-Baptiste, 2026; Dufleit et al., 2026; Steele et al., 2026).

### 22.1 Capas mínimas

- UPP y comunidades con confidencialidad;
- casos confirmados, probables y sospechosos diferenciados;
- esfuerzo y cobertura;
- idoneidad relativa;
- exposición potencial;
- riesgo cuando cumpla puertas;
- incertidumbre y soporte;
- prioridad de vigilancia;
- fecha de actualización;
- máscara no evaluable.

### 22.2 Metadatos del mapa

Título, estimando, unidad, periodo, población, fuente, versión, CRS, resolución, soporte, método, validación, incertidumbre, limitaciones, autor, fecha y sensibilidad.

### 22.3 Representación

La superficie continua será primaria. Percentiles podrán usarse para comunicación como clases relativas, no umbrales biológicos.

### 22.4 Dos prioridades separadas

1. **prioridad de intervención o confirmación:** evidencia epidemiológica alta y acción definida;
2. **prioridad de información:** exposición o idoneidad alta, incertidumbre alta y vigilancia insuficiente.

No se promediarán arbitrariamente.

### 22.5 Matriz sanitaria

Antes de definir umbral se acordarán:

- costo de omitir un foco;
- costo de una falsa alarma;
- capacidad diaria y semanal;
- distancia y tiempo de traslado;
- responsable de recibir y asignar;
- tiempo máximo de respuesta;
- tasa tolerable de falsas alertas;
- proporción mínima accionable.

Youden, percentil 10 y cortes publicados serán comparadores, no umbrales sanitarios automáticos.

### 22.6 Ciclo de alerta

Cada alerta registrará puntaje, soporte, nivel, fecha, receptor, asignación, inspección, diagnóstico, intervención, tiempo, cierre y desenlace. La plantilla completa se conserva en alertas y decisiones *(recurso operativo no incluido en la versión pública)*.

### EJEMPLO SINTÉTICO 16 — saturación

La capacidad es cinco inspecciones diarias y se generan 18 alertas. Se aplican niveles predefinidos, se atienden las cinco primeras y se registra qué alertas quedan pendientes. No se oculta la saturación ni se evalúa desempeño solo sobre alertas atendidas.

### Contingencia de carga

Si la carga excede sistemáticamente la capacidad, se revisarán umbral, frecuencia, priorización y recursos. Hasta cerrar la discrepancia, el producto será lista analítica y no sistema operativo plenamente validado.

---

## 23. Piloto integrado y puertas de escalamiento

**Fundamentación científica.** Los pilotos deben verificar simultáneamente muestreo, diagnóstico, sensores, logística, bienestar y carga de trabajo antes de escalar; una configuración técnicamente posible no es suficiente si no produce datos utilizables y decisiones atendibles (Skoda et al., 2018; Galvis et al., 2026; Mashori et al., 2026; Grudzinski et al., 2026).

### 23.1 Piloto mínimo

Cuatro UPP, dos por municipio, contrastantes en agua, vegetación, manejo y antecedentes.

### 23.2 Puerta A — inicio de campo

Requiere:

- padrón y polígonos;
- número real del panel;
- consentimiento y gobernanza;
- protocolo diagnóstico;
- inventario técnico;
- piloto UAV;
- diseño de verdad de campo.

### 23.3 Puerta B — modelación epidemiológica

Requiere:

- eventos deduplicados;
- negativos defendibles o limitación formal;
- sensibilidad de vigilancia;
- temporalidad compatible;
- catálogo climático y satelital;
- movilidad y esfuerzo;
- dominio y fondos definidos como escenarios.

### 23.4 Puerta C — declarar transferencia, riesgo o alerta

Requiere:

- validación externa;
- denominadores;
- calibración y soporte;
- análisis de sensibilidad;
- matriz de costos;
- capacidad operativa;
- umbral acordado;
- ciclo de alerta probado.

### 23.5 Puerta D — módulos avanzados

Termografía cuantitativa, genómica, seguimiento, U-Net, fusión multimodal y proyecciones futuras requieren referencia, permisos, valor externo y operación ante faltantes.

### 23.6 Criterios técnicos del piloto

- delimitación y permisos;
- cobertura UAV ≥95 %;
- ortomosaicos válidos;
- precisión independiente compatible;
- calibración multiespectral;
- archivos térmicos radiométricos analizables;
- formularios y vínculos completos;
- almacenamiento y respaldo;
- ausencia de perturbación inaceptable;
- latencia y carga medibles.

---

## 24. Control de calidad, software y reproducibilidad

**Fundamentación científica.** La pluralidad de implementaciones puede mejorar la ciencia solo si se documentan versiones, parámetros, semillas, particiones, artefactos y equivalencia de ejecución; la interfaz o popularidad de un paquete no sustituyen pruebas de reproducibilidad (Gorelick et al., 2017; Cobos et al., 2019; Kass et al., 2021; Kass et al., 2024).

### 24.1 Entorno

Se registrarán commit, ambiente bloqueado, versiones de R, Python, GDAL, GEOS y PROJ, semillas, configuración, identificador de corrida, checksums y manifiesto de entradas y salidas. Los scripts no instalarán paquetes durante la ejecución.

### 24.2 Fallos

No existirán fallbacks silenciosos. Un módulo se detendrá como `NO_EJECUTABLE` cuando falle una condición científica, de calidad o procedencia.

### 24.3 Artefactos

Cada artefacto declarará nombre, ruta, productor, versión, periodo, CRS, resolución, unidades, checksum, dependencias y estado observado, derivado, imputado, simulado o provisional.

### 24.4 Pruebas automáticas

Se comprobarán:

- claves, duplicados y porcentajes;
- CRS, extensión y resolución;
- unidades y rangos;
- integridad de archivos;
- bandas y orden;
- igualdad entre entrenamiento e inferencia;
- fechas y fuga temporal;
- ausencia de solapamiento entre folds;
- consistencia de tablas y leyendas;
- reproducción de métricas y mapas.

### 24.5 Operación sin conectividad

Se definirán captura local, cola de sincronización, resolución de conflictos, cifrado, respaldo físico, restauración y verificación de integridad.

---

## 25. Caso sintético integral de principio a fin

Todo el caso siguiente es ficticio y únicamente demuestra el flujo.

### 25.1 Padrón

Se reciben 34 registros. Se conservan originales, se normalizan nombres, se resuelven tres duplicados y se excluye temporalmente una localización sin respaldo. Quedan 30 UPP sintéticas.

### 25.2 Partición

Veinticuatro UPP se destinan a desarrollo y seis se sellan como externas. La asignación cubre municipios, manejo, agua, vegetación, antecedentes y vigilancia.

### 25.3 Vigilancia y diagnóstico

Se programan visitas, se registran animales presentes y examinados, se vinculan lesiones y muestras y se reconstruye cadena de custodia. Dieciocho reportes producen once eventos independientes: siete confirmados, dos probables y dos sospechosos. Cinco UPP-periodos cumplen vigilancia negativa; dos UPP sin visita quedan no evaluables.

### 25.4 Temporalidad

Se clasifican fechas por precisión. Los eventos con fecha exacta participan en ventanas cortas; los mensuales solo en análisis compatible. Ventanas de lluvia y humedad se comparan dentro del desarrollo.

### 25.5 Campo y sensores

Se verifica inventario. RTK aparece pendiente y una licencia no está confirmada; por tanto no se presupone su disponibilidad. El piloto compara alturas y traslapes. Una misión se rechaza para reflectancia por nubosidad, pero conserva uso visual limitado.

### 25.6 Clima y satélite

Una estación con 82 % de completitud se marca incompleta. Se construyen compuestos satelitales con fechas y porcentaje válido. LST se mantiene separada de temperatura del aire.

### 25.7 Verdad de campo y cobertura

Se reservan muestras por UPP y campaña. Random Forest supera la línea base; U-Net no muestra mejora estable y permanece como piloto.

### 25.8 Epidemiología espacial

Se mapean casos y esfuerzo. Moran, Getis–Ord y LISA se ejecutan con matrices predefinidas. Un patrón cambia según matriz y se reporta como sensible.

### 25.9 Puerta de modelo

La rama presencia–fondo utiliza `maxnet` y produce idoneidad relativa. La rama epidemiológica solo se ejecuta con negativos defendibles y produce una probabilidad de caso bajo vigilancia existente. Ambas se mantienen separadas.

### 25.10 Selección y congelamiento

Preprocesamiento, variables, ventanas, escalas, fondo, hiperparámetros, calibración y umbral se seleccionan sin consultar las seis UPP externas. Después se congela el pipeline.

### 25.11 Validación

Las seis UPP externas producen pocos eventos. Se reportan métricas e intervalos amplios y la conclusión se limita a evidencia parcial.

### 25.12 Mapas y alertas

Se generan superficie continua, soporte, incertidumbre, vigilancia y máscara no evaluable. La capacidad de cinco inspecciones se enfrenta a 18 alertas; se prioriza y se registran las no atendidas.

### 25.13 Retroalimentación

Los desenlaces de inspección, diagnóstico e intervención ingresan como datos nuevos con fecha posterior. No se reescribe el pasado; se crea una nueva versión y una futura evaluación.

---

## 26. Escenarios de contingencia y respuesta obligatoria

**Fundamentación científica.** Las contingencias formalizan la reducción de alcance cuando fallan diagnóstico, soporte, independencia, capacidad o cobertura, y evitan convertir una carencia de datos en una afirmación fuerte (Roberts et al., 2017; Brodie et al., 2022; Wijburg et al., 2026).

| Escenario | Respuesta metodológica | Afirmaciones prohibidas |
|---|---|---|
| Sin negativos defendibles | idoneidad relativa, esfuerzo y diseño de vigilancia | probabilidad, especificidad, PPV o NPV |
| Muy pocos confirmados | reducir complejidad, regularizar, describir e informar intervalos | transferencia fuerte o causalidad |
| Fechas imprecisas | ampliar periodo, agregar temporalmente o suspender pronóstico | horizonte fino no sustentado |
| Diagnóstico no cerrado | separar sospechosos y probables; no sustituir confirmados | incidencia confirmada |
| Validación externa pequeña | reportar evidencia parcial e intervalos | calibración o generalización definitiva |
| Hotspots dependientes de matriz | reportar sensibilidad | foco estable o transmisión |
| Alertas exceden capacidad | priorizar, registrar pendientes y revisar umbral | sistema operativo plenamente validado |
| Equipo o licencia faltante | usar módulo reducido o abstenerse | asumir capacidad inexistente |
| Termografía no repetible | localizar anomalías y requerir inspección | diagnóstico térmico |
| Modalidad faltante | modelo reducido preespecificado o abstención | imputación silenciosa |
| Desacuerdo LST–aire | mantener variables separadas | equivalencia microclimática |
| Movilidad incompleta | análisis descriptivo y cobertura explícita | red completa o corredor demostrado |
| Verdad de campo insuficiente | mantener clasificación como piloto | cobertura validada |
| Módulo avanzado sin mejora | posponer o descartar | adopción por novedad |
| Ambiente fuera de soporte | abstención y prioridad de información | predicción confiable |
| Baja vigilancia territorial | marcar incertidumbre y aumentar muestreo | bajo riesgo por pocos casos |

---

## 27. Entregables

### 27.1 Datos y documentación

- padrón y geodatabase;
- diccionario y ontología;
- vigilancia y denominadores;
- procedencia, calidad y exclusiones;
- permisos y custodia;
- manifiestos y versiones.

### 27.2 Percepción remota

- imágenes y ortomosaicos;
- productos multiespectrales y térmicos válidos;
- compuestos satelitales;
- cobertura y microhábitat;
- series meteorológicas;
- comparación LST–aire;
- máscaras de calidad.

### 27.3 Análisis y modelos

- descripción y esfuerzo;
- análisis espacial global y local;
- líneas base;
- modelo epidemiológico cuando proceda;
- `maxnet` cuando proceda;
- ensamble solo si demuestra valor;
- validación interna, temporal y externa;
- soporte, incertidumbre y abstención.

### 27.4 Mapas y decisión

- observaciones;
- idoneidad;
- exposición;
- riesgo cuando sea defendible;
- cambio;
- prioridad;
- incertidumbre;
- no evaluabilidad;
- versión pública y versión operativa.

### 27.5 Software y archivo

- código;
- ambiente bloqueado;
- configuraciones;
- modelos;
- predicciones;
- pruebas;
- metadatos;
- informe de limitaciones;
- paquete público no sensible cuando sea autorizado.

---

## 28. Criterios de éxito, cierre de huecos y control de cambios

**Fundamentación científica.** El éxito se define por correspondencia entre estimando, datos, evaluación, incertidumbre y uso, no por ejecutar un algoritmo o maximizar una métrica aislada (Roberts et al., 2017; Piirainen et al., 2023; Kass et al., 2024).

### 28.1 Éxito científico

La metodología se considerará correctamente ejecutada cuando:

1. cada producto conserve su estimando y nombre correcto;
2. casos, negativos y esfuerzo sean trazables;
3. no exista fuga entre desarrollo y prueba;
4. el desempeño externo se reporte con incertidumbre;
5. el mapa incluya soporte y no evaluabilidad;
6. ninguna decisión dependa de una sola métrica sin justificación;
7. UAV y termografía demuestren utilidad antes de escalar;
8. el sistema pueda abstenerse;
9. software, datos y mapas sean reproducibles;
10. autoridades y comunidades conozcan límites y responsabilidades.

Un resultado técnicamente ejecutado, pero sin denominador, prueba independiente, soporte o significado epidemiológico, no será producto final válido.

### 28.2 Estados de cierre

| Eje | Estado | Significado |
|---|---|---|
| Metodológico | `ESPECIFICADO` | El procedimiento está definido en este documento. |
| Metodológico | `EJEMPLIFICADO` | Existe una demostración sintética dentro de este documento. |
| Empírico | `NO_INICIADO` | No existe evidencia real. |
| Empírico | `PILOTO_EJECUTADO` | Se probó preliminarmente. |
| Empírico | `VALIDADO` | Existe evidencia real suficiente. |
| Institucional | `APROBADO` | La autoridad o responsable aceptó la decisión. |
| Cualquiera | `NO_APLICABLE` | La exclusión está justificada. |

La matriz extensa de los 16 paquetes de cierre y sus evidencias se conserva en matriz de cierre metodológico y empírico *(recurso operativo no incluido en la versión pública)*.

### 28.3 Cierre de un hueco

Un hueco se cerrará mediante un PR que incluya:

1. evidencia, dato, acuerdo o resultado de piloto;
2. decisión adoptada;
3. criterio de aceptación cumplido;
4. impacto sobre secciones y módulos;
5. actualización de plantillas, código o pruebas;
6. trazabilidad;
7. consecuencia para resultados anteriores.

### 28.4 Cambios futuros

Toda modificación de estimando, unidad, población, respuesta, dominio, muestreo, sensor, algoritmo, validación, umbral o significado cartográfico requerirá decisión explícita, evidencia, análisis de impacto, actualización de este documento, PR y nueva versión.

---

## 29. Secuencia operativa final

La ejecución completa seguirá este orden sin saltos:

1. confirmar propósito, productos y afirmaciones permitidas;
2. definir área, unidades, dominios y soporte;
3. aprobar gobernanza, permisos, custodia y respaldo;
4. depurar padrón y determinar universo real;
5. calcular y seleccionar panel de desarrollo y conjunto externo;
6. cerrar diagnóstico y cadena de custodia;
7. definir vigilancia, formularios y denominadores;
8. auditar temporalidad y campañas;
9. verificar equipo y ejecutar pilotos;
10. adquirir visitas, muestras, trampas, movilidad, clima, satélite y UAV;
11. curar, vincular y versionar datos;
12. construir verdad de campo y covariables sin fuga;
13. ejecutar epidemiología espacial exploratoria;
14. aplicar puerta A, B o C;
15. ajustar líneas base y candidatos dentro del desarrollo;
16. congelar pipeline;
17. evaluar en bloques, tiempo y conjunto externo;
18. producir mapas, soporte, incertidumbre y abstención;
19. acordar matriz sanitaria, capacidad y umbral;
20. ejecutar y registrar alertas;
21. incorporar desenlaces como nueva información;
22. cerrar huecos reales mediante PR;
23. actualizar versión y repetir evaluación prospectiva.

---

# Referencias citadas

Las referencias siguientes sustentan decisiones científicas concretas del flujo. Los valores publicados no se transfieren automáticamente como parámetros locales; cuando una cifra depende de otra especie, región, sensor o diseño, se conserva como antecedente, comparador o hipótesis de piloto.

- Abbasi, E. (2025). Application of remote sensing and geospatial technologies in predicting vector-borne disease outbreaks. *Royal Society Open Science*, 12, 250536. DOI: 10.1098/rsos.250536.
- Ahmed, R., Huang, W., Dildar, Z., Ashraf, H. A., Ateeq, M. y Rahman, Z. U. (2026). Spatiotemporal monitoring of grasshopper habitats in China: integrating ensemble machine learning, degree-day modeling, and multi-source remote sensing data. *Frontiers in Environmental Science*, 14, 1745395. DOI: 10.3389/fenvs.2026.1745395.
- Amarasingam, N., Powell, K., Sandino, J., Bratanov, D., Salgadoe, A. S. A. y Gonzalez, F. (2025). Mapping of insect pest infestation for precision agriculture: A UAV-based multispectral imaging and deep learning techniques. *International Journal of Applied Earth Observation and Geoinformation*, 137, 104413. DOI: 10.1016/j.jag.2025.104413.
- Anselin, L. (1995). Local Indicators of Spatial Association—LISA. *Geographical Analysis*, 27(2), 93–115. DOI: 10.1111/j.1538-4632.1995.tb00338.x.
- Araújo, M. B. y New, M. (2007). Ensemble forecasting of species distributions. *Trends in Ecology & Evolution*, 22(1), 42–47. DOI: 10.1016/j.tree.2006.09.010.
- Baker, D. J., Maclean, I. M. D. y Gaston, K. J. (2024). Effective strategies for correcting spatial sampling bias in species distribution models without independent test data. *Diversity and Distributions*, 30, e13802. DOI: 10.1111/ddi.13802.
- Bracho-Estévanez, C. A., Arenas-Castro, S., González-Varo, J. P. y González-Moreno, P. (2024). Spatially explicit metrics improve the evaluation of species distribution models facing sampling biases. *Ecological Informatics*, 84, 102916. DOI: 10.1016/j.ecoinf.2024.102916.
- Brodie, S. et al. (2022). Recommendations for quantifying and reducing uncertainty in climate projections of species distributions. *Global Change Biology*, 28, 6586–6601. DOI: 10.1111/gcb.16371.
- Cobos, M. E., Peterson, A. T., Barve, N. y Osorio-Olvera, L. (2019). kuenm: An R package for detailed development of ecological niche models using Maxent. *PeerJ*, 7, e6281. DOI: 10.7717/peerj.6281.
- da Silva e Souza, K., Baldassio de Paula, L. C., Lima de Azeredo-Espin, A. M. y Teixeira Torres, T. (2025). Demographic and historical processes influencing *Cochliomyia hominivorax* population structure across South America. *Parasites & Vectors*, 18, 18. DOI: 10.1186/s13071-024-06622-w.
- Destoumieux-Garzón, D. et al. (2018). The One Health Concept: 10 Years Old and a Long Road Ahead. *Frontiers in Veterinary Science*, 5, 14. DOI: 10.3389/fvets.2018.00014.
- Dufleit, V., Etter, E. y Guerrini, L. (2026). Mapping heartwater risk in Guadeloupe using a combination of spatial modelling approaches. *Scientific Reports*, 16, 587. DOI: 10.1038/s41598-025-30181-4.
- El Colegio de la Frontera Sur. (2026). *Protocolo de investigación: Desarrollo de estrategias de control integrado del Gusano Barrenador del Ganado mediante modelación de nichos ecológicos, análisis geoespacial y evaluación de bioplaguicidas*. México.
- Elith, J. et al. (2006). Novel methods improve prediction of species' distributions from occurrence data. *Ecography*, 29(2), 129–151. DOI: 10.1111/j.2006.0906-7590.04596.x.
- Elith, J. y Leathwick, J. R. (2009). Species Distribution Models: Ecological Explanation and Prediction Across Space and Time. *Annual Review of Ecology, Evolution, and Systematics*, 40, 677–697. DOI: 10.1146/annurev.ecolsys.110308.120159.
- Fick, S. E. y Hijmans, R. J. (2017). WorldClim 2: new 1-km spatial resolution climate surfaces for global land areas. *International Journal of Climatology*, 37(12), 4302–4315. DOI: 10.1002/joc.5086.
- Forero Becerra, E. G., Cortés V., J. A. y Villamil J., L. C. (2007). Ecología y epidemiología del Gusano Barrenador del Ganado, *Cochliomyia hominivorax* (Coquerel, 1858). *Revista de Medicina Veterinaria*, 14, 37–49.
- Fourcade, Y., Engler, J. O., Rödder, D. y Secondi, J. (2014). Mapping Species Distributions with MAXENT Using a Geographically Biased Sample of Presence Data: A Performance Assessment of Methods for Correcting Sampling Bias. *PLOS ONE*, 9(5), e97122. DOI: 10.1371/journal.pone.0097122.
- Fresia, P., Silver, M., Mastrangelo, T., De Azeredo-Espin, A. M. L. y Lyra, M. L. (2014). Applying spatial analysis of genetic and environmental data to predict connection corridors to the New World screwworm populations in South America. *Acta Tropica*. DOI: 10.1016/j.actatropica.2014.04.003.
- Galvis, J. A., Deka, A. y Machado, G. (2026). Evaluating Sampling Strategies for Effective Detection of African Swine Fever in Growing Pig Population in the U.S. *Preventive Veterinary Medicine*, 247, 106740. DOI: 10.1016/j.prevetmed.2025.106740.
- Getis, A. y Ord, J. K. (1992). The Analysis of Spatial Association by Use of Distance Statistics. *Geographical Analysis*, 24(3), 189–206. DOI: 10.1111/j.1538-4632.1992.tb00261.x.
- Giannetti, D., Patelli, N., Palazzetti, L., Betti Sorbelli, F., Pinotti, C. M. y Maistrello, L. (2024). First use of unmanned aerial vehicles to monitor *Halyomorpha halys* and recognize it using artificial intelligence. *Pest Management Science*, 80, 4074–4084. DOI: 10.1002/ps.8115.
- Gilbert, M. et al. (2018). Global distribution data for cattle, buffaloes, horses, sheep, goats, pigs, chickens and ducks in 2010. *Scientific Data*, 5, 180227. DOI: 10.1038/sdata.2018.227.
- Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D. y Moore, R. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. *Remote Sensing of Environment*, 202, 18–27. DOI: 10.1016/j.rse.2017.06.031.
- Grudzinski, C. E. et al. (2026). Remote thermal sensing in tropical cattle systems: a comparative study of silvopastoral and conventional pastures using drone-mounted infrared imaging. *Frontiers in Animal Science*, 7, 1800196. DOI: 10.3389/fanim.2026.1800196.
- Guisan, A. et al. (2025). Spatially nested species distribution models (N-SDM): An effective tool to overcome niche truncation for more robust inference and projections. *Journal of Ecology*, 113, 1588–1605. DOI: 10.1111/1365-2745.70063.
- Gutierrez, A. P., Ponti, L. y Arias, P. A. (2019). Deconstructing the eradication of new world screwworm in North America: retrospective analysis and climate warming effects. *Medical and Veterinary Entomology*, 33(2), 282–295. DOI: 10.1111/mve.12362.
- Heusler, J., Funk, J. y Wagner, A. (2025). Spatial Interpolation in Applied Insect Ecology: A Review, Including Guidelines and Datasets for Practical Use. *Journal of Applied Entomology*, 149, 1319–1334. DOI: 10.1111/jen.13455.
- Jean-Baptiste, C. O. (2026). A Prevention-Focused Geospatial Epidemiology Framework for Identifying Multilevel Vulnerability Across Diverse Settings. *Healthcare*, 14(2), 261. DOI: 10.3390/healthcare14020261.
- Kass, J. M. et al. (2021). ENMeval 2.0: Redesigned for customizable and reproducible modeling of species' niches and distributions. *Methods in Ecology and Evolution*, 12, 1602–1608. DOI: 10.1111/2041-210X.13628.
- Kass, J. M. et al. (2024). Achieving higher standards in species distribution modeling by leveraging the diversity of available software. *Ecography*, e07346. DOI: 10.1111/ecog.07346.
- Keshavamurthy, R. et al. (2026). Biosurveillance and early outbreak detection of rabies in settings with limited laboratory capacity using spatiotemporal clustering and a machine learning framework. *Scientific Reports*. DOI: 10.1038/s41598-026-55346-7.
- Koldasbayeva, D. y Zaytsev, A. (2025). Foundation for unbiased cross-validation of spatio-temporal models for Species Distribution Modeling. *Ecological Informatics*, 92, 103521. DOI: 10.1016/j.ecoinf.2025.103521.
- Lerner, H. y Berg, C. (2017). A Comparison of Three Holistic Approaches to Health: One Health, EcoHealth, and Planetary Health. *Frontiers in Veterinary Science*, 4, 163. DOI: 10.3389/fvets.2017.00163.
- Liu, T. et al. (2024). Development and application of a WebGIS-based prediction system for multi-criteria decision analysis of porcine pasteurellosis. *Scientific Reports*, 14, 21082. DOI: 10.1038/s41598-024-72350-x.
- Luo, X. et al. (2026). Cattle herd viewpoint detection based on lightweight convolution and cross-view fusion. *Expert Systems With Applications*, 315, 131707. DOI: 10.1016/j.eswa.2026.131707.
- Mamanova, S. et al. (2026). Integrated BLV surveillance in Kazakhstan, 2025: diagnostic complementarity and risk zoning. *Frontiers in Veterinary Science*, 13, 1798232. DOI: 10.3389/fvets.2026.1798232.
- Maulana, K. Y. et al. (2025). Spatial epidemiology of lumpy skin disease: unraveling patterns in dairy farm clusters with short interfarm proximity. *Animal Diseases*, 5, 23. DOI: 10.1186/s44149-025-00177-8.
- Mashori, A. S. et al. (2026). Remote Sensing through UAVs for precision agriculture: Applications, technical foundations, current barriers, and future opportunities. *Smart Agricultural Technology*, 14, 102074. DOI: 10.1016/j.atech.2026.102074.
- Mearns, L. O., Forest, C. E., Fowler, H. J., Lempert, R. y Wilby, R. L. (eds.). (2025). *Uncertainty in Climate Change Research: An Integrated Approach*. Springer Nature Switzerland. DOI: 10.1007/978-3-031-85542-9.
- Moudrý, V. et al. (2024). Optimising occurrence data in species distribution models: sample size, positional uncertainty, and sampling bias matter. *Ecography*, e07294. DOI: 10.1111/ecog.07294.
- Mulieri, P. R. y Patitucci, L. D. (2019). Using ecological niche models to describe the geographical distribution of the myiasis-causing *Cochliomyia hominivorax* in southern South America. *Parasitology Research*, 118, 1077–1086. DOI: 10.1007/s00436-019-06267-0.
- Muscarella, R. et al. (2014). ENMeval: An R package for conducting spatially independent evaluations and estimating optimal model complexity for MAXENT ecological niche models. *Methods in Ecology and Evolution*, 5, 1198–1205. DOI: 10.1111/2041-210X.12261.
- Ngwira, A., Manda, S., Karimuribo, E. D., Kimera, S. I. y Stanley, C. (2024). Spatial analysis of livestock disease data in sub-Saharan Africa: A scoping review. *Scientific African*, 23, e02113. DOI: 10.1016/j.sciaf.2024.e02113.
- Phillips, S. J., Anderson, R. P. y Schapire, R. E. (2006). Maximum entropy modeling of species geographic distributions. *Ecological Modelling*, 190(3–4), 231–259. DOI: 10.1016/j.ecolmodel.2005.03.026.
- Phillips, S. J. y Dudík, M. (2008). Modeling of species distributions with Maxent: new extensions and a comprehensive evaluation. *Ecography*, 31, 161–175. DOI: 10.1111/j.0906-7590.2008.5203.x.
- Piirainen, S. et al. (2023). Species distributions models may predict accurately future distributions but poorly how distributions change: A critical perspective on model validation. *Diversity and Distributions*, 29, 654–665. DOI: 10.1111/ddi.13687.
- Ploton, P. et al. (2020). Spatial validation reveals poor predictive performance of large-scale ecological mapping models. *Nature Communications*, 11, 4540. DOI: 10.1038/s41467-020-18321-y.
- Roberts, D. R. et al. (2017). Cross-validation strategies for data with temporal, spatial, hierarchical, or phylogenetic structure. *Ecography*, 40(8), 913–929. DOI: 10.1111/ecog.02881.
- Skoda, S. R., Phillips, P. L. y Welch, J. B. (2018). Screwworm (Diptera: Calliphoridae) in the United States: Response to and elimination of the 2016–2017 outbreak in Florida. *Journal of Medical Entomology*, 55(4), 777–786. DOI: 10.1093/jme/tjy049.
- Steele, S. et al. (2026). The use of participatory modelling to inform management of endemic foot-and-mouth disease: A case study from Nusa Tenggara Barat, Indonesia. *Preventive Veterinary Medicine*, 250, 106802. DOI: 10.1016/j.prevetmed.2026.106802.
- Tietjen, M. et al. (2022). Geographic population genetic structure of the New World screwworm, *Cochliomyia hominivorax*, using SNPs. *Journal of Medical Entomology*, 59(3), 874–882. DOI: 10.1093/jme/tjac024.
- Tietjen, M., Pfeiffer, V. y Poh, K. C. (2023). Insights into the genetic landscape and presence of *Cochliomyia hominivorax* in the Caribbean. *Parasitology Research*, 122, 547–556. DOI: 10.1007/s00436-022-07757-4.
- Valavi, R., Elith, J., Lahoz-Monfort, J. J. y Guillera-Arroita, G. (2019). blockCV: An R package for generating spatially or environmentally separated folds for k-fold cross-validation of species distribution models. *Methods in Ecology and Evolution*, 10(2), 225–232. DOI: 10.1111/2041-210X.13107.
- Veloz, S. D. (2009). Spatially autocorrelated sampling falsely inflates measures of accuracy for presence-only niche models. *Journal of Biogeography*, 36, 2290–2299. DOI: 10.1111/j.1365-2699.2009.02174.x.
- Wijburg, S. R. et al. (2026). Bridging the data gap: Integration of spatial modelling in wildlife disease surveillance. *Ecological Modelling*, 519, 111675. DOI: 10.1016/j.ecolmodel.2026.111675.
- Włodarczyk, D. y Jóźków, G. (2025). Hoofed animal detection in UAV thermal images using Balanced Random Forest and CNN features. *Reports on Geodesy and Geoinformatics*, 120, 1–13. DOI: 10.2478/rgg-2025-0011.
- Yoon, S. y Lee, W.-H. (2026). A novel ensemble framework for background selection to improve species distribution models. *Ecological Informatics*, 95, 103732. DOI: 10.1016/j.ecoinf.2026.103732.
- Zaldivar-Gomez, A., Gomez-Vazquez, J. P., Iniesta-Valencia, A. J., Figueroa-Martínez, L. G. y Rico-Chávez, O. (2025). Estimation the reinvasion of New World Screwworm in Central America: The role of animal movement in disease dispersal and control measures. *Veterinary Parasitology: Regional Studies and Reports*, 59, 101220. DOI: 10.1016/j.vprsr.2025.101220.
- Zhang, X. et al. (2026). An automated dynamic adaptive tracking and counting method for grazing sheep based on UAV imagery and YOLO11-OBB. *Computers and Electronics in Agriculture*, 252, 112086. DOI: 10.1016/j.compag.2026.112086.
- Zhao, X. et al. (2026). Multimodal animal health monitoring in extensive livestock production systems. *Frontiers in Veterinary Science*, 13, 1832869. DOI: 10.3389/fvets.2026.1832869.
- Zbinden, R. et al. (2026). MaskSDM with Shapley values to improve flexibility, robustness and explainability in species distribution modelling. *Methods in Ecology and Evolution*, 17, 188–206. DOI: 10.1111/2041-210x.70200.

**Fin de la metodología única consolidada.**
