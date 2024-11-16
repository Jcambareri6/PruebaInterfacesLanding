
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
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.btnMenu');
    const menuItems = document.querySelector('.menuItems');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        menuItems.classList.toggle('open');
    });
});
const imagenes = [
    'img/sector2/FondoDiv.png',
    'img/sector2/fondodiv2.png',
    'img/sector2/fondodiv3.png',
    'img/sector2/fondodiv4.png'
];

// Selección del contenedor
const imgFondo = document.getElementById('img-fondo');

// Índice actual
let indiceActual = 0;

// Función para cambiar el fondo
function cambiarFondo() {
    imgFondo.style.backgroundImage = `url(${imagenes[indiceActual]})`;
    indiceActual = (indiceActual + 1) % imagenes.length; // Ciclar el índice
}

// Cambiar fondo cada 5 segundos
setInterval(cambiarFondo, 3000);

// Establecer el primer fondo
cambiarFondo();