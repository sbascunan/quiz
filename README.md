# Duelo de Preguntas

## Estructura modular del proyecto

El banco de preguntas se encuentra dividido por carpetas de categorías y niveles (`banco/<categoria>/n<nivel>.js`), lo que facilita la adición de nuevas preguntas sin modificar el motor principal:

```
├── index.html                (Interfaz, tema claro/oscuro automático, login, ranking y motor)
├── preguntas.js              (Cargador dinámico, motor de aleatoriedad y utilidades S, mc, ri)
└── banco/
    ├── ga/                   (Geometría algebraica - 6 niveles)
    ├── gr/                   (Teoría de grafos - 3 niveles)
    ├── ar/                   (Análisis real - 3 niveles)
    ├── to/                   (Topología - 5 niveles)
    ├── aa/                   (Álgebra abstracta - 6 niveles)
    ├── vc/                   (Variable compleja - 3 niveles)
    ├── mc/                   (Mecánica clásica - 3 niveles)
    ├── mq/                   (Mecánica cuántica - 3 niveles)
    ├── me/                   (Mecánica estadística - 3 niveles)
    ├── hc/                   (Historia de Chile - 3 niveles)
    ├── ha/                   (Historia de América - 3 niveles)
    ├── hg/                   (Historia global - 3 niveles)
    ├── pvz/                  (Plantas vs. Zombies - 3 niveles)
    └── cars/                 (Saga de Cars - 3 niveles)

```

## Características principales

* **14 categorías temáticas:** Desde matemáticas avanzadas e historia hasta cultura pop (*Plantas vs. Zombies* y *Saga de Cars*).

* **Modos de juego:**

  * **Práctica local:** Partida cronometrada individual con registro de récords por configuración y estadísticas detalladas de aciertos, rachas y repaso de errores.

  * **Sala en vivo:** Multijugador sincronizado mediante WebRTC ([PeerJS](https://peerjs.com)); nadie avanza hasta que todos responden o se agota el tiempo.

* **Autenticación:**

  * Inicio de sesión con **Google** (Google Identity Services) con soporte de caracteres UTF-8.

  * Registro e inicio de sesión con **contraseña segura** (cifrado SHA-256 con sal en `localStorage`).

* **Tema visual automático:** Detecta el modo claro u oscuro del sistema operativo al iniciar, permitiendo alternar manualmente con el botón `☀️` / `🌙`.

* **Atajos de teclado:** Teclas `1`–`4` (o `A`–`D`) para responder con rapidez y `Enter` / `Espacio` para avanzar en el modo anfitrión.

* **Podio escalado dinámico:** Muestra alturas proporcionales al puntaje obtenido en cada ronda y podio final.

* **Gestión de récords:** Tabla de ranking por categorías y herramientas para exportar/importar respaldos en formato `.json`.

## Publicar en GitHub Pages

1. Sube todos los archivos (`index.html`, `preguntas.js` y la carpeta `banco/`) a un repositorio en GitHub.

2. Ve a **Settings → Pages → Build and deployment**.

3. Selecciona la rama `main` (o `master`) y la carpeta `/ (root)`, luego pulsa **Save**.

## Instrucciones para el modo en vivo (Salas)

* **Para el anfitrión:** Al terminar una partida multijugador, **el anfitrión debe salir de la sala** (pulsando *«Salir de la sala»* o *«← Inicio»*) para cerrar las conexiones previas antes de crear una nueva sala con el mismo código.

* **Redes:** El modo en vivo utiliza WebRTC. Si se encuentra en una red corporativa o móvil muy restrictiva, se recomienda utilizar una red Wi-Fi estándar.

## Cómo añadir o generar preguntas

Para agregar preguntas a un nivel específico, edite o cree el archivo correspondiente dentro de `banco/<categoria>/n<nivel>.js` utilizando la función `reg`:

```
reg("mq", 1, [
  S("Enunciado de la pregunta teórica...", ["Respuesta correcta", "Distractor 1", "Distractor 2", "Distractor 3"], "Explicación detallada."),
  r => {
    const n = ri(r, 2, 6);
    return mc(r, "¿Enunciado con valor numérico " + n + "?", n*n, [n, 2*n, n+1], "Explicación del generador.");
  }
]);

```

* La respuesta correcta en `S(...)` va siempre en la primera posición del arreglo; el motor se encarga de barajarlas de forma aleatoria en cada partida.

* Los generadores numéricos `r => mc(...)` permiten crear variantes matemáticas infinitas manteniendo la sincronía determinista en partidas multijugador.