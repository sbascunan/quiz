# Geometría algebraica · Duelo de cuestionarios

Cuestionarios cronometrados estilo Kahoot para aprender geometría algebraica.
Una sola página (`index.html`), sin build ni dependencias que instalar.

- **Práctica offline:** juegas solo, sin internet.
- **Sala en vivo:** uno crea la sala y comparte el código de 4 letras; los demás entran desde el mismo enlace.
- **Niveles:** Súper fácil → Fácil → Normal → Difícil → Français (difficile) → Grothendieck, más un modo Progresivo que los recorre en orden.

## Publicar en GitHub Pages

```bash
cd geometria-algebraica-quiz
git init && git add . && git commit -m "Quiz de geometría algebraica"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/geometria-algebraica-quiz.git
git push -u origin main
```

Luego, en el repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
La página queda en `https://TU_USUARIO.github.io/geometria-algebraica-quiz/`.

## Agregar preguntas o niveles

Todo está al inicio del `<script>` de `index.html`:

- `LN`: nombre de cada nivel. `TL`: segundos por pregunta.
- `BANK[n]`: lista de preguntas `{q, o:[4 opciones], c:índice correcto, e:explicación}`.

Para un nivel nuevo, agrega la misma clave en `LN`, `TL` y `BANK`; el selector lo detecta solo.

## Notas del modo en vivo

Usa [PeerJS](https://peerjs.com) (WebRTC) con su servidor público gratuito solo para conectar a los jugadores;
las respuestas viajan directamente entre navegadores y el anfitrión lleva el ranking.
Si el anfitrión recarga o cierra la página, la partida se pierde. En algunas redes móviles muy restrictivas
(NAT simétrico) la conexión puede fallar; en ese caso prueben con Wi-Fi.
