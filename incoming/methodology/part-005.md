
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