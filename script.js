// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('abierto');
    navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('abierto');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año dinámico en el footer
const anioEl = document.getElementById('anio');
if (anioEl) {
  anioEl.textContent = new Date().getFullYear();
}
