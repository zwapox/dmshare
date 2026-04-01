// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// === HAMBURGER MENU ===
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// === SCROLL REVEAL ANIMATIONS ===
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// === HIGHLIGHT TODAY IN OPENING HOURS ===
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const today = days[new Date().getDay()];
document.querySelectorAll('.horaires-table tr').forEach(row => {
  if (row.cells[0] && row.cells[0].textContent.trim() === today) {
    row.classList.add('today');
  }
});

// === MENU TABS ===
document.querySelectorAll('.menu-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    const el = document.getElementById('cat-' + cat);
    if (el) {
      el.classList.add('active');
      el.classList.add('visible');
    }
    btn.classList.add('active');
  });
});

// === COMMANDER SCROLL CENTER ===
document.querySelectorAll('a[href="#commander"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.getElementById('commander');
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - (window.innerHeight - rect.height) / 2;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  });
});
