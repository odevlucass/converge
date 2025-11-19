let mobileMenu = document.getElementById("mobileMenu");
let menu = document.getElementById("menu");

function abrirMenuMobile() {
    menu.classList.toggle("active");
}

mobileMenu.addEventListener('click', abrirMenuMobile);