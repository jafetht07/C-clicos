/* ══════════════════════════════════════
   EXPORT.JS — Genera Excel con 3 hojas:
   1) CK LIST ABREVIADO
   2) CK LIST COMPLETO
   3) COACHING
   Colores exactos del original:
   Verde oscuro header: #00602B
   Verde subtotal:      #E2EFDA
   Amarillo input $:    #FFFF00
══════════════════════════════════════ */

/* ─────────────────────────────────────
   ESTILOS
───────────────────────────────────── */
function thinBorder() {
  const borderStyle = { style: 'thin', color: { rgb: 'D9D9D9' } };
  return { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle };
}

function headerStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 10, color: { rgb: 'FFFFFF' } },
    fill:      { fgColor: { rgb: '00602B' }, patternType: 'solid' },
    alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
    border:    thinBorder()
  };
}

function titleStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 16, color: { rgb: 'FFFFFF' } },
    fill:      { fgColor: { rgb: '00602B' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center' },
    border:    thinBorder()
  };
}

function sectionStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 11, color: { rgb: 'FFFFFF' } },
    fill:      { fgColor: { rgb: '00602B' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center' },
    border:    thinBorder()
  };
}

function infoLabelStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 10, color: { rgb: '000000' } },
    fill:      { fgColor: { rgb: 'F2F2F2' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center' },
    border:    thinBorder()
  };
}

function infoValueStyle() {
  return {
    font:      { name: 'Calibri', sz: 10 },
    alignment: { horizontal: 'left', vertical: 'center' },
    border:    thinBorder()
  };
}

