# MaderArte Eco — sitio web

Sitio de una sola página para el proyecto de emprendimiento escolar MaderArte Eco (portacelulares artesanales de madera reciclada).

## Archivos

- `index.html` — estructura y todo el contenido (proyecto, problema, solución, beneficios, 6 productos, proceso, mensaje ambiental, contacto)
- `style.css` — estilos: fondo marrón claro, tarjetas marfil, títulos marrón oscuro, acentos verdes
- `script.js` — menú móvil y año dinámico del footer

## Pendiente de completar (a propósito no se inventó nada)

No se incluyeron precios, testimonios, certificaciones, cantidades vendidas, direcciones ni números de teléfono, porque no fueron proporcionados. Cuando los tengan:

1. **Contacto**: en `index.html`, dentro de `<section id="contacto">`, hay un comentario `<!-- ... -->` que muestra cómo agregar un botón de WhatsApp, correo o red social apenas tengan esos datos.
2. **Fotos reales**: cada producto usa una ilustración SVG simple como marcador visual (dentro de `.card-visual`). Cuando tengan fotos de los portacelulares terminados, reemplacen el `<svg>` de cada tarjeta por una etiqueta `<img src="fotos/nombre.jpg" alt="...">`.
3. **Logo**: el logo actual es una ilustración SVG genérica (rombo con vetas). Si ya tienen un logo diseñado, pueden reemplazar el bloque `.logo-svg` en el hero por `<img src="logo.png" alt="Logo MaderArte Eco">`.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `style.css` y `script.js` a la raíz del repositorio.
   - Desde la web: **Add file → Upload files**, arrastra los archivos y confirma el commit.
   - O con Git:
     ```
     git init
     git add index.html style.css script.js README.md
     git commit -m "Sitio MaderArte Eco"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
     git push -u origin main
     ```
3. En el repositorio: **Settings → Pages**.
4. En "Build and deployment" elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. En un par de minutos tendrán una URL como `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

## Notas de diseño

- Paleta cálida (marrón claro, marfil, verde natural) según lo solicitado, con Fraunces para títulos (carácter artesanal) y Nunito para el texto (cercano y juvenil).
- Tarjetas uniformes de 6 columnas de datos: imagen, nombre del modelo, descripción breve, posición (vertical/horizontal).
- Adornos de hoja usados de forma moderada (dos apariciones: hero y sección del mensaje ambiental), para no saturar la página.
- Se conservaron solo los botones necesarios: "Ver modelos" y "Conoce el proceso" en el inicio, sin botones repetidos.
