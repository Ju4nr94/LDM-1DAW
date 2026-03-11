function cambiarFondoRojo() {
    const fondo = document.getElementById("fondo");
    const resultado = document.getElementById("resultado");
    fondo.setAttribute("class", "rojo");
    resultado.innerHTML = "<p>Rojo</p>";
}
function cambiarFondoAzul() {
    const fondo = document.getElementById("fondo");
    const resultado = document.getElementById("resultado");
    fondo.setAttribute("class", "azul");
    resultado.innerHTML = "<p>Azul</p>";
}