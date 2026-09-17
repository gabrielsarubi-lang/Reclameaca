/* Genera CALENDARIO.md, calendario.csv y la tabla del kit a partir de calendario.json.
   Los copies NO se duplican acá: se leen de kit-instagram.html, que es la fuente
   de verdad de los textos. Correr después de tocar cualquiera de los dos.
   Uso:  node gen-calendario.js  */

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const cal = JSON.parse(fs.readFileSync(path.join(DIR, 'calendario.json'), 'utf8'));
const html = fs.readFileSync(path.join(DIR, 'kit-instagram.html'), 'utf8');

/* --- copies, extraídos del kit ------------------------------------------ */

const desentidad = (s) => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

function copies() {
  const mapa = {};
  const bloques = html.split(/<article class="(?:piece|carousel-row)">/).slice(1);
  for (const b of bloques) {
    const cuerpo = b.split('</article>')[0];
    const archivo =
      (cuerpo.match(/<p class="filename">([^<]+)<\/p>/) || [])[1] ||
      (cuerpo.match(/<p class="strip-hint">([\w-]+)\/ /) || [])[1];
    const texto = (cuerpo.match(/<p class="copy-text">([\s\S]*?)<\/p>/) || [])[1];
    if (archivo && texto) mapa[archivo.trim()] = desentidad(texto).trim();
  }
  return mapa;
}

const COPY = copies();
const clave = (archivo) => archivo.replace(/\/.*$/, '').trim();   // "carrusel-01-x/ (7 láminas)" -> "carrusel-01-x"
const copyDe = (archivo) => COPY[archivo.trim()] || COPY[clave(archivo)] || '';

/* --- CSV ---------------------------------------------------------------- */

const celda = (v) => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
const filas = [['dia', 'momento', 'formato', 'archivo', 'titulo', 'texto', 'nota']];

for (const d of cal.dias) {
  const p = d.publicacion, h = d.historia;
  filas.push([d.dia, 'Publicación', p.tipo, p.archivo, p.titulo, copyDe(p.archivo), p.porque]);
  filas.push([d.dia, 'Historia', h.tipo, h.archivo, h.titulo, h.sticker, h.porque]);
}

fs.writeFileSync(path.join(DIR, 'calendario.csv'),
  '﻿' + filas.map(f => f.map(celda).join(',')).join('\r\n') + '\r\n');

/* --- Markdown ----------------------------------------------------------- */

let md = `# Calendario de publicación

Una publicación y una historia por día, nueve días. ${cal.nota}

Los textos completos de cada publicación están en \`calendario.csv\` (columna
\`texto\`) y en el kit, con botón de copiar. Los archivos salen de
\`marketing/video/salida/\`.

> Esta lista se genera con \`node gen-calendario.js\` a partir de
> \`calendario.json\`. Si movés un día, editá el JSON y volvé a correrlo: se
> actualizan el CSV, este archivo y la tabla del kit.

| Día | Publicación | Historia |
|---|---|---|
`;
for (const d of cal.dias) {
  md += `| **${d.dia}** | ${d.publicacion.tipo} · \`${d.publicacion.archivo}\`<br>${d.publicacion.titulo} | ${d.historia.tipo} · \`${d.historia.archivo}\`<br>${d.historia.sticker} |\n`;
}

md += `\n## Día por día\n`;
for (const d of cal.dias) {
  md += `\n### Día ${d.dia}\n\n`;
  md += `**Publicación — ${d.publicacion.tipo}:** \`${d.publicacion.archivo}\`\n`;
  md += `*${d.publicacion.titulo}.* ${d.publicacion.porque}\n\n`;
  md += `**Historia — ${d.historia.tipo}:** \`${d.historia.archivo}\`\n`;
  md += `Sticker: ${d.historia.sticker}\n`;
  md += `${d.historia.porque}\n`;
}
fs.writeFileSync(path.join(DIR, 'CALENDARIO.md'), md);

/* --- tabla para el kit --------------------------------------------------- */

let tabla = `      <tbody>\n`;
for (const d of cal.dias) {
  const p = d.publicacion, h = d.historia;
  tabla += `        <tr>
          <td class="week">${d.dia}</td>
          <td><b>${p.titulo}</b><br><span class="filename">${p.archivo}</span><br><span class="small">${p.porque}</span></td>
          <td><b>${h.titulo}</b><br><span class="filename">${h.archivo}</span><br><span class="small">${h.sticker}</span></td>
        </tr>\n`;
}
tabla += `      </tbody>`;

const ini = '<!-- calendario:inicio -->', fin = '<!-- calendario:fin -->';
if (html.includes(ini) && html.includes(fin)) {
  const nuevo = html.slice(0, html.indexOf(ini) + ini.length) + '\n' + tabla + '\n      ' + html.slice(html.indexOf(fin));
  fs.writeFileSync(path.join(DIR, 'kit-instagram.html'), nuevo);
  console.log('kit-instagram.html: tabla actualizada');
} else {
  console.log('kit-instagram.html: no encontré los marcadores, la tabla no se tocó');
}

const faltan = cal.dias.map(d => d.publicacion.archivo).filter(a => !copyDe(a));
console.log(`calendario.csv: ${filas.length - 1} filas`);
console.log(`CALENDARIO.md: ${cal.dias.length} días`);
console.log(faltan.length ? `SIN COPY: ${faltan.join(', ')}` : 'Todas las publicaciones tienen su copy.');
