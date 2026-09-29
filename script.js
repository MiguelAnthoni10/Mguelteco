/* =========================================================
   CONFIGURACIÓN — el ÚNICO lugar donde se cambian estos datos
   ========================================================= */
const CONFIG = {
  // Número de WhatsApp con código de país (51 = Perú), sin espacios ni símbolos
  whatsapp: '51921994355',

  // Mensaje para los botones generales (menú, inicio, contacto)
  mensajeGeneral: 'Hola, quiero consultar por los portacelulares de MaderArte Eco.',

  // Mensaje para cada producto. {producto} se reemplaza por el nombre exacto del modelo
  mensajeProducto: 'Hola, me interesa el modelo «{producto}» de MaderArte Eco. ¿Me pueden dar más información?',

  // Video «Conoce MaderArte Eco». Llena UNA de las dos opciones:
  video: {
    youtube: '',   // enlace o código de YouTube, ej. 'https://youtu.be/XXXXXXXXXXX'
    archivo: '',   // o un archivo subido al repositorio, ej. 'video.mp4'
    portada: ''    // imagen de portada, ej. 'video-portada.jpg' (opcional con YouTube)
  }
};

/* ========================================================= */

// Al entrar, la página SIEMPRE abre en el inicio.
// Solo el enlace del QR (…/#catalogo) lleva directo al catálogo.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
(function abrirEnInicio() {
  const destinoPermitido = ['#catalogo', '#productos'];
  if (location.hash && !destinoPermitido.includes(location.hash)) {
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo(0, 0);
  } else if (!location.hash) {
    window.scrollTo(0, 0);
  }
})();

// Menú y botones internos: desplazan suave SIN cambiar la dirección de la página
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');       // se lee al pulsar (los de WhatsApp ya no empiezan con #)
    if (!id || !id.startsWith('#')) return;
    const destino = id === '#inicio' ? document.body : document.querySelector(id);
    if (!destino) return;
    e.preventDefault();
    if (id === '#inicio') window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' });
    else destino.scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth', block: 'start' });
  });
});

// Enlaces de WhatsApp
function enlaceWhatsApp(texto) {
  return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(texto);
}

document.querySelectorAll('[data-wa]').forEach((el) => {
  let texto = CONFIG.mensajeGeneral;
  if (el.dataset.wa === 'producto') {
    const card = el.closest('.producto');
    const nombre = card ? card.querySelector('.producto-nombre').textContent.trim() : '';
    if (nombre) {
      texto = CONFIG.mensajeProducto.replace('{producto}', nombre);
      el.setAttribute('aria-label', 'Consultar por WhatsApp sobre el ' + nombre);
    }
  }
  el.href = enlaceWhatsApp(texto);
});

// Número visible (ej. 981 203 987)
const local = CONFIG.whatsapp.replace(/^51/, '');
const visible = local.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
document.querySelectorAll('[data-wa-numero]').forEach((el) => { el.textContent = visible; });

// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  const cerrar = () => {
    menu.classList.remove('abierto');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menú');
  };
  menuBtn.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    menuBtn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrar(); });
}

// Video: solo carga cuando la persona pulsa «reproducir»
(function iniciarVideo() {
  const v = CONFIG.video;
  const bloque = document.getElementById('video');
  const btn = document.getElementById('videoBtn');
  const poster = document.getElementById('videoPoster');
  if (!bloque || !btn) return;

  const m = (v.youtube || '').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/) ||
            (v.youtube || '').match(/^([\w-]{11})$/);
  const idYouTube = m ? m[1] : '';
  if (!idYouTube && !v.archivo) return; // sin video: el bloque sigue oculto

  bloque.hidden = false;
  const portada = v.portada || (idYouTube ? 'https://i.ytimg.com/vi/' + idYouTube + '/hqdefault.jpg' : '');
  if (portada) poster.src = portada; else poster.remove();

  btn.addEventListener('click', () => {
    const marco = btn.parentElement;
    let reproductor;
    if (idYouTube) {
      reproductor = document.createElement('iframe');
      reproductor.src = 'https://www.youtube-nocookie.com/embed/' + idYouTube + '?autoplay=1&rel=0&playsinline=1';
      reproductor.title = 'Conoce MaderArte Eco';
      reproductor.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      reproductor.allowFullscreen = true;
    } else {
      reproductor = document.createElement('video');
      reproductor.src = v.archivo;
      reproductor.controls = true;
      reproductor.playsInline = true;
      reproductor.preload = 'auto';
      if (v.portada) reproductor.poster = v.portada;
    }
    marco.replaceChildren(reproductor);
    if (reproductor.tagName === 'VIDEO') reproductor.play().catch(() => {});
  }, { once: true });
})();

// Año del pie de página
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();
