document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validacion);
});

function validacion(event) {
    event.preventDefault();

    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensaje');

    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let acomp = document.getElementsByName('acompanante').checked;
    let pref = document.getElementsByName('preferencias').checked;

    if(nombre.trim() == '') {
        mensajeError.innerText = 'El campo de nombre no puede estar vacío.';
        return;
    }
    else if(telefono.trim() == '') {
        mensajeError.innerText = 'El campo de teléfono no puede estar vacío.';
        return;
    }
    else if(toString(telefono).length !== 9) {
        mensajeError.innerText = 'El campo de teléfono debe tener 9 carácteres.';
        return;
    }
    else if(!acomp) {
        mensajeError.innerText = 'Debe seleccionar si lleva un acompañante.';
    }
    else {
        let mensaje = "Formulario correcto\nNombre: " + nombre + "\nTeléfono: " + telefono + "\nAcompañante: " + acomp?'Sí':'No' + "\nPreferencias: " + pref + "\n\nLa información será enviada.";
    }
}