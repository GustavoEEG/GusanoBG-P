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