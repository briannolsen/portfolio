// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile menu toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// ===== Theme Toggle (Dark/Light) =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

// ===== Language Toggle (EN/ES) =====
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll('[data-en][data-es]');
  elements.forEach((el) => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  langToggle.querySelector('span').textContent = lang === 'en' ? 'ES' : 'EN';
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
}

// Apply saved language on load
if (currentLang !== 'en') {
  applyLanguage(currentLang);
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'es' : 'en');
});
