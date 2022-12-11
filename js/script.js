const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', (e)=>{
   menu.classList.toggle('menu--active');
   burger.classList.toggle('burger--active');
})