function itemNumStyle() {
  return {
    font:      { name: 'Calibri', sz: 9 },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function itemTextStyle() {
  return {
    font:      { name: 'Calibri', sz: 10 },
    alignment: { horizontal: 'left', vertical: 'center', wrapText: true },
    border:    thinBorder()
  };
}

function metaStyle() {
  return {
    font:      { name: 'Calibri', bold: false, sz: 10 },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function notaStyle(val) {
  const fill = val === 1
    ? { fgColor: { rgb: 'C6EFCE' }, patternType: 'solid' }
    : { fgColor: { rgb: 'FFC7CE' }, patternType: 'solid' };
  const fontColor = val === 1 ? '006100' : '9C0006';
  return {
    font:      { name: 'Calibri', bold: false, sz: 10, color: { rgb: fontColor } },
    fill,
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function notaStylePts(val) {
  const fill = val
    ? { fgColor: { rgb: 'C6EFCE' }, patternType: 'solid' }
    : { fgColor: { rgb: 'FFC7CE' }, patternType: 'solid' };
  const fontColor = val ? '006100' : '9C0006';
  return {
    font:      { name: 'Calibri', bold: false, sz: 10, color: { rgb: fontColor } },
    fill,
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function subtotalStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 10, color: { rgb: '000000' } },
    fill:      { fgColor: { rgb: 'E2EFDA' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center' },
    border:    thinBorder()
  };
}

function subtotalNumStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 10, color: { rgb: '000000' } },
    fill:      { fgColor: { rgb: 'E2EFDA' }, patternType: 'solid' },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function pctStyle(val) {
  const color = val >= 0.85 ? 'C6EFCE' : val >= 0.60 ? 'FFEB9C' : 'FFC7CE';
  const fontColor = val >= 0.85 ? '006100' : val >= 0.60 ? '9C6500' : '9C0006';
  return {
    font:      { name: 'Calibri', bold: false, sz: 10, color: { rgb: fontColor } },
    fill:      { fgColor: { rgb: color }, patternType: 'solid' },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder(),
    numFmt:    '0%'
  };
}

function totalHeaderStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 11, color: { rgb: 'FFFFFF' } },
    fill:      { fgColor: { rgb: '00602B' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center', wrapText: true },
    border:    thinBorder()
  };
}

function coachingHeaderStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 11, color: { rgb: 'FFFFFF' } },
    fill:      { fgColor: { rgb: '00602B' }, patternType: 'solid' },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder()
  };
}

function coachingLabelStyle() {
  return {
    font:      { name: 'Calibri', bold: true, sz: 16 },
    fill:      { fgColor: { rgb: 'E2EFDA' }, patternType: 'solid' },
    alignment: { horizontal: 'left', vertical: 'center', wrapText: true },
    border:    thinBorder()
  };
}

function coachingValueStyle() {
  return {
    font:      { name: 'Calibri', sz: 11 },
    alignment: { horizontal: 'left', vertical: 'center', wrapText: true },
    border:    thinBorder()
  };
}

/* CAMBIO 1: Formato de dólares corregido al original de Excel CR
   Original usa [$$-540A]#,##0 que muestra el símbolo $ con locale Costa Rica
   y fondo amarillo FFFF00 para celdas de ingreso (meta/venta) */
function coachingDollarInputStyle() {
  return {
    font:      { name: 'Calibri', sz: 11 },
    fill:      { fgColor: { rgb: 'FFFF00' }, patternType: 'solid' },
    alignment: { horizontal: 'right', vertical: 'center' },
    border:    thinBorder(),
    numFmt:    '[$$-540A]#,##0'
  };
}

/* CAMBIO 2: Formato colones corregido al original
   Original usa "₡"\ #,##0 con espacio antes del número */
function coachingColonStyle() {
  return {
    font:      { name: 'Calibri', sz: 11 },
    alignment: { horizontal: 'right', vertical: 'center' },
    border:    thinBorder(),
    numFmt:    '"₡"\\ #,##0'
  };
}

function coachingPctStyle(pct) {
  const color = pct >= 0.85 ? 'C6EFCE' : pct >= 0.60 ? 'FFEB9C' : 'FFC7CE';
  const fontColor = pct >= 0.85 ? '006100' : pct >= 0.60 ? '9C6500' : '9C0006';
  return {
    font:      { name: 'Calibri', bold: true, sz: 11, color: { rgb: fontColor } },
    fill:      { fgColor: { rgb: color }, patternType: 'solid' },
    alignment: { horizontal: 'center', vertical: 'center' },
    border:    thinBorder(),
    numFmt:    '0%'
  };
}


/* ─────────────────────────────────────
   HELPER: altura dinámica de fila según texto
   colW = ancho de columna en caracteres (wch)
───────────────────────────────────── */
function rowHeight(text, colW) {
  if (!text) return 15;
  // Cada línea ocupa ~13.5pt, con margen mínimo de 15pt
  const charsPerLine = colW * 1.15;
  const lines = Math.ceil(text.length / charsPerLine);
  return Math.max(15, lines * 14);
}

/* ─────────────────────────────────────
   HELPER: escribir celda con estilo
───────────────────────────────────── */
function sc(ws, addr, type, value, style, formula) {
  const cell = formula
    ? { t: type, f: formula, v: value, s: style }
    : { t: type, v: value, s: style };
  if (style && style.numFmt) cell.z = style.numFmt;
  ws[addr] = cell;
}

function empty(ws, addr) {
  ws[addr] = { t: 's', v: '', s: { border: thinBorder() } };
}

/* ─────────────────────────────────────
   HOJA: CK LIST ABREVIADO
───────────────────────────────────── */
function buildSheetAbreviado(fecha, tienda, admin, sup) {
  const ws = {};
  ws['!cols'] = [
    { wch: 5 },
    { wch: 80 },
    { wch: 8 },
    { wch: 8 },
    { wch: 10 },
  ];
  ws['!rows']   = [];
  ws['!merges'] = [];

  // Fila 1: título
  sc(ws, 'A1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'B1', 's', 'CHECK LIST TIENDA V.25', titleStyle());
  sc(ws, 'C1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'D1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'E1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  ws['!merges'].push({ s:{r:0,c:1}, e:{r:0,c:4} });
  ws['!rows'][0] = { hpt: 24 };

  // Filas 2-5: info
  const infoRows = [
    ['Fecha:',         fecha],
    ['Tienda:',        tienda],
    ['Administrador:', admin],
    ['Supervisor:',    sup],
  ];
  infoRows.forEach(([lbl, val], i) => {
    const r = i + 2;
    sc(ws, `A${r}`, 's', '', { border: thinBorder() });
    sc(ws, `B${r}`, 's', lbl, infoLabelStyle());
    sc(ws, `C${r}`, 's', val, infoValueStyle());
    sc(ws, `D${r}`, 's', '', { border: thinBorder() });
    sc(ws, `E${r}`, 's', '', { border: thinBorder() });
    ws['!merges'].push({ s:{r:r-1,c:2}, e:{r:r-1,c:4} });
  });

  // Fila 6: vacía
  ['A6','B6','C6','D6','E6'].forEach(a => empty(ws, a));

  // Fila 7: encabezado evaluación total
  sc(ws, 'A7', 's', '', totalHeaderStyle());
  sc(ws, 'B7', 's', 'EVALUACIÓN TOTAL   (Falla 1 punto y se pierde puntaje completo)', totalHeaderStyle());
  sc(ws, 'C7', 's', 'META',  headerStyle());
  sc(ws, 'D7', 's', 'REAL',  headerStyle());
  sc(ws, 'E7', 's', 'LOGRO', { ...headerStyle(), numFmt: '0%' });
  ws['!rows'][6] = { hpt: 24 };
  ws['!merges'].push({ s:{r:6,c:0}, e:{r:7,c:0} });
  ws['!merges'].push({ s:{r:6,c:1}, e:{r:7,c:1} });

  // Fila 8: valores totales
  sc(ws, 'A8', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'B8', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'C8', 'n', 54, { font:{ name: 'Calibri', bold:true, sz:11 }, alignment:{horizontal:'center', vertical:'center'}, border:thinBorder() });
  sc(ws, 'D8', 'n', null, { font:{ name: 'Calibri', bold:true, sz:11 }, alignment:{horizontal:'center', vertical:'center'}, border:thinBorder() }, 'PLACEHOLDER');
  sc(ws, 'E8', 'n', null, pctStyle(0.9), 'IF(C8=0,0,D8/C8)');
  ws['!rows'][7] = { hpt: 22 };

  // Pre-calc total for E8
  let totalAbrPre = 0;
  SECTIONS_ABR.forEach(s => s.items.forEach((_,i) => { if (checksAbr[`${s.id}_${i}`]) totalAbrPre++; }));
  const totalAbrPct = totalAbrPre / META_ABR;
  ws['E8'].v = totalAbrPct;
  ws['E8'].s = pctStyle(totalAbrPct);
  ws['E8'].z = '0%';
  ws['D8'].v = totalAbrPre;

  // Construir secciones desde fila 9
  let curRow = 9;
  const subtotalRows = [];

  SECTIONS_ABR.forEach((sec, si) => {
    const headerRow = curRow;
    sc(ws, `A${headerRow}`, 's', '', sectionStyle());
    sc(ws, `B${headerRow}`, 's', sec.title.toUpperCase(), sectionStyle());
    sc(ws, `C${headerRow}`, 's', si === 0 ? 'Meta' : '', sectionStyle());
    sc(ws, `D${headerRow}`, 's', si === 0 ? 'Nota' : '', sectionStyle());
    sc(ws, `E${headerRow}`, 's', si === 0 ? '%'    : '', sectionStyle());
    ws['!rows'][headerRow - 1] = { hpt: 18 };
    curRow++;

    const itemStart = curRow;
    let globalNum = 1;
    for (let k = 0; k < si; k++) globalNum += SECTIONS_ABR[k].items.length;

    sec.items.forEach((text, i) => {
      const row  = curRow;
      const nota = checksAbr[`${sec.id}_${i}`] ? 1 : 0;
      sc(ws, `A${row}`, 'n', globalNum + i, itemNumStyle());
      sc(ws, `B${row}`, 's', text, itemTextStyle());
      sc(ws, `C${row}`, 'n', 1, metaStyle());
      sc(ws, `D${row}`, 'n', nota, notaStyle(nota));
      sc(ws, `E${row}`, 'n', nota, pctStyle(nota), `IF(C${row}=0,0,D${row}/C${row})`);
      ws['!rows'][row - 1] = { hpt: rowHeight(text, 80) };
      curRow++;
    });

    const subRow = curRow;
    subtotalRows.push(subRow);
    const secScore = sec.items.filter((_,i) => checksAbr[`${sec.id}_${i}`]).length;
    const secMeta = sec.items.length;
    const secPct = secMeta > 0 ? secScore / secMeta : 0;
    sc(ws, `A${subRow}`, 's', '', subtotalNumStyle());
    sc(ws, `B${subRow}`, 's', sec.subtotalLabel, subtotalStyle());
    sc(ws, `C${subRow}`, 'n', secMeta, subtotalNumStyle(), `SUM(C${itemStart}:C${subRow-1})`);
    sc(ws, `D${subRow}`, 'n', secScore, subtotalNumStyle(), `SUM(D${itemStart}:D${subRow-1})`);
    sc(ws, `E${subRow}`, 'n', secPct, pctStyle(secPct), `IF(C${subRow}=0,0,D${subRow}/C${subRow})`);
    ws['!rows'][subRow - 1] = { hpt: 16 };
    curRow++;
  });

  // Actualizar fórmula total real (D8)
  ws['D8'].f = subtotalRows.map(r => `D${r}`).join('+');
  delete ws['D8'].v;

  ws['!ref'] = `A1:E${curRow - 1}`;
  return ws;
}

/* ─────────────────────────────────────
   HOJA: CK LIST COMPLETO
───────────────────────────────────── */
function buildSheetCompleto(fecha, tienda, admin, sup) {
  const ws = {};
  ws['!cols'] = [
    { wch: 5 },
    { wch: 85 },
    { wch: 8 },
    { wch: 8 },
    { wch: 10 },
  ];
  ws['!rows']   = [];
  ws['!merges'] = [];

  // Fila 1: título
  sc(ws, 'A1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'B1', 's', 'CHECK LIST TIENDA V.25', titleStyle());
  sc(ws, 'C1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'D1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'E1', 's', '', { fill: { fgColor: { rgb: 'FF00602B' }, patternType: 'solid' }, border: thinBorder() });
  ws['!merges'].push({ s:{r:0,c:1}, e:{r:0,c:4} });
  ws['!rows'][0] = { hpt: 24 };

  // Filas 2-5: info
  const infoRows = [
    ['Fecha:',         fecha],
    ['Tienda:',        tienda],
    ['Administrador:', admin],
    ['Supervisor:',    sup],
  ];
  infoRows.forEach(([lbl, val], i) => {
    const r = i + 2;
    sc(ws, `A${r}`, 's', '', { border: thinBorder() });
    sc(ws, `B${r}`, 's', lbl, infoLabelStyle());
    sc(ws, `C${r}`, 's', val, infoValueStyle());
    sc(ws, `D${r}`, 's', '', { border: thinBorder() });
    sc(ws, `E${r}`, 's', '', { border: thinBorder() });
    ws['!merges'].push({ s:{r:r-1,c:2}, e:{r:r-1,c:4} });
  });

  // Fila 6: vacía
  ['A6','B6','C6','D6','E6'].forEach(a => empty(ws, a));

  // Fila 7: encabezado evaluación total
  sc(ws, 'A7', 's', '', totalHeaderStyle());
  sc(ws, 'B7', 's', 'EVALUACIÓN TOTAL   (Falla 1 punto y se pierde puntaje completo)', totalHeaderStyle());
  sc(ws, 'C7', 's', 'META',  headerStyle());
  sc(ws, 'D7', 's', 'REAL',  headerStyle());
  sc(ws, 'E7', 's', 'LOGRO', { ...headerStyle(), numFmt: '0%' });
  ws['!rows'][6] = { hpt: 24 };
  ws['!merges'].push({ s:{r:6,c:0}, e:{r:7,c:0} });
  ws['!merges'].push({ s:{r:6,c:1}, e:{r:7,c:1} });

  // CAMBIO 3: Fila 8 — META total del completo es 110, no 54
  sc(ws, 'A8', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'B8', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'C8', 'n', 110, { font:{ name: 'Calibri', bold:true, sz:11 }, alignment:{horizontal:'center', vertical:'center'}, border:thinBorder() });
  sc(ws, 'D8', 'n', null, { font:{ name: 'Calibri', bold:true, sz:11 }, alignment:{horizontal:'center', vertical:'center'}, border:thinBorder() }, 'PLACEHOLDER');
  sc(ws, 'E8', 'n', null, pctStyle(0.9), 'IF(C8=0,0,D8/C8)');
  ws['!rows'][7] = { hpt: 22 };

  // Pre-calc total for E8
  let totalFullPre = 0;
  SECTIONS_FULL.forEach(s => s.items.forEach((item,i) => {
    const pts = typeof item === 'string' ? 1 : item.pts;
    if (checksFull[`${s.id}_${i}`]) totalFullPre += pts;
  }));
  const totalFullPct = totalFullPre / META_FULL;
  ws['E8'].v = totalFullPct;
  ws['E8'].s = pctStyle(totalFullPct);
  ws['E8'].z = '0%';
  ws['D8'].v = totalFullPre;

  let curRow = 9;
  const subtotalRows = [];

  SECTIONS_FULL.forEach((sec, si) => {
    const headerRow = curRow;
    sc(ws, `A${headerRow}`, 's', '', sectionStyle());
    sc(ws, `B${headerRow}`, 's', sec.title.toUpperCase(), sectionStyle());
    sc(ws, `C${headerRow}`, 's', si === 0 ? 'Meta' : '', sectionStyle());
    sc(ws, `D${headerRow}`, 's', si === 0 ? 'Nota' : '', sectionStyle());
    sc(ws, `E${headerRow}`, 's', si === 0 ? '%'    : '', sectionStyle());
    ws['!rows'][headerRow - 1] = { hpt: 18 };
    curRow++;

    const itemStart = curRow;
    let globalNum = 1;
    for (let k = 0; k < si; k++) globalNum += SECTIONS_FULL[k].items.length;

    sec.items.forEach((item, i) => {
      const text   = typeof item === 'string' ? item : item.t;
      const pts    = typeof item === 'string' ? 1    : item.pts;
      const row    = curRow;
      const marked = checksFull[`${sec.id}_${i}`];
      const nota   = marked ? pts : 0;

      sc(ws, `A${row}`, 'n', globalNum + i, itemNumStyle());
      sc(ws, `B${row}`, 's', text, itemTextStyle());
      sc(ws, `C${row}`, 'n', pts, metaStyle());
      sc(ws, `D${row}`, 'n', nota, notaStylePts(marked));
      const itemRatio = marked ? 1 : 0;
      sc(ws, `E${row}`, 'n', itemRatio, pctStyle(itemRatio), `IF(C${row}=0,0,D${row}/C${row})`);
      ws['!rows'][row - 1] = { hpt: rowHeight(text, 85) };
      curRow++;
    });

    const subRow = curRow;
    subtotalRows.push(subRow);
    let secScoreFull = 0, secMetaFull = 0;
    sec.items.forEach((item, i) => {
      const pts = typeof item === 'string' ? 1 : item.pts;
      secMetaFull += pts;
      if (checksFull[`${sec.id}_${i}`]) secScoreFull += pts;
    });
    const secPctFull = secMetaFull > 0 ? secScoreFull / secMetaFull : 0;
    sc(ws, `A${subRow}`, 's', '', subtotalNumStyle());
    sc(ws, `B${subRow}`, 's', sec.subtotalLabel, subtotalStyle());
    sc(ws, `C${subRow}`, 'n', secMetaFull, subtotalNumStyle(), `SUM(C${itemStart}:C${subRow-1})`);
    sc(ws, `D${subRow}`, 'n', secScoreFull, subtotalNumStyle(), `SUM(D${itemStart}:D${subRow-1})`);
    sc(ws, `E${subRow}`, 'n', secPctFull, pctStyle(secPctFull), `IF(C${subRow}=0,0,D${subRow}/C${subRow})`);
    ws['!rows'][subRow - 1] = { hpt: 16 };
    curRow++;
  });

  // Actualizar fórmula total D8
  ws['D8'].f = subtotalRows.map(r => `D${r}`).join('+');
  delete ws['D8'].v;

  ws['!ref'] = `A1:E${curRow - 1}`;
  return ws;
}

/* ─────────────────────────────────────
   HOJA: COACHING
   CAMBIO 4: Estructura corregida para coincidir exactamente con el original:
   - Columnas: A(vacía), B(etiqueta/indicador), C(Meta$), D(Meta₡), E(Venta$), F(Venta₡), G(%Logro)
   - Tipo de cambio en C5 (solo el número, sin etiqueta separada con merge)
   - Encabezados de tabla en fila 6 (no fila 7)
   - Indicadores en filas 7-12
   - Utilidad en fila 15 con encabezados en fila 14
   - Celdas de input en $ con fondo amarillo (FFFF00)
   - Celdas ₡ calculadas con fórmula =Cx*$C$5
   - % Logro = =Fx/Dx (colones real / colones meta)
   - Formato $ = [$$-540A]#,##0
   - Formato ₡ = "₡"\ #,##0
───────────────────────────────────── */
function buildSheetCoaching(fecha, tienda, admin, sup) {
  const ws = {};
  ws['!cols'] = [
    { wch: 7.5  },  // A – vacía
    { wch: 27   },  // B – indicador / label
    { wch: 14   },  // C – meta $
    { wch: 16   },  // D – meta ₡
    { wch: 15   },  // E – venta $
    { wch: 16   },  // F – venta ₡
    { wch: 11   },  // G – % logro
  ];
  ws['!rows']   = [];
  ws['!merges'] = [];

  function g(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }
  function gn(id) {
    const v = parseFloat(g(id));
    return isNaN(v) ? 0 : v;
  }

  const TC = gn('tipo_cambio') || 600;

  // ── Fila 1: título (fusiona B1:G1, igual que original B1:K1) ──
  sc(ws, 'A1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'B1', 's', 'Informe Gerencial de Visita a Tienda', titleStyle());
  sc(ws, 'C1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'D1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'E1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'F1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  sc(ws, 'G1', 's', '', { fill: { fgColor: { rgb: '00602B' }, patternType: 'solid' }, border: thinBorder() });
  ws['!merges'].push({ s:{r:0,c:1}, e:{r:0,c:6} });
  ws['!rows'][0] = { hpt: 24 };

  // ── Fila 2: vacía ──
  ['A','B','C','D','E','F','G'].forEach(c => empty(ws, `${c}2`));

  // ── Fila 3: Administrador | Fecha ──
  empty(ws, 'A3');
  sc(ws, 'B3', 's', 'Administrador:', infoLabelStyle());
  sc(ws, 'C3', 's', admin, infoValueStyle());
  sc(ws, 'D3', 's', '', { border: thinBorder() });
  sc(ws, 'E3', 's', 'Fecha:', infoLabelStyle());
  sc(ws, 'F3', 's', fecha, infoValueStyle());
  sc(ws, 'G3', 's', '', { border: thinBorder() });
  ws['!merges'].push({ s:{r:2,c:2}, e:{r:2,c:3} });
  ws['!merges'].push({ s:{r:2,c:5}, e:{r:2,c:6} });
  ws['!rows'][2] = { hpt: 18 };

  // ── Fila 4: Tienda | Supervisor ──
  empty(ws, 'A4');
  sc(ws, 'B4', 's', 'Tienda:', infoLabelStyle());
  sc(ws, 'C4', 's', tienda, infoValueStyle());
  sc(ws, 'D4', 's', '', { border: thinBorder() });
  sc(ws, 'E4', 's', 'Supervisor:', infoLabelStyle());
  sc(ws, 'F4', 's', sup, infoValueStyle());
  sc(ws, 'G4', 's', '', { border: thinBorder() });
  ws['!merges'].push({ s:{r:3,c:2}, e:{r:3,c:3} });
  ws['!merges'].push({ s:{r:3,c:5}, e:{r:3,c:6} });
  ws['!rows'][3] = { hpt: 18 };

  // ── Fila 5: Tipo de cambio — solo el valor en C5 (igual que original) ──
  empty(ws, 'A5');
  empty(ws, 'B5');
  sc(ws, 'C5', 'n', TC, {
    font:      { name: 'Calibri', sz: 11 },
    fill:      { fgColor: { rgb: 'FFFF00' }, patternType: 'solid' },
    alignment: { horizontal: 'right', vertical: 'center' },
    border:    thinBorder()
  });
  empty(ws, 'D5');
  empty(ws, 'E5');
  empty(ws, 'F5');
  empty(ws, 'G5');
  ws['!rows'][4] = { hpt: 18 };

  // ── Fila 6: encabezados tabla indicadores ──
  empty(ws, 'A6');
  const indHeaders = ['Indicadores', 'Meta $', 'Meta \u20a1', 'Venta $', 'Venta \u20a1', '% Logro'];
  indHeaders.forEach((h, i) => {
    sc(ws, `${String.fromCharCode(66 + i)}6`, 's', h, coachingHeaderStyle());
  });
  ws['!rows'][5] = { hpt: 22 };

  // ── Filas 7–12: indicadores ──
  const indicadores = [
    { label: 'Venta Total',       meta: gn('c_vt_meta'),  real: gn('c_vt_real')  },
    { label: 'Ventas de Crédito', meta: gn('c_cr_meta'),  real: gn('c_cr_real')  },
    { label: 'Ventas de Contado', meta: gn('c_ct_meta'),  real: gn('c_ct_real')  },
    { label: 'Margen Comercial',  meta: gn('c_mc_meta'),  real: gn('c_mc_real')  },
    { label: 'SRM_VE',            meta: gn('c_srm_meta'), real: gn('c_srm_real') },
    { label: 'Gastos',            meta: gn('c_gas_meta'), real: gn('c_gas_real') },
  ];

  indicadores.forEach(({ label, meta, real }, i) => {
    const row = 7 + i;
    const pct = meta > 0 ? real / meta : 0;
    empty(ws, `A${row}`);
    sc(ws, `B${row}`, 's', label, {
      font:      { name: 'Calibri', sz: 11 },
      fill:      { fgColor: { rgb: 'FFFFFF' }, patternType: 'solid' },
      alignment: { horizontal: 'left', vertical: 'center' },
      border:    thinBorder()
    });
    // C = Meta $ (input, fondo amarillo)
    sc(ws, `C${row}`, 'n', meta, coachingDollarInputStyle());
    // D = Meta ₡ (calculado = C*TC)
    sc(ws, `D${row}`, 'n', meta * TC, coachingColonStyle(), `C${row}*$C$5`);
    // E = Venta $ (input, fondo amarillo)
    sc(ws, `E${row}`, 'n', real, coachingDollarInputStyle());
    // F = Venta ₡ (calculado = E*TC)
    sc(ws, `F${row}`, 'n', real * TC, coachingColonStyle(), `E${row}*$C$5`);
    // G = % Logro = F/D (colones real / colones meta, igual que original)
    sc(ws, `G${row}`, 'n', pct, coachingPctStyle(pct), `IF(D${row}=0,0,F${row}/D${row})`);
    ws['!rows'][row - 1] = { hpt: 15 };
  });

  // ── Fila 13: vacía ──
  ['A','B','C','D','E','F','G'].forEach(c => empty(ws, `${c}13`));

  // ── Fila 14: encabezados utilidad ──
  empty(ws, 'A14');
  empty(ws, 'B14');
  const utilHeaders = ['Meta $', 'Meta \u20a1', 'Acum. $', 'Acum. \u20a1', '% Logro'];
  utilHeaders.forEach((h, i) => {
    sc(ws, `${String.fromCharCode(67 + i)}14`, 's', h, coachingHeaderStyle());
  });
  ws['!rows'][13] = { hpt: 22 };

  // ── Fila 15: utilidad ──
  const utMeta = gn('c_ut_meta');
  const utAcum = gn('c_ut_acum');
  const utPct  = utMeta > 0 ? utAcum / utMeta : 0;
  empty(ws, 'A15');
  sc(ws, 'B15', 's', 'Utilidad', coachingLabelStyle());
  sc(ws, 'C15', 'n', utMeta, coachingDollarInputStyle());
  sc(ws, 'D15', 'n', utMeta * TC, coachingColonStyle(), 'C15*$C$5');
  sc(ws, 'E15', 'n', utAcum, coachingDollarInputStyle());
  sc(ws, 'F15', 'n', utAcum * TC, coachingColonStyle(), 'E15*$C$5');
  sc(ws, 'G15', 'n', utPct, coachingPctStyle(utPct), 'IF(D15=0,0,F15/D15)');
  ws['!rows'][14] = { hpt: 18 };

  // ── Filas 16-17: vacías ──
  [16, 17].forEach(r => {
    ['A','B','C','D','E','F','G'].forEach(c => empty(ws, `${c}${r}`));
  });

  // ── Observaciones por sección ──
  const obsBlocks = [
    { rows: [
        { label: '1. PRESENTACION DE TIENDA /  ¿Qué puntos se deben mejorar?',           id: 'obs1_mejora' },
        { label: '1. PRESENTACION DE TIENDA / ¿Qué ACCIONES se tomarán para lograrlo?',  id: 'obs1_accion' },
    ]},
    { rows: [
        { label: '2. EXHIBICIÓN DE MERCADERÍA / ¿Qué puntos se deben mejorar?',           id: 'obs2_mejora' },
        { label: '2. EXHIBICIÓN DE MERCADERÍA /  ¿Qué ACCIONES se tomarán para lograrlo?', id: 'obs2_accion' },
    ]},
    { rows: [
        { label: '3. CONTROL DE INVENTARIO / ¿Qué puntos se deben mejorar?',           id: 'obs3_mejora' },
        { label: '3. CONTROL DE INVENTARIO /  ¿Qué ACCIONES se tomarán para lograrlo?', id: 'obs3_accion' },
        { label: '3. CONTROL DE INVENTARIO / Hallazgos en selectivo de inventario ejecutado por Supervisor', id: 'obs3_hallazgo' },
    ]},
    { rows: [
        { label: '4. CONTROL DE VALORES / ¿Qué puntos se deben mejorar?',           id: 'obs4_mejora' },
        { label: '4. CONTROL DE VALORES / ¿Qué ACCIONES se tomarán para lograrlo?',  id: 'obs4_accion' },
        { label: '4. CONTROL DE VALORES / Hallazgos en arqueo de fondos de caja ejecutado por Supervisor', id: 'obs4_hallazgo' },
    ]},
    { rows: [
        { label: '5. VENTAS / ¿Qué puntos se deben mejorar?',           id: 'obs5_mejora' },
        { label: '5. VENTAS /  ¿Qué ACCIONES se tomarán para lograrlo?', id: 'obs5_accion' },
    ]},
  ];

  let curRow = 18;

  obsBlocks.forEach(block => {
    block.rows.forEach(({ label, id }) => {
      // Fila etiqueta
      empty(ws, `A${curRow}`);
      sc(ws, `B${curRow}`, 's', label, coachingLabelStyle());
      ws['!merges'].push({ s:{r:curRow-1,c:1}, e:{r:curRow-1,c:6} });
      ws['!rows'][curRow - 1] = { hpt: 20 };
      curRow++;

      // Fila valor
      const val = g(id);
      empty(ws, `A${curRow}`);
      sc(ws, `B${curRow}`, 's', val, coachingValueStyle());
      ws['!merges'].push({ s:{r:curRow-1,c:1}, e:{r:curRow-1,c:6} });
      ws['!rows'][curRow - 1] = { hpt: val ? Math.max(20, Math.ceil(val.length / 80) * 18) : 20 };
      curRow++;
    });

    // Separador entre bloques
    ['A','B','C','D','E','F','G'].forEach(c => empty(ws, `${c}${curRow}`));
    curRow++;
  });

  // ── Observaciones generales ──
  empty(ws, `A${curRow}`);
  sc(ws, `B${curRow}`, 's', 'OBSERVACIONES / Cumplimiento de compromisos última visita y avances.', coachingLabelStyle());
  ws['!merges'].push({ s:{r:curRow-1,c:1}, e:{r:curRow-1,c:6} });
  ws['!rows'][curRow - 1] = { hpt: 20 };
  curRow++;

  const obsGen = g('obs_generales');
  empty(ws, `A${curRow}`);
  sc(ws, `B${curRow}`, 's', obsGen, coachingValueStyle());
  ws['!merges'].push({ s:{r:curRow-1,c:1}, e:{r:curRow-1,c:6} });
  ws['!rows'][curRow - 1] = { hpt: obsGen ? Math.max(30, Math.ceil(obsGen.length / 80) * 18) : 30 };
  curRow++;

  // ── Separador ──
  ['A','B','C','D','E','F','G'].forEach(c => empty(ws, `${c}${curRow}`));
  curRow++;

  // ── Firmas ──
  empty(ws, `A${curRow}`);
  sc(ws, `B${curRow}`, 's', '                Firma del Supervisor', {
    font: { name: 'Calibri', sz: 11 }, alignment: { horizontal: 'center' }, border: thinBorder()
  });
  ws['!merges'].push({ s:{r:curRow-1,c:1}, e:{r:curRow-1,c:3} });
  sc(ws, `E${curRow}`, 's', 'Firma Administrador', {
    font: { name: 'Calibri', sz: 11 }, alignment: { horizontal: 'center' }, border: thinBorder()
  });
  ws['!merges'].push({ s:{r:curRow-1,c:4}, e:{r:curRow-1,c:6} });
  ['C','D','F','G'].forEach(c => empty(ws, `${c}${curRow}`));
  ws['!rows'][curRow - 1] = { hpt: 40 };

  ws['!ref'] = `A1:G${curRow}`;
  return ws;
}

/* ─────────────────────────────────────
   CONSTRUIR WORKBOOK COMPLETO
───────────────────────────────────── */
function buildExcelWorkbook() {
  const fecha  = document.getElementById('fecha').value      || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value     || 'Sin tienda';
  const admin  = document.getElementById('admin').value      || '';
  const sup    = document.getElementById('supervisor').value || '';

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, buildSheetAbreviado(fecha, tienda, admin, sup), 'CK LIST ABREVIADO');
  XLSX.utils.book_append_sheet(wb, buildSheetCompleto(fecha, tienda, admin, sup),  'CK LIST');
  XLSX.utils.book_append_sheet(wb, buildSheetCoaching(fecha, tienda, admin, sup),  'COACHING');
  return wb;
}

/* ─────────────────────────────────────
   EXPORTAR A EXCEL
───────────────────────────────────── */
function exportExcel() {
  const fecha  = document.getElementById('fecha').value  || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value || 'Sin_tienda';
  const safe   = tienda.replace(/[^a-zA-Z0-9]/g, '_');

  const wb = buildExcelWorkbook();
  XLSX.writeFile(wb, `CK_LIST_${safe}_${fecha}.xlsx`);
  showToast('Excel exportado correctamente');
}

/* ─────────────────────────────────────
   COMPARTIR WHATSAPP
───────────────────────────────────── */
async function shareWhatsApp() {
  const fecha  = document.getElementById('fecha').value      || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value     || '?';
  const admin  = document.getElementById('admin').value      || '?';
  const sup    = document.getElementById('supervisor').value || '?';
  const safe   = tienda.replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `CK_LIST_${safe}_${fecha}.xlsx`;

  let totalAbr = 0, totalFull = 0;
  SECTIONS_ABR.forEach(s => s.items.forEach((_, i) => {
    if (checksAbr[`${s.id}_${i}`]) totalAbr++;
  }));
  SECTIONS_FULL.forEach(s => s.items.forEach((item, i) => {
    const pts = typeof item === 'string' ? 1 : item.pts;
    if (checksFull[`${s.id}_${i}`]) totalFull += pts;
  }));

  const pctAbr  = Math.round((totalAbr  / META_ABR)  * 100);
  const pctFull = Math.round((totalFull / META_FULL)  * 100);
  const status  = pctAbr >= 85 ? '[OK]' : pctAbr >= 60 ? '[ATENCIÓN]' : '[CRÍTICO]';

  if (navigator.canShare) {
    try {
      const wb    = buildExcelWorkbook();
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob  = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const file  = new File([blob], fileName, { type: blob.type });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ title: `Check List Tienda V.25 - ${tienda}`, files: [file] });
        showToast('Archivo compartido');
        return;
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.warn('Share falló:', err);
    }
  }

  exportExcel();
  let msg = `${status} *Check List Tienda V.25*\n`;
  msg += `Fecha: ${fecha}\nTienda: ${tienda}\nAdmin: ${admin}\nSupervisor: ${sup}\n\n`;
  msg += `*Abreviado: ${totalAbr}/${META_ABR} pts (${pctAbr}%)*\n`;
  msg += `*Completo: ${totalFull}/${META_FULL} pts (${pctFull}%)*\n\n`;
  SECTIONS_ABR.forEach(sec => {
    let score = 0;
    sec.items.forEach((_, i) => { if (checksAbr[`${sec.id}_${i}`]) score++; });
    msg += `${score === sec.items.length ? '[OK]' : '[PENDIENTE]'} ${sec.title}: ${score}/${sec.items.length}\n`;
  });
  msg += `\nSe adjunta el archivo Excel con el detalle completo.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ─────────────────────────────────────
   COMPARTIR CORREO
───────────────────────────────────── */
async function shareEmail() {
  const fecha  = document.getElementById('fecha').value      || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value     || '?';
  const admin  = document.getElementById('admin').value      || '?';
  const sup    = document.getElementById('supervisor').value || '?';
  const safe   = tienda.replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `CK_LIST_${safe}_${fecha}.xlsx`;

  let totalAbr = 0, totalFull = 0;
  SECTIONS_ABR.forEach(s => s.items.forEach((_, i) => {
    if (checksAbr[`${s.id}_${i}`]) totalAbr++;
  }));
  SECTIONS_FULL.forEach(s => s.items.forEach((item, i) => {
    const pts = typeof item === 'string' ? 1 : item.pts;
    if (checksFull[`${s.id}_${i}`]) totalFull += pts;
  }));

  const pctAbr = Math.round((totalAbr / META_ABR) * 100);
  const status = pctAbr >= 85 ? '[OK]' : pctAbr >= 60 ? '[ATENCIÓN]' : '[CRÍTICO]';

  if (navigator.canShare) {
    try {
      const wb    = buildExcelWorkbook();
      const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob  = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const file  = new File([blob], fileName, { type: blob.type });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ title: `Check List Tienda V.25 - ${tienda}`, files: [file] });
        showToast('Archivo compartido');
        return;
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.warn('Share email falló:', err);
    }
  }

  exportExcel();
  const subject = encodeURIComponent(`Check List Tienda V.25 - ${tienda} - ${fecha}`);
  let body = `${status} Check List Tienda V.25\n\nFecha: ${fecha}\nTienda: ${tienda}\nAdministrador: ${admin}\nSupervisor: ${sup}\n\n`;
  body += `Abreviado: ${totalAbr}/${META_ABR} pts (${pctAbr}%)\nCompleto: ${totalFull}/${META_FULL} pts\n\n`;
  SECTIONS_ABR.forEach(sec => {
    let score = 0;
    sec.items.forEach((_, i) => { if (checksAbr[`${sec.id}_${i}`]) score++; });
    body += `${sec.title}: ${score}/${sec.items.length}\n`;
  });
  body += `\n(Adjunte el archivo Excel descargado.)`;
  window.open(`mailto:?subject=${subject}&body=${encodeURIComponent(body)}`, '_blank');
}
/* ─────────────────────────────────────
   MODAL WHATSAPP
───────────────────────────────────── */
function showWhatsAppModal() {
  document.getElementById('whatsappModal').classList.add('open');
}
function closeWhatsAppModal() {
  document.getElementById('whatsappModal').classList.remove('open');
}

/* ─────────────────────────────────────
   COMPARTIR WHATSAPP (excel | pdf)
───────────────────────────────────── */
async function shareWhatsAppFmt(formato) {
  closeWhatsAppModal();

  const fecha  = document.getElementById('fecha').value      || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value     || '?';
  const admin  = document.getElementById('admin').value      || '?';
  const sup    = document.getElementById('supervisor').value || '?';
  const safe   = tienda.replace(/[^a-zA-Z0-9]/g, '_');

  let totalAbr = 0, totalFull = 0;
  SECTIONS_ABR.forEach(s => s.items.forEach((_, i) => {
    if (checksAbr[`${s.id}_${i}`]) totalAbr++;
  }));
  SECTIONS_FULL.forEach(s => s.items.forEach((item, i) => {
    const pts = typeof item === 'string' ? 1 : item.pts;
    if (checksFull[`${s.id}_${i}`]) totalFull += pts;
  }));

  const pctAbr  = Math.round((totalAbr  / META_ABR)  * 100);
  const pctFull = Math.round((totalFull / META_FULL)  * 100);
  const status  = pctAbr >= 85 ? '[OK]' : pctAbr >= 60 ? '[ATENCIÓN]' : '[CRÍTICO]';

  let blob, fileName, mimeType;

  if (formato === 'pdf') {
    blob     = buildPDFBlob(fecha, tienda, admin, sup, totalAbr, totalFull, pctAbr, pctFull);
    fileName = `CK_LIST_${safe}_${fecha}.pdf`;
    mimeType = 'application/pdf';
  } else {
    const wb  = buildExcelWorkbook();
    const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    blob     = new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fileName = `CK_LIST_${safe}_${fecha}.xlsx`;
    mimeType = blob.type;
  }

  if (navigator.canShare) {
    try {
      const file = new File([blob], fileName, { type: mimeType });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ title: `Check List Tienda V.25 - ${tienda}`, files: [file] });
        showToast('Archivo compartido');
        return;
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.warn('Share falló:', err);
    }
  }

  // Fallback: descargar + abrir WhatsApp con mensaje
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href = url; a.download = fileName; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 3000);

  let msg = `${status} *Check List Tienda V.25*\n`;
  msg += `Fecha: ${fecha}\nTienda: ${tienda}\nAdmin: ${admin}\nSupervisor: ${sup}\n\n`;
  msg += `*Abreviado: ${totalAbr}/${META_ABR} pts (${pctAbr}%)*\n`;
  msg += `*Completo: ${totalFull}/${META_FULL} pts (${pctFull}%)*\n\n`;
  SECTIONS_ABR.forEach(sec => {
    let score = 0;
    sec.items.forEach((_, i) => { if (checksAbr[`${sec.id}_${i}`]) score++; });
    msg += `${score === sec.items.length ? '[OK]' : '[PENDIENTE]'} ${sec.title}: ${score}/${sec.items.length}\n`;
  });
  const fmtLabel = formato === 'pdf' ? 'PDF' : 'Excel';
  msg += `\nSe adjunta el archivo ${fmtLabel} con el detalle completo.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ─────────────────────────────────────
   EXPORTAR A PDF
───────────────────────────────────── */
function buildPDFBlob(fecha, tienda, admin, sup, totalAbr, totalFull, pctAbr, pctFull) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const GREEN = [0, 96, 43];
  const WHITE = [255, 255, 255];
  const BLACK = [0, 0, 0];
  const GREY  = [242, 242, 242];

  const pageW  = doc.internal.pageSize.getWidth();
  const margin = 10;
  const colW   = pageW - margin * 2;
  let y = margin;

  // Título
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, colW, 12, 'F');
  doc.setTextColor(...WHITE);
  doc.setFontSize(14); doc.setFont('helvetica', 'bold');
  doc.text('Check List Tienda V.25', margin + 3, y + 8);
  y += 14;

  // Info visita
  const infoRows = [
    ['Fecha', fecha,  'Tienda', tienda],
    ['Supervisor', sup, 'Administrador', admin],
  ];
  doc.setFontSize(9);
  infoRows.forEach(row => {
    doc.setFillColor(...GREY);
    doc.rect(margin, y, colW / 2, 7, 'F');
    doc.rect(margin + colW / 2, y, colW / 2, 7, 'F');
    doc.setTextColor(...BLACK); doc.setFont('helvetica', 'bold');
    doc.text(row[0] + ':', margin + 2, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.text(String(row[1] || ''), margin + 22, y + 5);
    doc.setFont('helvetica', 'bold');
    doc.text(row[2] + ':', margin + colW / 2 + 2, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.text(String(row[3] || ''), margin + colW / 2 + 26, y + 5);
    y += 8;
  });
  y += 2;

  // Resumen puntajes
  doc.autoTable({
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Evaluación', 'Puntos', '% Logro']],
    body: [
      ['Abreviado', `${totalAbr} / ${META_ABR} pts`, `${pctAbr}%`],
      ['Completo',  `${totalFull} / ${META_FULL} pts`, `${pctFull}%`],
    ],
    headStyles: { fillColor: GREEN, textColor: WHITE, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { fontSize: 9, cellPadding: 3 },
    columnStyles: { 2: { halign: 'center' } },
    theme: 'grid',
  });
  y = doc.lastAutoTable.finalY + 6;

  function renderSection(title, items, checks, idPrefix, ptsMode) {
    if (y > 260) { doc.addPage(); y = margin; }
    doc.setFillColor(...GREEN);
    doc.rect(margin, y, colW, 8, 'F');
    doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
    doc.text(title, margin + 3, y + 5.5);
    y += 10;

    const rows = items.map((item, i) => {
      const text = typeof item === 'string' ? item : item.t;
      const pts  = typeof item === 'string' ? 1    : item.pts;
      const done = checks[`${idPrefix}_${i}`] ? (ptsMode ? pts : 1) : 0;
      return [text, ptsMode ? String(pts) : '1', done ? String(done) : '0'];
    });

    doc.autoTable({
      startY: y,
      margin: { left: margin, right: margin },
      head: [['Criterio', 'Meta', 'Nota']],
      body: rows,
      headStyles:   { fillColor: GREEN, textColor: WHITE, fontStyle: 'bold', fontSize: 8 },
      bodyStyles:   { fontSize: 8, cellPadding: 2 },
      columnStyles: { 0: { cellWidth: colW - 30 }, 1: { cellWidth: 12, halign: 'center' }, 2: { cellWidth: 18, halign: 'center' } },
      theme: 'grid',
      didParseCell(data) {
        if (data.section === 'body' && data.column.index === 2) {
          const v = Number(data.cell.raw);
          if (v > 0) { data.cell.styles.fillColor = [198,239,206]; data.cell.styles.textColor = [0,97,0]; }
          else       { data.cell.styles.fillColor = [255,199,206]; data.cell.styles.textColor = [156,0,6]; }
        }
      }
    });
    y = doc.lastAutoTable.finalY + 5;
  }

  // CK LIST ABREVIADO
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, colW, 10, 'F');
  doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text('CK LIST ABREVIADO', margin + 3, y + 7);
  y += 13;
  SECTIONS_ABR.forEach(sec => renderSection(sec.title, sec.items, checksAbr, sec.id, false));

  // CK LIST COMPLETO
  doc.addPage(); y = margin;
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, colW, 10, 'F');
  doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text('CK LIST COMPLETO', margin + 3, y + 7);
  y += 13;
  SECTIONS_FULL.forEach(sec => renderSection(sec.title, sec.items, checksFull, sec.id, true));

  // COACHING
  doc.addPage(); y = margin;
  doc.setFillColor(...GREEN);
  doc.rect(margin, y, colW, 10, 'F');
  doc.setTextColor(...WHITE); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
  doc.text('COACHING', margin + 3, y + 7);
  y += 13;

  const tc = parseFloat(document.getElementById('tipo_cambio').value) || 600;
  const g2 = id => (document.getElementById(id) ? document.getElementById(id).value || '' : '');
  const fmt$ = v => v ? `$${Number(v).toLocaleString('es-CR')}` : '-';
  const fmtC = v => v ? `CRC ${Math.round(Number(v)*tc).toLocaleString('es-CR')}` : '-';
  const fmtP = (m,r) => (!m||!r) ? '-' : Math.round((Number(r)/Number(m))*100)+'%';

  const coachFields = [
    ['Venta Total','c_vt_meta','c_vt_real'],
    ['Ventas Crédito','c_cr_meta','c_cr_real'],
    ['Ventas Contado','c_ct_meta','c_ct_real'],
    ['Margen Comercial','c_mc_meta','c_mc_real'],
    ['SRM_VE','c_srm_meta','c_srm_real'],
    ['Gastos','c_gas_meta','c_gas_real'],
  ];

  doc.autoTable({
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Indicador','Meta $','Meta CRC','Venta $','Venta CRC','% Logro']],
    body: coachFields.map(([label,mId,rId]) => [
      label, fmt$(g2(mId)), fmtC(g2(mId)), fmt$(g2(rId)), fmtC(g2(rId)), fmtP(g2(mId),g2(rId))
    ]),
    headStyles: { fillColor: GREEN, textColor: WHITE, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, cellPadding: 2 },
    theme: 'grid',
  });
  y = doc.lastAutoTable.finalY + 6;

  const obsFields = [
    ['1. PRESENTACIÓN / Puntos a mejorar','obs1_mejora'],
    ['1. PRESENTACIÓN / Acciones','obs1_accion'],
    ['2. EXHIBICIÓN / Puntos a mejorar','obs2_mejora'],
    ['2. EXHIBICIÓN / Acciones','obs2_accion'],
    ['3. INVENTARIO / Puntos a mejorar','obs3_mejora'],
    ['3. INVENTARIO / Acciones','obs3_accion'],
    ['3. INVENTARIO / Hallazgos','obs3_hallazgo'],
    ['4. VALORES / Puntos a mejorar','obs4_mejora'],
    ['4. VALORES / Acciones','obs4_accion'],
    ['4. VALORES / Hallazgos','obs4_hallazgo'],
    ['5. VENTAS / Puntos a mejorar','obs5_mejora'],
    ['5. VENTAS / Acciones','obs5_accion'],
    ['OBSERVACIONES GENERALES','obs_generales'],
  ];

  doc.autoTable({
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Sección','Observación']],
    body: obsFields.map(([label,id]) => [label, g2(id) || '']),
    headStyles: { fillColor: GREEN, textColor: WHITE, fontStyle: 'bold', fontSize: 8 },
    bodyStyles: { fontSize: 8, cellPadding: 2 },
    columnStyles: { 0: { cellWidth: 65 }, 1: { cellWidth: colW - 65 } },
    theme: 'grid',
  });

  y = doc.lastAutoTable.finalY + 10;
  if (y > 250) { doc.addPage(); y = margin + 10; }
  doc.setDrawColor(0); doc.setLineWidth(0.3);
  doc.line(margin + 5, y, margin + colW/2 - 5, y);
  doc.line(margin + colW/2 + 5, y, margin + colW - 5, y);
  doc.setFontSize(9); doc.setTextColor(...BLACK); doc.setFont('helvetica','normal');
  doc.text('Firma del Supervisor', margin + 10, y + 5);
  doc.text('Firma del Administrador', margin + colW/2 + 5, y + 5);

  return doc.output('blob');
}

function exportPDF() {
  const fecha  = document.getElementById('fecha').value      || new Date().toISOString().split('T')[0];
  const tienda = document.getElementById('tienda').value     || 'Sin_tienda';
  const admin  = document.getElementById('admin').value      || '';
  const sup    = document.getElementById('supervisor').value || '';
  const safe   = tienda.replace(/[^a-zA-Z0-9]/g, '_');

  let totalAbr = 0, totalFull = 0;
  SECTIONS_ABR.forEach(s => s.items.forEach((_, i) => {
    if (checksAbr[`${s.id}_${i}`]) totalAbr++;
  }));
  SECTIONS_FULL.forEach(s => s.items.forEach((item, i) => {
    const pts = typeof item === 'string' ? 1 : item.pts;
    if (checksFull[`${s.id}_${i}`]) totalFull += pts;
  }));
  const pctAbr  = Math.round((totalAbr  / META_ABR)  * 100);
  const pctFull = Math.round((totalFull / META_FULL)  * 100);

  showToast('Generando PDF...');
  const blob = buildPDFBlob(fecha, tienda, admin, sup, totalAbr, totalFull, pctAbr, pctFull);
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `CK_LIST_${safe}_${fecha}.pdf`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
  showToast('PDF exportado correctamente');
}
