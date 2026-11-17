# Check List Tienda V.25

> Checklist de visitas a tienda para supervisores: evaluación abreviada y completa, coaching y exportación a Excel o PDF.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Estado](https://img.shields.io/badge/estado-herramienta%20interna-informational)

## Español

### ¿Qué es?

Es una plantilla de checklist para registrar una visita a tienda: el supervisor marca el cumplimiento de los criterios por sección, obtiene el puntaje de la evaluación y genera el informe en Excel o PDF.

Es un ejemplo genérico de supervisión retail: los nombres de zona, sucursales y personas que trae el formulario son datos de muestra.

### Características

- Datos de la visita: fecha (se rellena con la fecha actual al abrir la página), supervisor, tienda (lista precargada de sucursales de muestra) y administrador.
- Tres pestañas de trabajo:
  - **Abreviado**: 54 puntos en 6 secciones (presentación, exhibición, inventario, valores, ventas y otros ingresos comerciales).
  - **Completo**: 110 puntos en 7 secciones, con ítems ponderados de 1 o 2 puntos.
  - **Coaching**: indicadores de venta, utilidad y observaciones.
- Checklist con ítems clicables, numeración global, contador por sección (`0/N`) y subtotal por sección.
- En el checklist completo, los ítems que valen más de un punto muestran una etiqueta `2pts` y el puntaje se pondera.
- Puntaje en vivo: puntos reales sobre la meta, porcentaje, barra de progreso y círculo con `conic-gradient` que cambia de color según el avance.
- Coaching con tipo de cambio configurable (600 por defecto) que convierte dólares a colones en tiempo real.
- Tabla de indicadores con meta y venta en dólares y colones, más `% de logro` con semáforo: Venta Total, Ventas de Crédito, Ventas de Contado, Margen Comercial, SRM_VE y Gastos.
- Bloque de Utilidad (meta, acumulado y `% de logro`) con el mismo cálculo.
- Observaciones por sección: "¿Qué puntos se deben mejorar?" y "¿Qué ACCIONES se tomarán para lograrlo?", con campos extra para hallazgos de inventario y de arqueo de caja, más observaciones generales.
- Exportación a **Excel** con tres hojas (`CK LIST ABREVIADO`, `CK LIST`, `COACHING`), estilos de encabezado verde `#00602B`, subtotales, celdas de entrada amarillas y fórmulas para subtotales, totales, conversión a colones y `% de logro`.
- Exportación a **PDF** en A4 con resumen de puntajes, detalle por sección, tabla de indicadores, observaciones y líneas de firma del supervisor y del administrador.
- **Compartir por WhatsApp**: usa la Web Share API con el archivo si el navegador lo permite; si no, descarga el archivo y abre `wa.me` con un resumen del puntaje por sección.
- Reinicio con modal de confirmación: borra marcas y observaciones y conserva los datos de la tienda.
- Notificaciones tipo toast y diseño mobile-first (sin zoom en móvil, botones de acción fijos).

### Stack técnico

- HTML5, CSS3 con variables y enfoque mobile-first.
- JavaScript vanilla, con los datos y la lógica separados en `checklist.js` y la generación de archivos en `export.js`.
- Librerías por CDN:
  - xlsx-js-style 1.2.0 (jsDelivr), para Excel con estilos.
  - jsPDF 2.5.1 y jsPDF-AutoTable 3.8.2 (cdnjs), para el PDF.

### Estructura del proyecto

```
C-clicos/
├── index.html     # estructura, formulario de visita, pestañas y modales
├── checklist.js   # datos de las secciones, puntajes y navegación
├── export.js      # Excel, PDF y compartir por WhatsApp/correo
└── style.css      # estilos de la interfaz
```

### Cómo ejecutarlo

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador moderno; con doble clic es suficiente.
3. Necesitas conexión a internet para cargar las librerías de Excel y PDF desde CDN.

No hay instalación ni build. Si quieres servirlo por HTTP, cualquier servidor estático sirve (por ejemplo `python -m http.server` en la carpeta del proyecto).

### Notas y limitaciones

- **No hay persistencia.** El estado vive en memoria: al recargar la página se pierden las marcas, los indicadores de coaching y las observaciones. No se usa `localStorage`.
- **Datos fijos en el código.** El nombre del supervisor y la lista de sucursales están escritos directamente en `index.html`; para otro uso hay que editar esas líneas.
- Los criterios, pesos y metas están en `checklist.js` (`SECTIONS_ABR`, `SECTIONS_FULL`, `META_ABR`, `META_FULL`). Cambiar un ítem implica editar esos arreglos.
- El modal de WhatsApp ofrece Excel o PDF, pero los botones llaman a `shareWhatsApp('excel')` y `shareWhatsApp('pdf')`; esa función no recibe el formato, así que en la práctica se exporta Excel en ambos casos. La función que sí distingue el formato (`shareWhatsAppFmt`) existe en `export.js` pero no está conectada a la interfaz. `shareEmail()` tampoco se usa desde la UI.
- En escritorio, cuando el navegador no permite compartir archivos, el flujo alternativo descarga el archivo y abre una pestaña de WhatsApp; depende del bloqueo de ventanas emergentes del navegador.
- Los umbrales del semáforo no son iguales en todos lados: en pantalla el corte es aproximadamente 50 % y 85 %, mientras que en Excel, PDF y coaching es 60 % y 85 %. Un mismo puntaje puede verse de distinto color según el lugar.
- Todo el cálculo y la generación de archivos ocurren en el navegador; no hay backend, autenticación ni envío automático de correos.

## English

### What is it?

A template checklist for recording a store visit: the supervisor checks off the criteria for each section, gets the evaluation score and generates the report as Excel or PDF.

It is a generic retail-supervision example: the zone, branch and staff names it ships with are sample data.

### Features

- Visit details: date (filled with today's date on load), supervisor, store (a pre-loaded list of sample branches) and administrator.
- Three working tabs:
  - **Abreviado**: 54 points across 6 sections (store presentation, merchandise display, inventory, cash and values, sales, and other commercial income).
  - **Completo**: 110 points across 7 sections, with items weighted 1 or 2 points.
  - **Coaching**: sales indicators, profit and observations.
- Clickable checklist items with global numbering, a per-section counter (`0/N`) and a per-section subtotal.
- In the full checklist, items worth more than one point display a `2pts` badge and the score is weighted accordingly.
- Live score: actual points against the target, percentage, progress bar and a `conic-gradient` circle that changes color as progress grows.
- Coaching with a configurable exchange rate (600 by default) that converts dollars to colones in real time.
- Indicator table with target and actual figures in dollars and colones, plus a color-coded `% achieved`: Total Sales, Credit Sales, Cash Sales, Commercial Margin, SRM_VE and Expenses.
- Profit block (target, accumulated and `% achieved`) using the same calculation.
- Per-section observations: "What points should be improved?" and "What ACTIONS will be taken to achieve it?", with extra fields for inventory and cash-audit findings, plus general observations.
- **Excel** export with three sheets (`CK LIST ABREVIADO`, `CK LIST`, `COACHING`), green `#00602B` headers, subtotal rows, yellow input cells and formulas for subtotals, totals, colón conversion and `% achieved`.
- **PDF** export on A4 with a score summary, section detail, indicator table, observations and signature lines for the supervisor and the administrator.
- **Share via WhatsApp**: uses the Web Share API with the file when the browser supports it; otherwise it downloads the file and opens `wa.me` with a per-section score summary.
- Confirmation-modal reset: clears checkmarks and observations while keeping the store details.
- Toast notifications and a mobile-first layout (no zoom on mobile, fixed action buttons).

### Technical stack

- HTML5 and CSS3 with custom properties, mobile-first.
- Vanilla JavaScript, with data and logic in `checklist.js` and file generation in `export.js`.
- CDN libraries:
  - xlsx-js-style 1.2.0 (jsDelivr), for styled Excel output.
  - jsPDF 2.5.1 and jsPDF-AutoTable 3.8.2 (cdnjs), for the PDF.

### Project structure

```
C-clicos/
├── index.html     # markup, visit form, tabs and modals
├── checklist.js   # section data, scoring and tab navigation
├── export.js      # Excel, PDF and WhatsApp/email sharing
└── style.css      # UI styles
```

### How to run it

1. Download or clone the repository.
2. Open `index.html` in a modern browser; double-clicking is enough.
3. An internet connection is required to load the Excel and PDF libraries from CDN.

There is no installation or build step. To serve it over HTTP, any static server works (for example `python -m http.server` inside the project folder).

### Notes and limitations

- **No persistence.** State lives in memory: reloading the page discards checkmarks, coaching indicators and observations. `localStorage` is not used.
- **Values hardcoded in the source.** The supervisor name and the branch list are written directly in `index.html`; other uses require editing those lines.
- Criteria, weights and targets live in `checklist.js` (`SECTIONS_ABR`, `SECTIONS_FULL`, `META_ABR`, `META_FULL`). Changing an item means editing those arrays.
- The WhatsApp modal offers Excel or PDF, but the buttons call `shareWhatsApp('excel')` and `shareWhatsApp('pdf')`; that function ignores the format, so Excel is exported in both cases. The format-aware function (`shareWhatsAppFmt`) exists in `export.js` but is not wired to the UI. `shareEmail()` is also unused.
- On desktop, when the browser cannot share files, the fallback downloads the file and opens a WhatsApp tab; it depends on pop-up blocking settings.
- Color thresholds are inconsistent: on screen the cutoffs are roughly 50% and 85%, while Excel, PDF and coaching use 60% and 85%. The same score can therefore appear in different colors.
- All computation and file generation happen in the browser; there is no backend, authentication or automatic email delivery.

---

Autor: Jafeth (GitHub: @jafetht07)
