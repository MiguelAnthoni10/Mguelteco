# MaderArte Eco — sitio web

Página de una sola sección para el proyecto de emprendimiento escolar MaderArte Eco (portacelulares artesanales hechos con retazos de madera).

Recorrido: presentación → equipo «Los constructores de sueños» y video → catálogo → contacto por WhatsApp.

## Archivos

- `index.html` — estructura y contenido
- `style.css` — diseño (colores tomados del logo y de las fotos)
- `script.js` — configuración, enlaces de WhatsApp, menú del celular y video
- `logo.png` — logo oficial (versión grande, con fondo transparente), protagonista de la presentación
- `logo-chico.png` — el mismo logo en tamaño pequeño, para el menú y el pie de página
- `favicon.png`, `apple-touch-icon.png` — ícono de la pestaña y del acceso directo en celulares
- `equipo.jpg` — foto del equipo «Los constructores de sueños»
- Fotos de los 10 modelos: `guitarra-eco.jpg`, `hoja-eco.jpg`, `sol-andino.jpg`, `nevado.jpg`, `mirador-eco.jpg`, `guerrero-sechin.jpg`, `laguna-paron.jpg`, `lanzon-chavin.jpg`, `chankillo.jpg`, `tortuga-led.jpg`

Todos van en la raíz del repositorio (sin carpetas).

## Cambiar el número o los mensajes de WhatsApp

Todo está en UN solo lugar: al inicio de `script.js`, en `CONFIG`.

    whatsapp: '51921994355',

Los 13 botones de la página (menú, inicio, los 10 productos y contacto) y el número visible en «Contacto» se generan desde ahí. Cada botón «Consultar» envía el nombre exacto del modelo, tomado del título de su tarjeta.

## Cambiar la foto del equipo

Reemplaza `equipo.jpg` por otra foto con el mismo nombre. Si el archivo no existe, ese espacio se oculta sin dejar imagen rota. Recomendado: horizontal, unos 1200 px de ancho y menos de 300 KB.

## Agregar el video «Conoce MaderArte Eco»

En `script.js`, dentro de `CONFIG.video`, llena UNA opción:

- YouTube (recomendado, no pesa en la página): `youtube: 'https://youtu.be/XXXXXXXXXXX'`
- Archivo propio: sube `video.mp4` y escribe `archivo: 'video.mp4'`. GitHub no acepta archivos de más de 25 MB desde la web.

Opcional: `portada: 'video-portada.jpg'` (imagen que se ve antes de reproducir). El video solo se carga cuando alguien pulsa reproducir: no hay reproducción automática ni sonido al abrir la página. Sin video configurado, el bloque no aparece.

## Código QR

El catálogo está en `#catalogo`. Para que el QR lleve directo a los modelos usa: `https://TU-USUARIO.github.io/TU-REPOSITORIO/#catalogo`

## Publicar en GitHub Pages

1. En el repositorio: **Add file → Upload files**, arrastra todos los archivos y confirma.
2. **Settings → Pages → Deploy from a branch**, rama `main`, carpeta `/ (root)`.
