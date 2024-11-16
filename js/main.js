
const header = document.getElementById("header1")
const logoHeader = document.getElementById("fotoLogo")
const contLogo = document.getElementById("")
let anchoInicial = 560;
let altoInicial = 320;
let anchoFinal = 150;
let alturaFinal = 86;
let scrollLimite = 300;
window.addEventListener("scroll", function () {
    const scrollTop = Math.min(window.scrollY, scrollLimite);

    // Calcular el tamaño actual del logo en función del scroll
    const anchoActual = anchoInicial - (anchoInicial - anchoFinal) * (scrollTop / scrollLimite);

    // Calcular el desplazamiento hacia arriba del logo
    const topActual = Math.min(scrollTop, 140); // El logo no sube más de 50px, ajusta este valor como desees

    // Aplicar los nuevos valores al logo
    logoHeader.style.width = `${anchoActual}px`;
    logoHeader.style.transform = `translateY(-${topActual}px)`;


    if (window.scrollY >= scrollLimite) {


        // Asegurarte de que tenga 'headerScroll'
        header.classList.add('headerScroll');
    }
});
const menuButton = document.querySelector('.btnMenu');
menuButton.addEventListener('click', () => {
    console.log('Botón de menú clicado'); // Para verificar si se registra el clic
    menuButton.classList.toggle('open');
});