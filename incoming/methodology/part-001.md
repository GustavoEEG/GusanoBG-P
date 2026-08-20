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