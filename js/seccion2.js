// Seleccionamos todos los elementos que queremos mover
const titulo = document.querySelector('.tituloJuego');
const parrafo = document.querySelector('.parrafoJuego');
const partes = document.querySelector('.partesJuego');
const figura4 = document.querySelector('.figura4');
const figura5 = document.querySelector('.figura5');



const iframe = document.getElementById('videosec6');
const figura = document.getElementById('figurasec6');
const seccion6 = document.querySelector(".seccion6");

// Función que mueve los elementos al hacer scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // Obtenemos la posición del scroll
 
    titulo.style.transform = `translateY(${scrollPosition * 0.1}px)`; 
    parrafo.style.transform = `translateY(${scrollPosition * 0.1}px)`; 
    partes.style.transform = `translateY(${scrollPosition * 0.1}px)translateX(${scrollPosition * -0.1}px)`; 

    figura4.style.transform = `translateY(${scrollPosition * 0.06}px)translateX(${scrollPosition * -0.03}px)`; 
    figura5.style.transform = `translateY(${scrollPosition * 0.14}px)`; 

    const seccionheight = seccion6.getBoundingClientRect().height;
    const seccionwidth = seccion6.getBoundingClientRect().width;


    iframe.style.transform = `translateY(${scrollPosition * 0.007}px) translateX(${scrollPosition * -0.008}px)`; 
    figura.style.transform = `translateY(${scrollPosition * -0.002}px) translateX(${scrollPosition * 0.004}px)`; 
})





