let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.header__content-close');
hamburger.addEventListener('click', event => {
  hamburger.classList.add("active");
  document.querySelector('.header__content').classList.add("active");
  document.querySelector('body').classList.add("nav-open");
});
hamburgerClose.addEventListener('click', event => {
  hamburger.classList.remove("active");
  document.querySelector('.header__content').classList.remove("active");
  document.querySelector('body').classList.remove("nav-open");
});

