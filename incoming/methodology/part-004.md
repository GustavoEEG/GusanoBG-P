
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