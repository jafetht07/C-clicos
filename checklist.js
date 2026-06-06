/* ══════════════════════════════════════
   CHECKLIST TIENDA V.25 – checklist.js
   Datos + lógica de las 3 pestañas:
   1) CK LIST ABREVIADO (54 pts)
   2) CK LIST COMPLETO (110 pts)
   3) COACHING
══════════════════════════════════════ */

/* ─────────────────────────────────────
   DATOS: CK LIST ABREVIADO (54 pts)
───────────────────────────────────── */
const SECTIONS_ABR = [
  {
    id: 'A1',
    title: 'I - Presentación de Tienda',
    subtotalLabel: 'Sub total presentación tienda',
    meta: 10,
    items: [
      'Rótulos exteriores (precinta, fascia, degradé y rotulo de bandera) limpios y buen estado',
      'Parqueo y acera demarcado y limpio',
      'Pintura exterior y estado de fachadas en buenas condiciones',
      'Muebles de teléfonía limpios y sin daños',
      'Muebles de computadoras limpios y sin daños',
      'Góndolas limpias y con cintillos actualizados',
      'Iluminación adecuada, sin lámparas quemadas',
      'Ventilación (abanicos en buen estado y limpios)',
      'Limpieza de baños (sin accesorios de limpieza dentro del mismo)',
      'Orden y limpieza en área de comedor de colaboradores',
    ]
  },
  {
    id: 'A2',
    title: 'II - Exhibición de Mercadería',
    subtotalLabel: 'Sub total exhibición de mercadería',
    meta: 10,
    items: [
      'Colillas en cada producto, legibles y con fecha del mes vigente',
      'Preciador en cada artículo en buenas condiciones y completo',
      '100% posiciones de mesa de telefonía en exhibición',
      '100% posiciones de mesa de cómputo en exhibición',
      '100% Televisores con CCTV actualizado (no puede haber ninguno apagado)',
      'Caja vacía pantalla 50" con POP bajo el mueble de telefonía',
      'Computadoras con cable acerado o dispositivos de seguridad al 100%',
      'Electrodomésticos con cable acerado',
      'Motos y Bicicletas con cable acerado',
      'Promociones vigentes rotuladas',
    ]
  },
  {
    id: 'A3',
    title: 'III - Control de Inventario',
    subtotalLabel: 'Sub total manejo inventario',
    meta: 10,
    items: [
      'Acomodo, limpieza e iluminación en bodega',
      'Producto en la bodega correspondiente a nivel de sistema (sin bodegas ocultas)',
      'Planificación de inventarios cíclicos x semana (Planificación mensual)',
      'AMPO con inventarios cíclicos ejecutados (acumulado del mes)',
      'AMPO control de traslados entre tiendas (entradas y salidas x mes)',
      'Sello de salida mercadería (Entregado satisfactoriamente)',
      'Uso de bitácora de salida de mercadería',
      'Seyma cerrado y bloqueado',
      'Mercadería de alto valor en jaula de riesgo (siempre cerrada)',
      'Realizar selectivo aleatorio de categoría de alto riesgo (telefonía, Informática, video)',
    ]
  },
  {
    id: 'A4',
    title: 'IV - Control de Valores',
    subtotalLabel: 'Sub total manejo de valores',
    meta: 5,
    items: [
      'Bitácora de retiros de efectivo (máximo en caja 500 mil)',
      'AMPO de arqueos de caja (cierres diarios por OSC y sorpresivos del administrador)',
      'Bitácora depósitos actualizada y firmada',
      'Revisión de faltantes de caja (reporte histórico de tesorería)',
      'Revisión de faltantes de depósitos (reporte histórico de tesorería)',
    ]
  },
  {
    id: 'A5',
    title: 'V - Venta Total, Crédito, SRM_VE y Abordaje de Clientes',
    subtotalLabel: 'Sub total venta total, crédito, SRM_VE y abordaje de clientes',
    meta: 9,
    items: [
      '¿Se ejecuta Junta Operativa diaria (15 min) y revisa ejecución de los 6 canales del Grid de Actividades (diario y semanal los sábados)?',
      '¿Asesores ejecutan el script de abordaje desde el crédito?',
      'SZ en conjunto con el administrador acompaña a los asesores y les muestra, mediante roll play o directamente con clientes en la tienda, cómo aplicar el script de abordaje desde el crédito para colocar SRM_VE y Seguro.',
      'SZ conversa con todos los asesores para identificar las causas y oportunidades de venta total, venta a crédito, SRM_VE y seguros, identifica los puntos de mejora y anota en bitácora del administrador las acciones a ejecutar.',
      'SZ asegura el dominio del presupuesto de venta total y crédito de parte del administrador.',
      'SZ analiza con el administrador las causas de no venta (total) y anota en la bitácora del administrador las acciones para corregir.',
      'SZ analiza con el administrador las causas de no colocación de crédito (total, CR y CN) y anota en la bitácora del administrador las acciones para corregir.',
      'SZ analiza con el administrador las causas de no colocación de SRM_VE (crédito y contado) y anota en la bitácora del administrador las acciones para corregir.',
      'SZ analiza en conjunto con el administrador el ER y evalúa su dominio dejando anotaciones en la bitácora del administrador sobre los puntos de mejora.',
    ]
  },
  {
    id: 'A6',
    title: 'VI - Otros Ingresos Comerciales',
    subtotalLabel: 'Sub total otros ingresos comerciales',
    meta: 10,
    items: [
      'Asesores tienen su hoja de autogestión al día.',
      'Asesores saben ingresar en rapiweb al módulo de comisiones de SRM_VE.',
      'Asesores tienen en sus tablets el kit de convencimiento.',
      'Asesores conocen sus indicadores de SRM_VE (logro del plan, % crédito y % contado)',
      'Asesores saben usar el módulo post venta de SRM_VE.',
      'Asesores hacen uso de la calculadora de comisiones.',
      'Administrador conoce el modelo de negocio y la importancia del SRM_VE',
      'Administrador sabe y aplica la estrategia del abordaje desde el crédito',
      'Administrador interpreta de forma correcta el termómetro de SRM_VE',
      'Administrador informa en la junta matutina los resultados de SRM_VE a sus asesores',
    ]
  },
];
const META_ABR = 54;

