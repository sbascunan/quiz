# Duelo de matemáticas

Cuestionarios cronometrados estilo Kahoot para aprender matemáticas, solo o compitiendo en vivo.
Sin build: `index.html` (motor) + `preguntas.js` (banco de preguntas).

- **Áreas y niveles (23):** Geometría algebraica (6, hasta *Grothendieck*), Teoría de grafos (3), Análisis real (3),
  Topología (3 + 2 de topología algebraica), Álgebra abstracta (6, hasta *Évariste Galois*), y una mezcla de todas.
- **Partida completa:** 3 rondas (o una sola), con podio al final de cada ronda y podio final.
- **Modo en vivo:** nadie avanza hasta que todos responden (o se acaba el tiempo); se muestra quién falta.
- **Modo progresivo:** cada ronda sube de dificultad de la primera a la última pregunta.

## Publicar en GitHub Pages

Sube `index.html`, `preguntas.js` y este README a un repo, y activa **Settings → Pages → Deploy from a branch → `main` / root**.

## Agregar preguntas

En `preguntas.js`, dentro del arreglo del nivel (`gr0`, `aa5`, …):

```js
S("Enunciado", ["Correcta", "Mala 1", "Mala 2", "Mala 3"], "Explicación")
```

La correcta va **primero**; el motor baraja las opciones. Para variantes numéricas usa un generador
(`r => mc(r, "enunciado", respuesta, [distractores], "explicación")`, ver ejemplos). Áreas, niveles y tiempos están en `AREAS`.

## Notas del modo en vivo

Usa [PeerJS](https://peerjs.com) (WebRTC). El anfitrión lleva el ranking: si recarga, se pierde la partida.
En algunas redes móviles muy restrictivas la conexión puede fallar; en ese caso, prueben con Wi-Fi.
