const btnAbrir = document.querySelector("#abrir");
const btnCerrar = document.querySelector("#cerrar");



btnAbrir.addEventListener("click", () => {
    const ElementoSuperior =  document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");
    const ElementoMensaje =  document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
h1.style.transform = "translateY(-120px)";
p.style.transform = "translateY(-120px)";
h1.style.transition = "transoform 0.65s ease-in-out";
p.style.transition = "transoform 0.65s ease-in-out";
const IconoCorazon = document.querySelector(".bxs-heart");
IconoCorazon.classList.add("bxs-rotada");
ElementoSuperior.style.zIndex = -1;

setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
     const ElementoMensaje =  document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
}, 700);


});

//cerrar//
btnCerrar.addEventListener("click", () => {
    const ElementoSuperior =  document.querySelector(".superior");
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");



  


setTimeout(() => {
 const h1 = document.querySelector("h1");
const p = document.querySelector("p");
h1.style.transform = "translateY(0px)";
p.style.transform = "translateY(0px)";

const IconoCorazon = document.querySelector(".bxs-heart");
IconoCorazon.classList.remove("bxs-rotada");

ElementoSuperior.style.zIndex = 0;
ElementoSuperior.classList.remove("abrir-superior");
}, 700);
});