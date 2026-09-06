# MaderArte Eco — sitio web

Sitio de una sola página para el proyecto de emprendimiento escolar MaderArte Eco (portacelulares artesanales de madera reciclada).

## Archivos

- `index.html` — estructura y todo el contenido (proyecto, problema, solución, beneficios, 6 productos, proceso, mensaje ambiental, contacto)
- `style.css` — estilos: fondo marrón claro, tarjetas marfil, títulos marrón oscuro, acentos verdes
- `script.js` — menú móvil y año dinámico del footer

## Archivos (actualizado)

- `logo.png` — el logo oficial de la marca (con fondo transparente), usado en el hero, en la barra de navegación y como ícono de la pestaña del navegador.
- `fotos/` — copia de las fotos originales de los 6 modelos, por si luego quieres reemplazarlas o usarlas en otro lugar. **No es necesaria para que la página funcione**: las fotos ya están incrustadas directamente dentro de `index.html`, así que aunque no subas esta carpeta, las imágenes se van a ver igual.

## Pendiente de completar (a propósito no se inventó nada)

No se incluyeron precios, testimonios, certificaciones, cantidades vendidas ni direcciones, porque no fueron proporcionados.

**Número de WhatsApp**: se usó `51999999999` como número de ejemplo. Aparece 9 veces en `index.html` (barra de navegación, inicio, cada una de las 6 tarjetas de producto, y la sección de contacto). Para poner el número real, abre `index.html` y reemplaza `51999999999` por tu número con código de país, sin espacios ni símbolos (ej. `51987654321`). Puedes usar buscar y reemplazar en cualquier editor de texto.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `style.css`, `script.js` y `logo.png` a la raíz del repositorio. (La carpeta `fotos/` es opcional — ver nota arriba.)
   - Desde la web: **Add file → Upload files**, arrastra los archivos y confirma el commit.
   - O con Git:
     ```
     git init
     git add index.html style.css script.js logo.png README.md
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
