// Toggle side menu
const sideMenu = document.getElementById('sideMenu');
const backdrop = document.getElementById('backdrop');
const btnOpen = document.getElementById('openMenu');
const btnClose = document.getElementById('closeMenu');

if (btnOpen) btnOpen.addEventListener('click', () => {
  sideMenu.classList.add('open');
  backdrop.classList.add('show');
});
if (btnClose) btnClose.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  backdrop.classList.remove('show');
});
if (backdrop) backdrop.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  backdrop.classList.remove('show');
});

// Update year in footer (home)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// IntersectionObserver for fade/tenggelam
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // "tenggelam" saat keluar
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section').forEach(sec => observer.observe(sec));