/* ─────────────────────────────────────
   DATOS: CK LIST COMPLETO (110 pts)
   Los ítems de puntaje > 1 se registran
   con su peso en `pts` (default 1)
───────────────────────────────────── */
const SECTIONS_FULL = [
  {
    id: 'F1',
    title: 'I - Presentación de Tienda',
    subtotalLabel: 'Sub total presentación tienda',
    meta: 23,
    items: [
      { t: 'Rótulos exteriores (precinta, fascia, degradé y rotulo de bandera) limpios y buen estado', pts: 1 },
      { t: 'Parqueo y acera demarcado y limpio', pts: 1 },
      { t: 'Pintura exterior y estado de fachadas en buenas condiciones', pts: 1 },
      { t: 'Ventanas limpias y rotuladas', pts: 1 },
      { t: 'Pintura Interior en buenas condiciones', pts: 1 },
      { t: 'Rotulación oficial interna sobre salud ocupacional y permisos requeridos.', pts: 1 },
      { t: 'Muebles de teléfonía limpios y sin daños', pts: 1 },
      { t: 'Muebles de computadoras limpios y sin daños', pts: 1 },
      { t: 'Góndolas limpias y con cintillos actualizados', pts: 1 },
      { t: 'Cables eléctricos de pared y piso con canaleta', pts: 1 },
      { t: 'Limpieza general de la tienda (piso, paredes y cielo raso)', pts: 1 },
      { t: 'Limpieza general de abanicos (techo y pared)', pts: 1 },
      { t: 'Piso en buen estado', pts: 1 },
      { t: 'Cielo raso en buen estado (sin filtraciones de agua, sin manchas)', pts: 1 },
      { t: 'Iluminación adecuada, sin lámparas quemadas', pts: 1 },
      { t: 'Colgantes, afiches, banner, señalización, en buen estado, actualizado. Sin "Dale Viaje".', pts: 1 },
      { t: 'Limpieza y orden en mueble de cajas y asesores', pts: 1 },
      { t: 'Limpieza de baños (sin accesorios de limpieza dentro del mismo)', pts: 1 },
      { t: 'Sanitario con botella de agua en el tanque', pts: 1 },
      { t: 'Orden y limpieza en área de comedor de colaboradores', pts: 1 },
      { t: 'Refrigeradora limpia (por dentro)', pts: 1 },
      { t: 'Presentación correcta del uniforme del personal', pts: 1 },
      { t: '100% personal con gafete en buen estado', pts: 1 },
    ]
  },
  {
    id: 'F2',
    title: 'II - Exhibición de Mercadería',
    subtotalLabel: 'Sub total exhibición de mercadería',
    meta: 23,
    items: [
      { t: 'Acomodo de Tienda según Lay Out', pts: 1 },
      { t: 'Colillas en cada producto, legibles y con fecha del mes vigente', pts: 1 },
      { t: 'Preciador en cada artículo en buenas condiciones y completo', pts: 1 },
      { t: '100% posiciones de mesa de telefonía en exhibición', pts: 1 },
      { t: '100% posiciones de mesa de cómputo en exhibición', pts: 1 },
      { t: '100% Televisores con señal (no puede haber ninguno apagado)', pts: 1 },
      { t: 'Caja vacía pantalla 50" con POP bajo el mueble de telefonía', pts: 1 },
      { t: 'Acomodo de categorías según manual operativo', pts: 1 },
      { t: 'Productos golpeados ó rayados en liquidación', pts: 1 },
      { t: 'Productos limpios', pts: 1 },
      { t: 'Lavadoras semiautomáticas con patas y plásticos en las tapas', pts: 1 },
      { t: 'Bicicletas con preciador, colilla, pedales y plástico en los puños', pts: 1 },
      { t: 'Motocicletas con preciador, colilla, pedales y plástico en los puños', pts: 1 },
      { t: 'Computadoras con cable acerado o dispositivos de seguridad al 100%', pts: 1 },
      { t: 'Electrodomésticos con cable acerado', pts: 1 },
      { t: 'Motos y Bicicletas con cable acerado', pts: 1 },
      { t: 'Areas de exhibición llenas sin espacios vacíos', pts: 1 },
      { t: 'Promociones vigentes rotuladas', pts: 1 },
      { t: 'Exhibición y rotulación de productos LI', pts: 1 },
      { t: 'Torres de pasillo de poder rotuladas, ordenadas y altura acorde al manual operativo', pts: 1 },
      { t: 'Implementación de globos correcta', pts: 1 },
      { t: 'Productos complementarios exhibidos', pts: 1 },
      { t: 'Conocimiento de la competencia en surtido, precios y promociones', pts: 1 },
    ]
  },
  {
    id: 'F3',
    title: 'III - Control de Inventario',
    subtotalLabel: 'Sub total manejo inventario',
    meta: 21,
    items: [
      { t: 'Revisión y ajuste del cuadro básico', pts: 1 },
      { t: 'Productos exhibidos, no en bodega', pts: 1 },
      { t: 'Acomodo, limpieza e iluminación en bodega', pts: 1 },
      { t: 'Rotulación y separación mercadería desecho, reparaciones y abandono en bodega', pts: 1 },
      { t: 'Producto en la bodega correspondiente a nivel de sistema (sin bodegas ocultas)', pts: 1 },
      { t: 'Archivo de inventario cíclicos semanal por parte de Administrador (pegado en AMPO)', pts: 2 },
      { t: 'AMPO con inventarios cíclicos ejecutados (acumulado del mes)', pts: 2 },
      { t: 'AMPO control de traslados entre tiendas (entradas y salidas x mes)', pts: 2 },
      { t: 'AMPO control y manejo de reparaciones (E4C)', pts: 1 },
      { t: 'AMPO selectivos de mercadería facturada el día anterior', pts: 2 },
      { t: 'Sello de salida mercadería (Entregado satisfactoriamente)', pts: 1 },
      { t: 'Uso de bitácora de salida de mercadería', pts: 2 },
      { t: 'Seyma cerrado y bloqueado', pts: 1 },
      { t: 'Distribución de zonas por asesor', pts: 1 },
      { t: 'Mercadería de alto valor en jaula de riesgo (siempre cerrada)', pts: 1 },
      { t: 'Revisión de funcionamiento y enfoque de cámaras de seguridad', pts: 1 },
    ]
  },
  {
    id: 'F4',
    title: 'IV - Control de Valores',
    subtotalLabel: 'Sub total manejo de valores',
    meta: 14,
    items: [
      { t: 'Bitácora de retiros de efectivo con # de depósitos (máximo en caja 500 mil)', pts: 1 },
      { t: 'AMPO de arqueos de caja (cierres diarios por OSC y sorpresivos del administrador)', pts: 2 },
      { t: 'Bitácora depósitos actualizada y firmada', pts: 2 },
      { t: 'Gavetas de valores con llave y en buen estado', pts: 1 },
      { t: 'Hojas de caja revisada por Administrador', pts: 2 },
      { t: 'Timbre está funcionando correctamente', pts: 1 },
      { t: 'Revisar último envío de cartera de crédito (¿está al día en tiempo y forma?)', pts: 1 },
      { t: 'Revisión de faltantes de caja (reporte histórico de tesorería)', pts: 2 },
      { t: 'Revisión de faltantes de depósitos (reporte histórico de tesorería)', pts: 2 },
    ]
  },
  {
    id: 'F5',
    title: 'V - Ventas',
    subtotalLabel: 'Sub total ventas',
    meta: 13,
    items: [
      { t: '¿Se ejecuta Junta Operativa diaria (15 min) y revisa ejecución de los 6 canales del Grid de Actividades (diario y semanal los sábados)?', pts: 2 },
      { t: '¿Asesores ejecutan el script de bienvenida dando su nombre?', pts: 2 },
      { t: '¿Asesores ejecutan el script de abordaje desde el crédito?', pts: 2 },
      { t: 'SZ en conjunto con el administrador acompaña a los asesores y les muestra, mediante roll play o directamente con clientes en la tienda, cómo aplicar el script de abordaje desde el crédito para colocar SRM_VE y Seguro.', pts: 1 },
      { t: 'SZ conversa con todos los asesores para identificar las causas y oportunidades de venta total, venta a crédito, SRM_VE y seguros, identifica los puntos de mejora y anota en bitácora.', pts: 1 },
      { t: 'SZ asegura el dominio del presupuesto de venta total y crédito de parte del administrador.', pts: 1 },
      { t: 'SZ analiza con el administrador las causas de no venta (total) y anota en la bitácora del administrador las acciones para corregir.', pts: 1 },
      { t: 'SZ analiza con el administrador las causas de no colocación de crédito (total, CR y CN) y anota en la bitácora del administrador las acciones para corregir.', pts: 1 },
      { t: 'SZ analiza con el administrador las causas de no colocación de SRM_VE (crédito y contado) y anota en la bitácora del administrador las acciones para corregir.', pts: 1 },
      { t: 'SZ analiza en conjunto con el administrador el ER y evalúa su dominio dejando anotaciones en la bitácora del administrador sobre los puntos de mejora.', pts: 1 },
    ]
  },
  {
    id: 'F6',
    title: 'VI - Otros Ingresos Comerciales',
    subtotalLabel: 'Sub total otros ingresos comerciales',
    meta: 10,
    items: [
      { t: 'Asesores tienen su hoja de autogestión al día.', pts: 1 },
      { t: 'Asesores saben ingresar en rapiweb al módulo de comisiones de SRM_VE.', pts: 1 },
      { t: 'Asesores tienen en sus tablets el kit de convencimiento.', pts: 1 },
      { t: 'Asesores conocen sus indicadores de SRM_VE (logro del plan, % crédito y % contado).', pts: 1 },
      { t: 'Asesores saben usar el módulo post venta de SRM_VE.', pts: 1 },
      { t: 'Asesores hacen uso de la calculadora de comisiones.', pts: 1 },
      { t: 'Administrador conoce el modelo de negocio y la importancia del SRM_VE.', pts: 1 },
      { t: 'Administrador sabe y aplica la estrategia del abordaje desde el crédito.', pts: 1 },
      { t: 'Administrador interpreta de forma correcta el termómetro de SRM_VE.', pts: 1 },
      { t: 'Administrador informa en la junta matutina los resultados de SRM_VE a sus asesores.', pts: 1 },
    ]
  },
  {
    id: 'F7',
    title: 'VII - Otros Puntos',
    subtotalLabel: 'Sub total otros puntos',
    meta: 6,
    items: [
      { t: 'Cumplimiento compromisos visita anterior.', pts: 1 },
      { t: 'Control de horarios del personal.', pts: 1 },
      { t: 'Carpetas de asesores con hojas de autogestión, barridos y bases de datos.', pts: 1 },
      { t: 'Pizarra de gestión actualizada.', pts: 1 },
      { t: 'Revisión de acciones de hallazgos de Auditoría al día (link de auditoría).', pts: 1 },
      { t: 'Bitácora de Administrador actualizada (Lay out, ER, hoja de recorrido, reuniones diarias, grid de actividades).', pts: 1 },
    ]
  },
];
const META_FULL = 110;

