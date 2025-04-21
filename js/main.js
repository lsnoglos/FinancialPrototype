document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('nav.drawer');
  document.querySelectorAll('.hamburger').forEach(btn => {
    btn.addEventListener('click', () => drawer.classList.toggle('open'));
  });
});
