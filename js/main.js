
const header = document.getElementById("header1")
const logoHeader = document.getElementById("fotoLogo")
const contLogo = document.getElementById("")
let anchoInicial = 560;
let altoInicial = 320;
let anchoFinal=150;
let alturaFinal=86;
let scrollLimite= 200;
window.addEventListener("scroll", function() {
    const scrollEvento = window.scrollY;
    // punto 4 
    animarHeader(scrollEvento)
    //parallax seccion 1 
    animarParallaxSeccion1(scrollEvento)

});
function animarHeader(scrollY){
    let scrollTop = Math.min(scrollY, scrollLimite);
    let anchoActual = anchoInicial - (anchoInicial - anchoFinal) * (scrollTop / scrollLimite); // calcula porc para achicar img
    let topActual = Math.min(scrollTop, 150); 

    logoHeader.style.width = `${anchoActual}px`;
    logoHeader.style.transform = `translateY(-${topActual}px)`;
    if(window.scrollY>=scrollLimite){
        header.classList.add('headerScroll');
    }
}
 function animarParallaxSeccion1(scrollY){
    let elementosPrimerPlano = document.querySelectorAll("[data-primerPlano]");
    let elementosFondoIntermedio = document.querySelectorAll("[data-fondoIntermedio]");
    let elementosFondo = document.querySelectorAll("[data-planoLejano]");
    let initScroll =170
    let limitScroll= 270
    let rangoScroll = limitScroll-initScroll;
    let maxMovimiento= 0

    elementosPrimerPlano.forEach(elementoPrimerPlano =>{
        mover(scrollY,initScroll,limitScroll,elementoPrimerPlano,"data-primerPlano");
    })
    elementosFondoIntermedio.forEach(elemento =>{
        console.log(elemento)
        mover(scrollY,initScroll,limitScroll,elemento, "data-fondoIntermedio");
    })
    elementosFondo.forEach(elemento =>{
        console.log(elemento)
        mover(scrollY,initScroll,limitScroll,elemento, "data-planoLejano");
    })
}
 function mover(scrollY,initScroll,limitScroll,elemento, data){
   
    if (scrollY >= initScroll && scrollY <= limitScroll) {
        let velocidad = parseFloat(elemento.getAttribute(data));
        let movimiento =  (scrollY-initScroll)*velocidad
        elemento.style.transform = `translateY(${movimiento}px)`;
 
     }
}
