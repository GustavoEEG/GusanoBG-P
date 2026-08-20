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