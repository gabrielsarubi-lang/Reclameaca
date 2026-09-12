# Generador de video para Instagram — Reclame Acá

Genera los Reels y las Historias como MP4 listos para subir, usando los mismos
colores, la misma tipografía y el mismo logo que `reclameaca.com.ar`. El contenido
se escribe en un archivo de texto, no en un editor de video: cambiar una placa es
editar una línea y volver a renderizar.

## Cómo funciona

1. `piezas.js` describe cada video como una lista de escenas en HTML.
2. `lib/estilo.css` tiene el sistema visual, con los tokens copiados del sitio.
3. `lib/motor.js` anima: el renderer le pide el cuadro del segundo *t* y el motor
   deja la página exactamente en ese estado. Sin `requestAnimationFrame`, así que
   el resultado es idéntico en cualquier máquina.
4. `render.js` abre Chromium en 1080×1920, saca los 30 cuadros por segundo y se
   los pasa a ffmpeg, que arma el MP4 en H.264.

## Uso

```bash
npm install                  # playwright-core + ffmpeg-static
node render.js               # todos los videos → salida/
node render.js reel-01-gimnasio    # solo uno
```

Mientras escribís, para no esperar el render entero:

```bash
node previsualizar.js reel-01-gimnasio 2.4 4.2 7.8
```

Saca un PNG de cada segundo que le pidas, en `salida/previa/`.

## Salida

MP4 · 1080×1920 · 30 fps · H.264 high · yuv420p · CRF 18 · faststart.
Sin audio: el audio en tendencia se elige dentro de Instagram al publicar
(ver `GUIONES.md`).

## Cambiar el contenido

Todo está en `piezas.js`. Los bloques que vas a usar:

| Función | Para qué |
|---|---|
| `esc({dur, tema, html})` | Una escena. Temas: `dark`, `navy`, `light`, `orange` |
| `titular([...líneas])` | Titular que aparece línea por línea con máscara |
| `placaLey({articulo, lineas, texto})` | Placa clara con la cita legal y la regla naranja |
| `ceja(texto, estilo)` | Etiqueta en mayúsculas. Estilos: `on-dark`, `accent`, `law`, `solid` |
| `li(n, texto, sub, at)` | Ítem numerado |
| `cierre(dur, [líneas], sub)` | Placa final con logo y URL |

Los cortes de línea de los titulares son **manuales**, a propósito: un titular
que corta donde corresponde se lee mucho mejor que uno que envuelve solo.
Como referencia, a 80 px entran unos 22 caracteres por línea.

Las animaciones se controlan con atributos: `data-anim` (`sube`, `pop`, `fade`,
`linea`, `barra`, `regla`), `data-at` (segundo en que arranca) y `data-d` (cuánto dura).

## Duración

La duración de cada video es la suma de los `dur` de sus escenas; el motor la
calcula sola. Para Reels conviene quedarse entre 15 y 25 segundos, y que ninguna
placa pase de 3,7 s.

## Si cambia la identidad del sitio

Los tokens de `lib/estilo.css` están copiados de `assets/css/style.css`. Si
cambiás la paleta en el sitio, actualizá el bloque `:root` acá y volvé a renderizar:
salen todos los videos con la identidad nueva.

La tipografía Inter está en `fonts/` como woff2 para que el render no dependa de
la red y salga siempre igual.
