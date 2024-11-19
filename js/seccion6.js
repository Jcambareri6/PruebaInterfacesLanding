// Seleccionamos todos los elementos que queremos mover
const iframe = document.getElementById('videosec6');
const figura = document.getElementById('figurasec6');

// Función que mueve los elementos al hacer scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // Obtenemos la posición del scroll

    iframe.style.transform = `translateY(${scrollPosition * 0.015}px)translateX(${scrollPosition * -0.008}px)`; 
    figura.style.transform = `translateY(${scrollPosition * -0.010}px)translateX(${scrollPosition * 0.004}px)`; 
})