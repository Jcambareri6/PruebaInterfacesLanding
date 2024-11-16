// Seleccionamos todos los elementos que queremos mover
const titulo = document.querySelector('.tituloJuego');
const parrafo = document.querySelector('.parrafoJuego');
const partes = document.querySelector('.partesJuego');
const figura4 = document.querySelector('.figura4');
const figura5 = document.querySelector('.figura5');

// Función que mueve los elementos al hacer scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // Obtenemos la posición del scroll
 
    titulo.style.transform = `translateY(${scrollPosition * 0.13}px)`; 
    parrafo.style.transform = `translateY(${scrollPosition * 0.13}px)`; 
    partes.style.transform = `translateY(${scrollPosition * 0.12}px)`; 

    figura4.style.transform = `translateY(${scrollPosition * 0.3}px)`; 
    figura4.style.transform = `translateX(${scrollPosition * -0.03}px)`; 
    figura5.style.transform = `translateY(${scrollPosition * 0.3}px)`; 
    figura5.style.transform = `translateX(${scrollPosition * 0.02}px)`; 
})
