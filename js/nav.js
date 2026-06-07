const nav = document.getElementById('nav');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;
});