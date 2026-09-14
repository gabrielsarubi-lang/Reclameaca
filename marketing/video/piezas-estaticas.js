/* Piezas ESTÁTICAS: carruseles (1080x1350) e historias en imagen (1080x1920).
   Usan los mismos bloques que los videos, renderizados en su estado final.
   Contenido legal tomado de las guías del sitio (reclameaca.com.ar/guias). */

const { LOGO, esc, ceja, titular, cuerpo, placaLey, li, cierre } = require('./lib/bloques.js');

const pag = (n, total) => `<span class="pag">${n}/${total}</span>`;
const swipe = () => `<span class="swipe"><i class="arr">→</i>Seguí</span>`;

/* Lámina de carrusel: una escena sin animación pendiente, con paginador. */
const lam = ({ tema = 'light', marca = false, wrap = '', html, n, total, mas = true }) => {
  const e = esc({ dur: 1, tema, marca, wrap, html });
  const extra = pag(n, total) + (mas ? swipe() : '');
  return e.replace('</section>', extra + '</section>');
};

/* ====================================================================== */
/*  CARRUSEL 1 — Comprar por internet                                      */
/* ====================================================================== */

const C1 = {
  id: 'carrusel-01-comprar-online',
  titulo: 'Cinco derechos en toda compra por internet',
  formato: 'carrusel',
  tamano: [1080, 1350],
  laminas: [
    lam({ n: 1, total: 7, tema: 'dark', marca: true, html:
      `${ceja('Compras a distancia', 'on-dark')}
       ${titular(['Cinco derechos', 'que tenés en toda', 'compra por internet.'], 'h1')}
       ${cuerpo('Valen para Mercado Libre y para cualquier tienda en línea.')}` }),

    lam({ n: 2, total: 7, html:
      `${ceja('Uno · Ley 24.240, art. 34', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['Podés arrepentirte', 'dentro de los 10 días.'], 'h2')}</div>
       ${cuerpo('Desde que recibís el producto, sin dar explicaciones. Si el último día cae inhábil, se corre al siguiente hábil.')}` }),

    lam({ n: 3, total: 7, html:
      `${ceja('Dos · Devolver es gratis', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['El envío de vuelta', 'lo paga el vendedor.'], 'h2')}</div>
       ${cuerpo('La ley dice que ejercer este derecho no te puede implicar ningún gasto. Si te lo quieren cobrar, es un incumplimiento.')}` }),

    lam({ n: 4, total: 7, html:
      `${ceja('Tres · Disposición 954/2025', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['El Botón de', 'arrepentimiento tiene', 'que estar a la vista.'], 'h2')}</div>
       ${cuerpo('Desde el primer acceso, sin registro ni trámite. Y te mandan el código de tu pedido dentro de las 24 horas.')}` }),

    lam({ n: 5, total: 7, html:
      `${ceja('Cuatro · Art. 10 bis', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['¿No llegó, o no es', 'lo que compraste?', 'Elegís vos.'], 'h2')}</div>
       ${li('1', 'Que cumplan', 'Si todavía es posible', 0)}
       ${li('2', 'Otro producto equivalente', '', 0)}
       ${li('3', 'Que te devuelvan la plata', 'Más los daños que te causaron', 0)}` }),

    lam({ n: 6, total: 7, html:
      `${ceja('Cinco · Art. 11', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['Si se rompe, tiene', '6 meses de garantía.'], 'h2')}</div>
       ${cuerpo('3 meses si es usado, desde que lo recibís. Y el traslado para repararlo lo paga quien da la garantía, no vos.')}` }),

    lam({ n: 7, total: 7, tema: 'navy', marca: false, wrap: 'center', mas: false, html:
      `<div style="align-self:center">${LOGO(160).replace('class="mk"', 'class="cta-logo"')}</div>
       ${titular(['¿Te lo negaron?', 'Publicá el reclamo.'], 'h2')}
       ${cuerpo('Queda con fecha, la empresa recibe el aviso y lo ve el próximo comprador.')}
       <div class="url">reclameaca.com.ar</div>` }),
  ],
};

/* ====================================================================== */
/*  CARRUSEL 2 — Agencias de viaje                                         */
/* ====================================================================== */

const C2 = {
  id: 'carrusel-02-agencia-viajes',
  titulo: 'La agencia no se puede lavar las manos',
  formato: 'carrusel',
  tamano: [1080, 1350],
  laminas: [
    lam({ n: 1, total: 6, tema: 'dark', marca: true, html:
      `${ceja('Antes de reservar el verano', 'on-dark')}
       ${titular(['“Nosotros solo', 'somos intermediarios.”'], 'h1')}
       ${cuerpo('Es la frase que más se escucha cuando un viaje se cae. Y es la que menos se sostiene.')}` }),

    lam({ n: 2, total: 6, html:
      `${ceja('Ley 24.240, art. 40', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['La agencia responde', 'junto con el hotel', 'y la aerolínea.'], 'h2')}</div>
       ${cuerpo('Cuando el daño viene de la prestación del servicio, responden todos los que intervinieron, y es responsabilidad solidaria.')}` }),

    lam({ n: 3, total: 6, html:
      `${ceja('Si no cumplen · Art. 10 bis', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['El hotel no tiene', 'tu reserva. Elegís vos.'], 'h2')}</div>
       ${li('1', 'Que cumplan', '', 0)}
       ${li('2', 'Un servicio equivalente', '', 0)}
       ${li('3', 'Que te devuelvan la plata', 'En los tres casos, más los daños', 0)}` }),

    lam({ n: 4, total: 6, html:
      `${ceja('Si cancelás vos · Disp. 954/2025', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['10 días corridos', 'para arrepentirte.'], 'h2')}</div>
       ${cuerpo('Si contrataste a distancia un hotel, un auto, una excursión o un micro. La condición es avisar al menos 24 horas antes del servicio.')}` }),

    lam({ n: 5, total: 6, tema: 'orange', marca: false, html:
      `${ceja('La excepción', 'solid')}
       ${titular(['Los pasajes de avión', 'tienen regla propia.'], 'h2')}
       ${cuerpo('Solo te podés arrepentir si la tarifa que elegiste permite devolución (Decreto 809/2024). Revisá las condiciones antes de pagar, no después.')}` }),

    lam({ n: 6, total: 6, tema: 'navy', marca: false, wrap: 'center', mas: false, html:
      `<div style="align-self:center">${LOGO(160).replace('class="mk"', 'class="cta-logo"')}</div>
       ${titular(['Guardá todo.', 'Y dejalo público.'], 'h2')}
       ${cuerpo('Mails, capturas y números de reclamo. Es lo que sostiene el tuyo y avisa al próximo.')}
       <div class="url">reclameaca.com.ar</div>` }),
  ],
};

