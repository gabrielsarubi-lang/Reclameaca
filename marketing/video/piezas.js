/* Piezas de video para Reclame Acá.
   Contenido legal tomado de las guías del propio sitio (reclameaca.com.ar/guias).
   Cada escena es HTML plano; el motor la anima según data-anim / data-at / data-d. */

const LOGO = (s) => `<svg class="mk" viewBox="0 0 64 64" width="${s}" height="${s}" style="width:${s}px;height:${s}px">
  <circle cx="32" cy="32" r="32" fill="#0f2338"/>
  <path d="M17 27 L36 17 L36 47 L17 37 Z" fill="#fff" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
  <path d="M43 23 L50 19" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <path d="M44 32 L52 32" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <path d="M43 41 L50 45" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
</svg>`;

const bug = () => `<div class="bug" data-anim="fade" data-at="0.35" data-d="0.5">
  ${LOGO(60)}<div class="tx">Reclame Acá<small>reclameaca.com.ar</small></div></div>`;

const TEMAS = {
  dark:   { bg: 'bg-dark',   tono: 'on-dark',   glow: true  },
  navy:   { bg: 'bg-navy',   tono: 'on-dark',   glow: true  },
  light:  { bg: 'bg-light',  tono: 'on-light',  glow: false },
  orange: { bg: 'bg-orange', tono: 'on-orange', glow: false },
};

function esc({ dur, tema = 'dark', marca = true, wrap = '', html }) {
  const t = TEMAS[tema];
  return `<section class="scene ${t.tono}" data-dur="${dur}">
  <div class="bg ${t.bg}"></div>
  ${t.glow ? '<div class="glow"></div><div class="glow glow-b"></div>' : ''}
  <div class="wrap ${wrap}">${html}</div>
  ${marca ? bug() : ''}
</section>`;
}

/* Bloques reutilizables ------------------------------------------------ */

const ceja = (txt, estilo = 'on-dark', at = 0) =>
  `<span class="eyebrow ${estilo}" data-anim="sube" data-at="${at}" data-d="0.5" data-dist="26"><i class="dot"></i>${txt}</span>`;

// Titular revelado línea por línea con máscara
const titular = (lineas, tag = 'h2', at = 0.12, paso = 0.09) =>
  `<${tag}>${lineas.map((l, i) => `<span style="display:block;overflow:hidden"><span style="display:block" data-anim="linea" data-at="${(at + i * paso).toFixed(2)}" data-d="0.62">${l}</span></span>`).join('')}</${tag}>`;

const cuerpo = (txt, at = 0.5) =>
  `<p class="body" data-anim="sube" data-at="${at}" data-d="0.6" data-dist="34">${txt}</p>`;

// Placa legal: regla naranja + cita de artículo + titular + bajada
const placaLey = ({ dur, articulo, lineas, texto }) => esc({
  dur, tema: 'light',
  html: `${ceja(articulo, 'law', 0)}
    <div class="ruled">
      <i class="rule" data-anim="regla" data-at="0.1" data-d="0.7"></i>
      ${titular(lineas, 'h2', 0.2)}
    </div>
    ${texto ? cuerpo(texto, 0.6) : ''}`
});

const li = (n, txt, sub, at) =>
  `<div class="li" data-anim="sube" data-at="${at}" data-d="0.55" data-dist="40">
     <span class="n">${n}</span><span class="tx">${txt}${sub ? `<small>${sub}</small>` : ''}</span></div>`;

const cierre = (dur, titulo, sub) => esc({
  dur, tema: 'navy', marca: false, wrap: 'center',
  html: `<div data-anim="pop" data-at="0" data-d="0.7" style="align-self:center">${LOGO(188).replace('class="mk"', 'class="cta-logo"')}</div>
    ${titular(titulo, 'h2', 0.3)}
    ${sub ? `<p class="body" data-anim="sube" data-at="0.62" data-d="0.6" data-dist="30">${sub}</p>` : ''}
    <div class="url" data-anim="sube" data-at="0.8" data-d="0.6" data-dist="26">reclameaca.com.ar</div>`
});

/* ====================================================================== */
/*  REELS                                                                  */
/* ====================================================================== */