/* ─────────────────────────────────────
   ESTADO GLOBAL
───────────────────────────────────── */
let checksAbr  = {};
let checksFull = {};
let activeTab  = 'abreviado'; // 'abreviado' | 'completo' | 'coaching'

function initState() {
  checksAbr = {};
  SECTIONS_ABR.forEach(s => {
    s.items.forEach((_, i) => { checksAbr[`${s.id}_${i}`] = false; });
  });
  checksFull = {};
  SECTIONS_FULL.forEach(s => {
    s.items.forEach((_, i) => { checksFull[`${s.id}_${i}`] = false; });
  });
}

/* ─────────────────────────────────────
   NAVEGACIÓN DE TABS
───────────────────────────────────── */
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-btn-${tab}`).classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
}

/* ─────────────────────────────────────
   CONSTRUIR CHECKLIST ABREVIADO
───────────────────────────────────── */
function buildAbrChecklist() {
  const container = document.getElementById('abrContainer');
  container.innerHTML = '';
  let globalNum = 1;

  SECTIONS_ABR.forEach(sec => {
    const wrap = document.createElement('div');
    wrap.className = 'section';

    const hdr = document.createElement('div');
    hdr.className = 'section-header';
    hdr.innerHTML = `
      <h2>${sec.title}</h2>
      <span class="section-badge" id="badge_${sec.id}">0/${sec.items.length}</span>
    `;
    wrap.appendChild(hdr);

    const body = document.createElement('div');
    body.className = 'section-body';

    sec.items.forEach((text, i) => {
      const key = `${sec.id}_${i}`;
      const on  = checksAbr[key];
      const item = document.createElement('div');
      item.className = 'item' + (on ? ' checked' : '');
      item.id = `item_${key}`;
      item.innerHTML = `
        <div class="item-num">${globalNum++}</div>
        <div class="item-text">${text}</div>
        <div class="checkbox ${on ? 'on' : ''}" id="cb_${key}"></div>
      `;
      item.addEventListener('click', () => toggleAbr(key));
      body.appendChild(item);
    });

    const sub = document.createElement('div');
    sub.className = 'subtotal';
    sub.innerHTML = `<span>${sec.subtotalLabel}</span><strong id="sub_${sec.id}">0 / ${sec.meta}</strong>`;
    body.appendChild(sub);
    wrap.appendChild(body);
    container.appendChild(wrap);
  });

  updateAbrScore();
}

/* ─────────────────────────────────────
   CONSTRUIR CHECKLIST COMPLETO
───────────────────────────────────── */
function buildFullChecklist() {
  const container = document.getElementById('fullContainer');
  container.innerHTML = '';
  let globalNum = 1;

  SECTIONS_FULL.forEach(sec => {
    const wrap = document.createElement('div');
    wrap.className = 'section';

    const hdr = document.createElement('div');
    hdr.className = 'section-header';
    hdr.innerHTML = `
      <h2>${sec.title}</h2>
      <span class="section-badge" id="fbadge_${sec.id}">0/${sec.meta}</span>
    `;
    wrap.appendChild(hdr);

    const body = document.createElement('div');
    body.className = 'section-body';

    sec.items.forEach((item, i) => {
      const text = typeof item === 'string' ? item : item.t;
      const pts  = typeof item === 'string' ? 1 : item.pts;
      const key  = `${sec.id}_${i}`;
      const on   = checksFull[key];
      const el   = document.createElement('div');
      el.className = 'item' + (on ? ' checked' : '');
      el.id = `fitem_${key}`;
      el.innerHTML = `
        <div class="item-num">${globalNum++}</div>
        <div class="item-text">${text}${pts > 1 ? ` <span class="pts-badge">${pts}pts</span>` : ''}</div>
        <div class="checkbox ${on ? 'on' : ''}" id="fcb_${key}"></div>
      `;
      el.addEventListener('click', () => toggleFull(key));
      body.appendChild(el);
    });

    const sub = document.createElement('div');
    sub.className = 'subtotal';
    sub.innerHTML = `<span>${sec.subtotalLabel}</span><strong id="fsub_${sec.id}">0 / ${sec.meta}</strong>`;
    body.appendChild(sub);
    wrap.appendChild(body);
    container.appendChild(wrap);
  });

  updateFullScore();
}

/* ─────────────────────────────────────
   TOGGLE ABREVIADO
───────────────────────────────────── */
function toggleAbr(key) {
  checksAbr[key] = !checksAbr[key];
  const item = document.getElementById(`item_${key}`);
  const cb   = document.getElementById(`cb_${key}`);
  if (checksAbr[key]) { item.classList.add('checked'); cb.classList.add('on'); }
  else                { item.classList.remove('checked'); cb.classList.remove('on'); }
  updateAbrScore();
}

/* ─────────────────────────────────────
   TOGGLE COMPLETO
───────────────────────────────────── */
function toggleFull(key) {
  checksFull[key] = !checksFull[key];
  const item = document.getElementById(`fitem_${key}`);
  const cb   = document.getElementById(`fcb_${key}`);
  if (checksFull[key]) { item.classList.add('checked'); cb.classList.add('on'); }
  else                 { item.classList.remove('checked'); cb.classList.remove('on'); }
  updateFullScore();
}

/* ─────────────────────────────────────
   ACTUALIZAR PUNTAJE ABREVIADO
───────────────────────────────────── */
function updateAbrScore() {
  let total = 0;
  SECTIONS_ABR.forEach(sec => {
    let secScore = 0;
    sec.items.forEach((_, i) => { if (checksAbr[`${sec.id}_${i}`]) { total++; secScore++; } });
    const badge = document.getElementById(`badge_${sec.id}`);
    const sub   = document.getElementById(`sub_${sec.id}`);
    if (badge) badge.textContent = `${secScore}/${sec.items.length}`;
    if (sub)   sub.textContent   = `${secScore} / ${sec.meta}`;
  });

  const pct   = Math.round((total / META_ABR) * 100);
  const deg   = Math.round((total / META_ABR) * 360);
  const color = total < 27 ? '#ef4444' : total < 46 ? '#f59e0b' : '#22c55e';

  document.getElementById('abrScoreReal').textContent = total;
  document.getElementById('abrScorePct').textContent  = pct + '%';
  document.getElementById('abrBarFill').style.width   = Math.min(pct, 100) + '%';
  document.getElementById('abrScoreCircle').style.background =
    `conic-gradient(${color} ${deg}deg, var(--border) ${deg}deg)`;
}

/* ─────────────────────────────────────
   ACTUALIZAR PUNTAJE COMPLETO
   (cada ítem ponderado por sus pts)
───────────────────────────────────── */
function updateFullScore() {
  let total = 0;
  SECTIONS_FULL.forEach(sec => {
    let secScore = 0;
    sec.items.forEach((item, i) => {
      const pts = typeof item === 'string' ? 1 : item.pts;
      if (checksFull[`${sec.id}_${i}`]) { total += pts; secScore += pts; }
    });
    const badge = document.getElementById(`fbadge_${sec.id}`);
    const sub   = document.getElementById(`fsub_${sec.id}`);
    if (badge) badge.textContent = `${secScore}/${sec.meta}`;
    if (sub)   sub.textContent   = `${secScore} / ${sec.meta}`;
  });

  const pct   = Math.round((total / META_FULL) * 100);
  const deg   = Math.round((total / META_FULL) * 360);
  const color = total < 55 ? '#ef4444' : total < 94 ? '#f59e0b' : '#22c55e';

  document.getElementById('fullScoreReal').textContent = total;
  document.getElementById('fullScorePct').textContent  = pct + '%';
  document.getElementById('fullBarFill').style.width   = Math.min(pct, 100) + '%';
  document.getElementById('fullScoreCircle').style.background =
    `conic-gradient(${color} ${deg}deg, var(--border) ${deg}deg)`;
}

/* ─────────────────────────────────────
   RESET
───────────────────────────────────── */
function confirmReset() {
  document.getElementById('resetModal').classList.add('open');
}

function closeModal() {
  document.getElementById('resetModal').classList.remove('open');
}

function doReset() {
  initState();
  buildAbrChecklist();
  buildFullChecklist();
  // Limpiar coaching
  document.querySelectorAll('.coaching-textarea').forEach(t => t.value = '');
  closeModal();
  showToast('✅ Checklist reiniciado');
}

/* ─────────────────────────────────────
   TOAST
───────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─────────────────────────────────────
   INICIALIZACIÓN
───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  document.getElementById('fecha').value = `${yyyy}-${mm}-${dd}`;

  initState();
  buildAbrChecklist();
  buildFullChecklist();

  // Activar primera pestaña
  switchTab('abreviado');
});
