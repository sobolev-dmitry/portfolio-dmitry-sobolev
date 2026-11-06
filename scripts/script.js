// меню в шапке
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});
