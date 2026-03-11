document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validacion);
});

function validacion(event) {
    event.preventDefault();

    const mensaje = document.getElementById('mensaje');

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let entradaGeneral = document.getElementById('general').checked;
    let entradaVip = document.getElementById('vip').checked;
    let actividad = document.getElementsByName('actividad');

    if(nombre.trim() == '') {
        mensaje.innerText = 'El campo de nombre no puede estar vacío.';
        return;
    }
    else if(email.trim() === '') {
        mensaje.innerText = 'El campo de email no puede estar vacío.';
        return;
    }
    else if(!validarEmail(email)) {
        mensaje.innerText = 'El formato del email es incorrecto.';
        return;
    }
    else if(!entradaGeneral && !entradaVip) {
        mensaje.innerText = 'Debe seleccionar su tipo de entrada.';
    }
    else {
        if(entradaGeneral) {
            entrada = "General";
        }
        else {
            entrada = "VIP";
        }
        let salidaCorrecta = "Datos correctos:\nNombre: " + nombre + "\nEmail: "+ email + "\nEntrada: " + entrada;
        if(!actividad.item(0).checked && !actividad.item(1).checked && !actividad.item(2).checked) {
        }
        else if(actividad.item(0).checked) {
            salidaCorrecta = salidaCorrecta + "\nActividades: Taller";
            if(actividad.item(1).checked) {
                salidaCorrecta = salidaCorrecta + ", Networking"
            }
            if(actividad.item(2).checked) {
                    salidaCorrecta = salidaCorrecta + ", Charla"
                }
        }
        else if(actividad.item(1).checked) {
            salidaCorrecta = salidaCorrecta + "\nActividades: Networking"
            if(actividad.item(2).checked) {
                    salidaCorrecta = salidaCorrecta + ", Charla"
                }
        }
        else {
                salidaCorrecta = salidaCorrecta + "\nActividades: Charla"
        }
        
        mensaje.innerText = salidaCorrecta;
    }
}
function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}