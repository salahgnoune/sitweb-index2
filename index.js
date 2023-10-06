const close = document.getElementById('close');
const navbar = document.getElementById('navbarr');
const menu = document.getElementById('menuu');


if(menu){
    menu.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}