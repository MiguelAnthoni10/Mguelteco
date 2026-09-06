# Segunda Vida — sitio web

Sitio de una sola página para vender muebles y objetos hechos con madera reciclada.

## Archivos

- `index.html` — estructura y contenido del sitio
- `style.css` — estilos (colores, tipografía, layout)
- `script.js` — menú móvil y año dinámico del footer

## Antes de publicar, cambia esto

1. **Datos de contacto** (en `index.html`, sección `#contacto`):
   - Número de WhatsApp: reemplaza `51999999999` en el enlace `https://wa.me/...`
   - Número de teléfono: reemplaza en el enlace `tel:+51999999999`
   - Correo: reemplaza `hola@segundavida.pe`
2. **Nombre de marca**: aparece como "Segunda Vida" en el logo, el título de la pestaña y el footer. Cámbialo si prefieres otro nombre.
3. **Modelos y precios**: cada producto está en una tarjeta `<article class="card-producto">` dentro de `#productos`. Edita nombre, descripción y precio; agrega o quita tarjetas copiando el mismo bloque.
4. Si más adelante quieres usar fotos reales en vez de las ilustraciones SVG, reemplaza el contenido de `.card-visual` por una etiqueta `<img>`.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado, pero para Pages gratis debe ser público en la mayoría de cuentas).
2. Sube estos tres archivos (`index.html`, `style.css`, `script.js`) a la raíz del repositorio.
   - Desde la web de GitHub: botón **Add file → Upload files**, arrastra los archivos y confirma el commit.
   - O desde tu computadora con Git:
     ```
     git init
     git add index.html style.css script.js README.md
     git commit -m "Sitio Segunda Vida"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
     git push -u origin main
     ```
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. GitHub te dará una URL como `https://TU-USUARIO.github.io/TU-REPOSITORIO/` en un par de minutos.

## Notas de diseño

- Paleta inspirada en madera quemada y musgo (fondo café oscuro, acentos verde musgo, óxido y dorado).
- Las "vetas" de los productos son SVG generados, no fotos — puedes reemplazarlas por fotos reales de tus piezas cuando las tengas.
- El sitio es responsive: se adapta a celular con un menú hamburguesa.
