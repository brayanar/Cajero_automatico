const primeraPantalla = document.getElementById('inicio')
const password = document.getElementById('form1')
const pantallaCuentas = document.getElementById('ctas')
const pantallaMontos = document.getElementById('montosSugeridos')

var personajes = [
    { nombre: "Emma", cuenta: "corriente", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "vista", dinero: 978, clave: 8520 },
    { nombre: "Sofía", cuenta: "ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "debito", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

let personajeSeleccionado;

function seleccionarPersonaje(indice) {
    personajeSeleccionado = personajes[indice]
    primeraPantalla.style.display = "none"
    password.style.display = "block"
    console.log(personajeSeleccionado.clave)
}

password.addEventListener('submit', function () {
    let pwd = document.getElementById('pwd').value
    console.log(pwd)

    if(pwd == personajeSeleccionado.clave) {
        alert("Clave correcta")
        password.style.display = "none"
        pantallaCuentas.style.display = "block"
        event.preventDefault()
    } else {
        alert("intente nuevamente")
    }
})

let cuentaUsuarioSeleccinada;

function cuentaUsuario(tipoCuenta) {
    cuentaUsuarioSeleccinada = tipoCuenta
    if (cuentaUsuarioSeleccinada === personajeSeleccionado.cuenta) {
        alert("Correcto")
        montoUsuario()
        pantallaMontos.style.display="block"
        pantallaCuentas.style.display = "none"
    } else {
        alert("No")
    }
}

function consultaSaldo() {
    pantallaCuentas.style.display="none"
    let saldo = document.getElementById("saldo")
    saldo.textContent = personajeSeleccionado.nombre + " tiene " + personajeSeleccionado.dinero + " dolares de saldo"
    saldo.style.display="block"
}

let montoUsuarioSeleccionado ;

function montoUsuario (indice) {
    montoUsuarioSeleccionado = indice
    console.log(indice)
}