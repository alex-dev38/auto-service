const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");
const body = document.body;
hamburger.addEventListener('click', () => {
menu.classList.toggle('header__menu--active');
hamburger.classList.toggle('header__hamburger--active');
body.classList.toggle('no-scroll');
console.log('Кнопка нажата!');
});