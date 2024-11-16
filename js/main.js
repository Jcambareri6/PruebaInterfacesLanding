// Logo Header
const header = document.getElementById("header1");
const logoHeader = document.getElementById("fotoLogo");

let anchoInicial = 560;
let altoInicial = 320;
let anchoFinal = 150;
let alturaFinal = 86;
let scrollLimite = 300;

window.addEventListener("scroll", function () {
    const scrollTop = Math.min(window.scrollY, scrollLimite);

    // Calcular el tamaño actual del logo en función del scroll
    const anchoActual = anchoInicial - (anchoInicial - anchoFinal) * (scrollTop / scrollLimite);
    const topActual = scrollTop * (140 / scrollLimite); // Ajusta la proporción según tu diseño

    // Aplicar los nuevos valores al logo
    logoHeader.style.width = `${anchoActual}px`;
    logoHeader.style.transform = `translateY(-${topActual}px)`;

    // Asegurar que se agregue la clase al header
    if (window.scrollY >= scrollLimite) {
        header.classList.add('headerScroll');
    } else {
        header.classList.remove('headerScroll');
    }
});

// Menú (Sección 2)
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.btnMenu');
    const menuItems = document.querySelector('.menuItems');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        menuItems.classList.toggle('open');
    });
});

// Fondo que cambia automáticamente (Sección 2)
const imagenes = [
    'img/sector2/FondoDiv.png',
    'img/sector2/fondodiv2.png',
    'img/sector2/fondodiv3.png',
    'img/sector2/fondodiv4.png'
];

const imgFondo = document.getElementById('img-fondo');
let indiceActual = 0;

function cambiarFondo() {
    imgFondo.style.backgroundImage = `url(${imagenes[indiceActual]})`;
    indiceActual = (indiceActual + 1) % imagenes.length; // Ciclar el índice
}

setInterval(cambiarFondo, 3000);
cambiarFondo();

// Sección 5: Cambio de imágenes en scroll sincronizado con textos
const imag = document.querySelectorAll('.img-sec4 img');
const textos = document.querySelectorAll('.textos > div');

// Función para cambiar la imagen activa
function cambiarImagenActiva(index) {
    imag.forEach((img, i) => {
        if (i === index) {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        } else {
            img.style.opacity = '0';
            img.style.transform = 'scale(1.1)';
        }
    });
}

// Detectar el texto visible en el viewport
window.addEventListener('scroll', () => {
    textos.forEach((texto, index) => {
        const rect = texto.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;

        if (visible) {
            cambiarImagenActiva(index);
        }
    });
});

// Inicializar la primera imagen como activa
cambiarImagenActiva(0);