const R1 = {
  id: 'reel-01-gimnasio',
  titulo: 'La baja del gimnasio',
  formato: 'reel',
  escenas: [
    esc({ dur: 2.8, tema: 'dark', html:
      `${ceja('Lo que te dicen', 'on-dark', 0)}
       ${titular(['“La baja del gimnasio', 'solo se hace', 'en la sede.”'], 'h1', 0.22, 0.1)}` }),

    esc({ dur: 1.7, tema: 'orange', marca: false, wrap: 'center', html:
      `<div class="huge" data-anim="pop" data-at="0" data-d="0.5">Mentira</div>
       ${cuerpo('Y la ley lo dice en una línea.', 0.45)}` }),

    placaLey({ dur: 3.7, articulo: 'Ley 24.240 · Art. 10 ter',
      lineas: ['Si te anotaste online', 'o por teléfono, podés', 'darte de baja por el', 'mismo medio.'],
      texto: 'No te pueden obligar a ir en persona. Y te tienen que mandar la constancia dentro de las 72 horas, sin costo.' }),

    placaLey({ dur: 3.4, articulo: 'Ley 24.240 · Art. 10 quáter',
      lineas: ['Por irte no te pueden', 'cobrar preaviso ni', 'mes adelantado.'],
      texto: 'Ni ningún otro concepto. Da igual si pedís la baja en persona, por teléfono o por internet.' }),

    placaLey({ dur: 3.5, articulo: 'Disposición 954/2025',
      lineas: ['Si vende planes online,', 'el Botón de baja', 'tiene que estar', 'a la vista.'],
      texto: 'Tiene que funcionar sin pedirte registro y mandarte el código de tu pedido en 24 horas.' }),

    esc({ dur: 3.4, tema: 'dark', html:
      `${ceja('¿Te lo siguen debitando?', 'on-dark', 0)}
       ${titular(['Frenalo en tu banco.'], 'h2', 0.18)}
       ${li('1', 'Dalo de baja sin pasar por el gimnasio', 'Aunque te hayas adherido con tu CBU', 0.5)}
       ${li('2', 'Pedí que te devuelvan lo debitado', 'Dentro de los 30 días. Te reintegran en 72 horas', 0.75)}` }),

    cierre(3.2, ['Si no te dan la baja,', 'publicá el reclamo.'], 'Gratis, público y sin vueltas.'),
  ],
};

const R2 = {
  id: 'reel-02-manifiesto',
  titulo: 'Manifiesto de marca',
  formato: 'reel',
  escenas: [
    esc({ dur: 1.5, tema: 'dark', html: titular(['Llamaste.'], 'h1', 0.05) }),
    esc({ dur: 1.4, tema: 'dark', html: titular(['Esperaste', 'cuarenta minutos.'], 'h1', 0.05, 0.08) }),
    esc({ dur: 1.8, tema: 'dark', html: titular(['Te dieron', 'un número', 'de gestión.'], 'h1', 0.05, 0.08) }),
    esc({ dur: 1.9, tema: 'orange', marca: false, wrap: 'center', html:
      `<div class="huge" data-anim="pop" data-at="0" data-d="0.5">Nadie<br>te llamó</div>` }),
    esc({ dur: 3.4, tema: 'dark', html:
      `${titular(['Un reclamo por privado', 'es un favor que te hacen.'], 'h2', 0.05, 0.09)}
       <p class="kicker hl" data-anim="sube" data-at="0.55" data-d="0.65" data-dist="36">Uno público es un antecedente.</p>` }),
    esc({ dur: 3.3, tema: 'dark', html:
      `${ceja('Reclame Acá', 'on-dark', 0)}
       ${titular(['Publicá tu reclamo', 'y la empresa responde', 'donde todos lo ven.'], 'h2', 0.18, 0.09)}
       ${cuerpo('Queda con fecha, con estado y a la vista del próximo que esté por comprar.', 0.72)}` }),
    cierre(2.8, ['Tu voz', 'como consumidor.'], 'Publicar un reclamo es gratis.'),
  ],
};

const R3 = {
  id: 'reel-03-tarjeta',
  titulo: 'Consumo desconocido en la tarjeta',
  formato: 'reel',
  escenas: [
    esc({ dur: 2.7, tema: 'dark', html:
      `${ceja('Resumen de tarjeta', 'on-dark', 0)}
       ${titular(['Apareció un consumo', 'que no hiciste.'], 'h1', 0.2, 0.1)}
       ${cuerpo('O uno que ya diste de baja. O el mismo cobrado dos veces.', 0.62)}` }),

    esc({ dur: 1.8, tema: 'orange', marca: false, wrap: 'center', html:
      `<div class="huge" data-anim="pop" data-at="0" data-d="0.5">Tenés<br>30 días</div>` }),

    placaLey({ dur: 3.6, articulo: 'Ley 25.065 · Art. 26',
      lineas: ['Impugná el resumen', 'por escrito dentro', 'de los 30 días.'],
      texto: 'Identificá cada consumo: fecha, comercio y monto, tal como figuran. Y pedí número de reclamo.' }),

    esc({ dur: 3.6, tema: 'light', html:
      `${ceja('Los plazos del banco', 'law', 0)}
       ${li('7', 'días para confirmarte que recibió la impugnación', '', 0.28)}
       ${li('15', 'días más para corregir el error o explicártelo', 'Con copia de los comprobantes', 0.5)}
       ${li('10', 'días hábiles para resolver si no te conforma', '', 0.72)}` }),

    placaLey({ dur: 3.2, articulo: 'Mientras dura el reclamo',
      lineas: ['No te pueden bloquear', 'la tarjeta.'],
      texto: 'Ni las adicionales, mientras no pases el límite de compra. Y pagar el mínimo no significa que aceptaste el resumen.' }),

    esc({ dur: 2.9, tema: 'dark', html:
      `${titular(['¿Pasaron 10 días hábiles', 'y no lo resolvieron?'], 'h2', 0.05, 0.09)}
       <p class="kicker hl" data-anim="sube" data-at="0.5" data-d="0.6" data-dist="34">Reclamá ante el Banco Central.</p>
       ${cuerpo('Guardá el número de reclamo que te dio el banco: te lo van a pedir.', 0.75)}` }),

    cierre(3.0, ['Y dejalo público.'], 'Con fecha, y a la vista del próximo cliente.'),
  ],
};

