// ── Vanilla Perfected — script.js ──

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll-reveal for mod cards
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.4s ease, transform 0.4s ease; }
    .reveal.in { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const items = document.querySelectorAll('.mod-card, .dl-btn, .about-inner');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  items.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}