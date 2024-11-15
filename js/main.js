
const header = document.getElementById("header1")
const logoHeader= document.getElementById("fotoLogo")
const contLogo = document.getElementById("")
let anchoInicial = 560;
let altoInicial = 320;
let anchoFinal=150;
let alturaFinal=86;
let scrollLimite= 600;
window.addEventListener("scroll", function() {
    const scrollTop = Math.min(window.scrollY, scrollLimite);

    
    const anchoActual = anchoInicial - (anchoInicial - anchoFinal) * (scrollTop / scrollLimite);

    logoHeader.style.width = `${anchoActual}px`; 
    

});