const R4 = {
  id: 'reel-04-garantia',
  titulo: 'Garantía de electrodomésticos',
  formato: 'reel',
  escenas: [
    esc({ dur: 2.9, tema: 'dark', html:
      `${ceja('Lo que te dicen en el local', 'on-dark', 0)}
       ${titular(['“Eso lo tenés que ver', 'con la marca.', 'Nosotros solo', 'lo vendimos.”'], 'h1', 0.22, 0.09)}` }),

    esc({ dur: 1.6, tema: 'orange', marca: false, wrap: 'center', html:
      `<div class="huge" data-anim="pop" data-at="0" data-d="0.5">No</div>
       ${cuerpo('El que te lo vendió responde igual.', 0.42)}` }),

    placaLey({ dur: 3.6, articulo: 'Ley 24.240 · Art. 13',
      lineas: ['Fabricante, importador,', 'distribuidor y vendedor', 'responden juntos.'],
      texto: 'O sea: le reclamás a quien te resulte más fácil. El comercio sigue siendo responsable.' }),

    placaLey({ dur: 3.4, articulo: 'Ley 24.240 · Art. 11',
      lineas: ['6 meses de garantía', 'en todo producto nuevo.'],
      texto: '3 meses si es usado, desde que te lo entregan. La marca puede darte más, nunca menos: si te la recorta, esa cláusula es nula.' }),

    esc({ dur: 3.4, tema: 'light', html:
      `${ceja('Lo que no pagás vos', 'law', 0)}
       ${li('1', 'El flete al service', 'Tienen 48 horas para retirarlo desde que avisás', 0.28)}
       ${li('2', 'Todos los gastos de la reparación', 'Y los repuestos tienen que ser nuevos', 0.5)}
       ${li('3', 'Los días que estuvo en el taller', 'Se suman al plazo de tu garantía', 0.72)}` }),

    esc({ dur: 2.9, tema: 'dark', html:
      `${titular(['¿Volvió del service', 'y sigue fallando?'], 'h2', 0.05, 0.09)}
       ${cuerpo('El artículo 17 te deja elegir: que te lo cambien por uno nuevo, que te devuelvan la plata, o quedártelo con un descuento.', 0.45)}` }),

    cierre(3.0, ['¿No te lo resuelven?', 'Dejalo público.'], 'Publicá el reclamo en Reclame Acá.'),
  ],
};

/* ====================================================================== */
/*  HISTORIAS — dejan libre la franja de los stickers                      */
/* ====================================================================== */

const historia = (id, titulo, escenas) => ({ id, titulo, formato: 'historia', progreso: false, escenas });

const H1 = historia('historia-01-encuesta', 'Encuesta: ¿te pasó?', [
  esc({ dur: 6.0, tema: 'dark', wrap: 'top', html:
    `<style>.wrap{bottom:760px}</style>
     ${ceja('Contanos', 'on-dark', 0)}
     ${titular(['¿Alguna vez te dijeron', 'que la baja "solo se', 'hace en la sede"?'], 'h2', 0.2, 0.1)}
     ${cuerpo('Spoiler: si te anotaste online, no es cierto.', 0.7)}` }),
]);

const H2 = historia('historia-02-guia', 'Nueva guía publicada', [
  esc({ dur: 6.0, tema: 'navy', wrap: 'top', html:
    `<style>.wrap{bottom:760px}</style>
     ${ceja('Nueva guía', 'accent', 0)}
     ${titular(['Cómo dar de baja', 'el gimnasio y frenar', 'el débito automático.'], 'h2', 0.2, 0.1)}
     ${cuerpo('Qué dice la ley, cómo pedirla para que quede constancia y cómo frenar el débito desde tu banco.', 0.72)}` }),
]);

const H3 = historia('historia-03-garantia', 'Dato: garantía legal', [
  esc({ dur: 6.0, tema: 'orange', wrap: 'top', html:
    `<style>.wrap{bottom:760px}</style>
     ${ceja('Tus derechos', 'solid', 0)}
     <div class="huge" data-anim="pop" data-at="0.12" data-d="0.6" style="font-size:150px">6 meses</div>
     ${titular(['de garantía por ley', 'en todo producto nuevo.'], 'h2', 0.45, 0.09)}
     ${cuerpo('Aunque en el local te digan que ya se venció la del fabricante.', 0.8)}` }),
]);

module.exports = [R1, R2, R3, R4, H1, H2, H3];
