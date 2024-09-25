let btnMenuMob = document.querySelector('#btn-menu-mob');
let line1 = document.querySelector('.line-menu-mob-1');
let line2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');
let menuLinks = document.querySelectorAll('#menu-mobile nav a');
let body = document.querySelector('body');

// Controla o aparecimento do menu mobile
btnMenuMob.addEventListener('click', () => {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('abrir');
    body.classList.toggle('no-overflow');
});

// Fecha o menu mobile ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        line1.classList.remove('ativo1');
        line2.classList.remove('ativo2');
        menuMobile.classList.remove('abrir');
        body.classList.remove('no-overflow');
    });
});
