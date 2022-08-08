const navButn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav'); 
navButn.addEventListener('click', function (){
    mobileNav.classList.toggle('mobile-nav-active');
    navButn.classList.toggle('nav-button-close'); 
})