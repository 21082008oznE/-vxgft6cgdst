const numero = document.getElementById("numero");
const cabecalho = document.querySelector("h2");
cabecalho.style.fontSize = numero.value + "px";
numero.addEventListener("input", () => {
    cabecalho.style.fontSize = numero.value + "px"

});