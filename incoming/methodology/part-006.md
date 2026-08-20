
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