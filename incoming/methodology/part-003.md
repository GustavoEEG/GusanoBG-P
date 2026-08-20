
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