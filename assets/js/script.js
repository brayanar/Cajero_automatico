
var personajes = [
    { nombre: "Maria", cuenta: "corriente", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "vista", dinero: 978, clave: 8520 },
    { nombre: "Emma", cuenta: "ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "debito", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

let personajeSeleccionado;

function seleccionarPersonaje(indice) {
    personajeSeleccionado = personajes[indice]
    saldoPersonaje = personajes[indice].dinero
    console.log(personajeSeleccionado.clave)
    console.log(saldoPersonaje)
}

password.addEventListener('submit', function () {
    let pwd = document.getElementById('pwd').value
    console.log(pwd)

    if (pwd == personajeSeleccionado.clave) {
        alert("Clave correcta")
        password.style.display = "none"
        pantallaCuentas.style.display = ""
    } else {
        alert("intente nuevamente")
    }
})
