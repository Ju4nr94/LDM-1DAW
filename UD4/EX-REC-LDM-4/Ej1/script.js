function cambiarEstiloHTML() {
    const info = document.getElementById("info");
    info.innerHTML = '<p id="parrafo">HTML es el lenguaje de marcado utilizado para estructurar páginas web.</p>';
    const parrafo = document.getElementById("parrafo");
    parrafo.setAttribute("class", "html")
}
function cambiarEstiloCSS() {
    const info = document.getElementById("info");
    info.innerHTML = '<p id="parrafo">CSS se utiliza para definir el estilo y diseño de las páginas web.</p>';
    const parrafo = document.getElementById("parrafo");
    parrafo.setAttribute("class", "css")
}
function cambiarEstiloJS() {
    const info = document.getElementById("info");
    info.innerHTML = '<p id="parrafo">JavaScript permite añadir interactividad y comportamiento dinámico a las páginas web.</p>';
    const parrafo = document.getElementById("parrafo");
    parrafo.setAttribute("class", "javascript")
}