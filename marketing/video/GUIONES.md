# Guiones de video — Reclame Acá

Dos bloques:

- **Bloque A — ya renderizados.** Siete MP4 en `salida/`, listos para subir.
  Tipografía animada con la identidad del sitio. Se regeneran con `node render.js`.
- **Bloque B — para filmar.** Tres guiones que necesitan cámara o grabación de
  pantalla. Son los formatos que mejor rinden en Reels y ninguno necesita actor
  profesional.

Todos los archivos salen en **1080×1920, 30 fps, H.264, sin audio**.
Lo de "sin audio" es a propósito: el alcance de un Reel depende mucho del audio
en tendencia, y ese se elige dentro de la app el día que publicás. Subí el MP4,
tocá "Audio" y elegí uno del momento. Como todo el mensaje está en pantalla,
el video también funciona con el sonido apagado, que es como lo ve la mayoría.

---

## Bloque A · Piezas renderizadas

### A1 — `reel-01-gimnasio.mp4` · 21,7 s
**Objetivo:** captar consumidores por búsqueda de un problema concretísimo.
**Gancho:** una frase que casi todos escucharon alguna vez.

| Tiempo | En pantalla | Intención |
|---|---|---|
| 0,0–2,8 | *LO QUE TE DICEN* — "La baja del gimnasio solo se hace en la sede." | El espectador se reconoce en los primeros 2 segundos |
| 2,8–4,5 | **MENTIRA** (placa naranja) | Corte duro de color. Quiebre de patrón |
| 4,5–8,2 | Ley 24.240 · Art. 10 ter — baja por el mismo medio; constancia en 72 h | Prueba, no opinión |
| 8,2–11,6 | Art. 10 quáter — no pueden cobrar preaviso ni mes adelantado | El dato que más bronca genera → comentarios |
| 11,6–15,1 | Disposición 954/2025 — Botón de baja visible, código en 24 h | Dato accionable, muy guardable |
| 15,1–18,5 | "Frenalo en tu banco": baja del débito + devolución de 30 días | Salida práctica inmediata |
| 18,5–21,7 | Cierre de marca + reclameaca.com.ar | CTA |

### A2 — `reel-02-manifiesto.mp4` · 15,3 s
**Objetivo:** publicitario puro. Es el que conviene pautar.
**Gancho:** tres golpes secos que arman la escena antes de decir qué se vende.

| Tiempo | En pantalla |
|---|---|
| 0,0–1,5 | "Llamaste." |
| 1,5–2,9 | "Esperaste cuarenta minutos." |
| 2,9–4,7 | "Te dieron un número de gestión." |
| 4,7–6,6 | **NADIE TE LLAMÓ** (placa naranja) |
| 6,6–10,0 | "Un reclamo por privado es un favor que te hacen." / *"Uno público es un antecedente."* |
| 10,0–13,3 | Qué es Reclame Acá: la empresa responde donde todos lo ven |
| 13,3–15,3 | "Tu voz como consumidor" + URL |

> La línea 6,6–10,0 es el corazón de la campaña. Sirve como bio, como titular
> de pauta y como placa suelta.

### A3 — `reel-03-tarjeta.mp4` · 21,8 s
**Objetivo:** tráfico a la guía de tarjeta de crédito. Tema de alto volumen de búsqueda.
Gancho ("apareció un consumo que no hiciste") → **TENÉS 30 DÍAS** → Art. 26 de la
Ley 25.065 → los plazos del banco (7 / 15 / 10 días) → no te pueden bloquear la
tarjeta → BCRA → cierre.

### A4 — `reel-04-garantia.mp4` · 20,8 s
**Objetivo:** desarmar la excusa más común del mostrador.
"Eso lo tenés que ver con la marca" → **NO** → Art. 13, responden juntos →
Art. 11, 6 meses → lo que no pagás vos (flete, repuestos, los días en el service)
→ Art. 17 si vuelve fallando → cierre.

### A5 a A7 — Historias · 6 s cada una
Dejan libre a propósito la franja entre los 520 px y los 820 px desde abajo:
**ahí va el sticker**, encima del video, en la app.

