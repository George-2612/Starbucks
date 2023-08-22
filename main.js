let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    if (menu.classList.contains('bx-x')) {
        menu.classList.remove('bx-x');
    }
    
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
}
