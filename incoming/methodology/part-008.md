
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