| Archivo | Contenido | Sticker sugerido |
|---|---|---|
| `historia-01-encuesta.mp4` | "¿Alguna vez te dijeron que la baja solo se hace en la sede?" | Encuesta **Sí / Me pasó ahora** |
| `historia-02-guia.mp4` | Anuncio de la guía del gimnasio | Link a `/guias/dar-de-baja-gimnasio` |
| `historia-03-garantia.mp4` | "6 meses de garantía por ley" | Link a `/guias/garantia-electrodomesticos` |

---

## Bloque B · Para filmar

### B1 — "El sector que nunca atiende" · 18 s · sketch en una sola toma
Celular fijo sobre algo, plano medio, luz de ventana. No hace falta editar nada
salvo los cortes.

| Toma | Acción | Texto en pantalla |
|---|---|---|
| 1 (0–4 s) | Con el teléfono en la oreja, cara de resignación | "Llamada 1 · lunes" |
| 2 (4–8 s) | Mismo encuadre, otra remera, misma cara | "Llamada 4 · jueves" |
| 3 (8–12 s) | Mismo encuadre, otra remera, ya sin expresión | "Llamada 7 · te vuelvo a pasar con el sector" |
| 4 (12–18 s) | Deja el teléfono, abre la notebook, teclea | "O lo publicás y que contesten donde todos lo ven" |

**Cierre:** placa de marca (sacala de `reel-02-manifiesto.mp4`, últimos 2 s).
**Clave:** el mismo encuadre exacto en las tres primeras tomas. El chiste es que
cambia la remera y no cambia nada más.

### B2 — "Un reclamo en 40 segundos" · 30 s · grabación de pantalla
Grabá la pantalla del celular publicando un reclamo de verdad en el sitio.

1. (0–4 s) Texto sobre la grabación: *"Publicar un reclamo lleva menos que esperar en línea."*
2. (4–12 s) Cuenta nueva. Mostrar que es gratis.
3. (12–22 s) El formulario: empresa, categoría, **qué pasó con fechas y montos**,
   y qué pedís como solución. Sobreimpreso: *"Poné el número de gestión que te dieron. Es lo que no pueden negar."*
4. (22–27 s) El reclamo publicado, con su badge de estado *Pendiente*.
5. (27–30 s) Sobreimpreso: *"La empresa lo ve en su panel y responde en público."* + URL.

**Clave:** que se vea el reloj del celular corriendo. La promesa es que es rápido.

### B3 — "Tu reclamo tiene que decir estas 4 cosas" · 25 s · a cámara
Plano pecho, mirando al lente. Un corte entre cada punto, sin transiciones.

> "Si tu reclamo no dice estas cuatro cosas, la empresa lo puede esquivar.
> **Uno:** la fecha exacta. No 'hace unos meses'.
> **Dos:** el monto, con el número de comprobante.
> **Tres:** el número de gestión que te dieron cuando llamaste. Ese es el que no pueden negar.
> **Cuatro:** qué querés que pase. Que te devuelvan la plata no es lo mismo que
> que te reparen el equipo, y si no lo decís, lo eligen ellos.
> Con esas cuatro, tu reclamo deja de ser una queja y pasa a ser un antecedente."

**Sobreimpresos:** 1 FECHA EXACTA · 2 MONTO Y COMPROBANTE · 3 N° DE GESTIÓN · 4 QUÉ PEDÍS
**Cierre:** "Publicalo en reclameaca.com.ar".

---

## Reglas de montaje de la marca

- **Corte duro siempre.** Nada de fundidos ni transiciones de plantilla.
- **Ritmo:** ninguna placa pasa de 3,7 s. El gancho entra antes del segundo 2.
- **Una idea por placa.** Si hay que leer dos veces, se parte en dos.
- **El naranja marca una sola cosa por pantalla.**
- **Siempre la cita legal.** El artículo concreto es lo que separa a la marca de
  una cuenta de indignación. Es también lo que hace que la gente lo guarde.
- **Cerrar con la URL**, no con "link en bio".