/* ====================================================================== */
/*  CARRUSEL 3 — Demoras en el aeropuerto                                  */
/* ====================================================================== */

const C3 = {
  id: 'carrusel-03-demoras-aeropuerto',
  titulo: 'Qué te deben según cuánto esperás',
  formato: 'carrusel',
  tamano: [1080, 1350],
  laminas: [
    lam({ n: 1, total: 6, tema: 'dark', marca: true, html:
      `${ceja('Demoras · Decreto 809/2024', 'on-dark')}
       ${titular(['Cuánto te tienen', 'que dar según', 'cuánto esperás.'], 'h1')}
       ${cuerpo('El artículo 43 lo fija por tramos. No es a criterio del mostrador.')}` }),

    lam({ n: 2, total: 6, html:
      `${ceja('Hasta 4 horas', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['Sin obligación', 'de asistencia.'], 'h2')}</div>
       ${cuerpo('Con una excepción: si la demora cae entre la medianoche y las 6 de la mañana, sí te tienen que asistir.')}` }),

    lam({ n: 3, total: 6, html:
      `${ceja('De 4 a 8 horas', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['Comidas y refrescos', 'suficientes.'], 'h2')}</div>
       ${cuerpo('"Suficientes" quiere decir según la hora y el tiempo de espera, no un alfajor y listo.')}` }),

    lam({ n: 4, total: 6, html:
      `${ceja('Más de 8 horas', 'law')}
       <div class="ruled"><i class="rule"></i>${titular(['Comidas, alojamiento', 'y los traslados.'], 'h2')}</div>
       ${cuerpo('Hotel y los viajes hasta el hotel y de vuelta al aeropuerto. Pedilo en el mostrador y anotá con quién hablaste.')}` }),

    lam({ n: 5, total: 6, tema: 'orange', marca: false, html:
      `${ceja('Si te cancelan', 'solid')}
       ${titular(['El reintegro se paga', 'dentro de los 30 días.'], 'h2')}
       ${cuerpo('Por el mismo medio con el que pagaste y en la misma moneda. Pedilo siempre por escrito: los 30 días corren desde ese momento.')}` }),

    lam({ n: 6, total: 6, tema: 'navy', marca: false, wrap: 'center', mas: false, html:
      `<div style="align-self:center">${LOGO(160).replace('class="mk"', 'class="cta-logo"')}</div>
       ${titular(['Guardá los tickets', 'de todo lo que gastaste.'], 'h2')}
       ${cuerpo('El hotel, el pasaje nuevo, los traslados. No se pagan solos: hay que pedirlos y demostrarlos.')}
       <div class="url">reclameaca.com.ar</div>` }),
  ],
};

/* ====================================================================== */
/*  HISTORIAS EN IMAGEN — 1080x1920, con la franja del sticker libre       */
/* ====================================================================== */

const img = (id, titulo, html, tema = 'dark', marca = true) => ({
  id, titulo, formato: 'historia-img', tamano: [1080, 1920],
  laminas: [esc({ dur: 1, tema, marca, wrap: 'top', html: `<style>.wrap{bottom:760px}</style>${html}` })],
});

const H4 = img('historia-04-boton-arrepentimiento', 'Botón de arrepentimiento',
  `${ceja('Compras por internet', 'solid')}
   <div class="huge" style="font-size:150px">10 días</div>
   ${titular(['para arrepentirte', 'de una compra online.'], 'h2')}
   ${cuerpo('Sin dar explicaciones. Y el envío de vuelta lo paga el vendedor.')}`, 'orange', true);

const H5 = img('historia-05-demoras-vuelo', 'Demoras en el aeropuerto',
  `${ceja('Si te demoran el vuelo', 'on-dark')}
   ${titular(['Lo que te deben,', 'por tramos.'], 'h2')}
   ${li('4h', 'Comidas y refrescos', 'De 4 a 8 horas de demora', 0)}
   ${li('8h', 'Más alojamiento y traslados', 'De 8 horas en adelante', 0)}
   ${cuerpo('Decreto 809/2024, artículo 43.')}`, 'dark', true);

const H6 = img('historia-06-caja-preguntas', 'Caja de preguntas',
  `${ceja('Contanos', 'on-dark')}
   ${titular(['¿Con qué empresa', 'estás peleando', 'ahora mismo?'], 'h2')}
   ${cuerpo('Decinos el rubro y escribimos la guía para reclamarle.')}`, 'navy', true);

module.exports = [C1, C2, C3, H4, H5, H6];
