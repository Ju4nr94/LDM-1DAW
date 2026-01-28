document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validacion);
});

function validacion(event) {
    console.log('Validando...');
    event.preventDefault();

    const form = document.getElementById('form');
    const mensajeError = document.getElementById('mensajeError');

    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
    let masc = document.getElementById('masc').checked;
    let fem = document.getElementById('fem').checked;
    let email = document.getElementById('email').value;
    let from = document.getElementById('from').value;
    let des = document.getElementById('des').value;
    let ads = document.getElementById('ads').checked;
    let terms = document.getElementById('terms').checked;

    if(name.trim() === '') {
        mensajeError.innerText = 'El campo de nombre no puede estar vacío.';
        return;
    }
    if(lname.trim() === '') {
        mensajeError.innerText = 'El campo de apellido no puede estar vacío.';
        return;
    }
    if(!masc && !fem) {
        mensajeError.innerText = 'El campo de género no puede estar vacío.';
        return;
    }
    if(email.trim() === '') {
        mensajeError.innerText = 'El campo de email no puede estar vacío.';
        return;
    }
    if(!validarEmail(email)) {
        mensajeError.innerText = 'El formato del email es incorrecto.';
        return;
    }
    if(from === 'null') {
        mensajeError.innerText = 'El campo de población no puede estar vacío.';
        return;
    }
    if(!terms) {
        mensajeError.innerText = 'Debe aceptar los términos y condiciones';
        return;
    }

}
function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }