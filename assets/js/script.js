const primeraPantalla = document.getElementById('inicio')
const password = document.getElementById('form1')
const pantallaCuentas = document.getElementById('ctas')
const pantallaMontos = document.getElementById('montosSugeridos')
const pantallaOtroMonto = document.getElementById('pantallaMontoD')
const pantallaConfirmarMonto = document.getElementById('confirmar1')
var saldoPersonaje
var valor

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
    saldoPersonaje = personajes[indice].dinero
    console.log(personajeSeleccionado.clave)
}

password.addEventListener('submit', function () {
    let pwd = document.getElementById('pwd').value
    console.log(pwd)

    if (pwd == personajeSeleccionado.clave) {
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
        pantallaMontos.style.display = "block"
        pantallaCuentas.style.display = "none"
    } else {
        alert("No")
    }
}

function consultaSaldo() {
    pantallaCuentas.style.display = "none"
    let saldo = document.getElementById("saldo")
    saldo.textContent = personajeSeleccionado.nombre + " tiene " + personajeSeleccionado.dinero + " dolares de saldo"
    saldo.style.display = "block"
}

let montoUsuarioSeleccionado;

function montoUsuario(indice) {
    montoUsuarioSeleccionado = indice
    console.log(indice)
    console.log(saldoPersonaje)
}

function otroMonto (){
    pantallaMontos.style.display="none"
    enviarValor()
}

function enviarValor() {
    pantallaOtroMonto.style.display="block"
    valor = document.getElementById("valorInput").value;

    if (valor.trim() !== "") {
        document.getElementById("valorEnviado").textContent = "Confirmar el retiro de: " + valor + " dolares";
        document.getElementById("valorEnviado").style.display = "block";
        document.getElementById("valorInput").value = "";
        console.log(valor)
        pantallaConfirmarMonto.style.display="block"
    } else {
        alert("Por favor, ingrese un valor.");
    }
}

function retirarMonto() {
    saldoPersonaje = saldoPersonaje-valor
    console.log(saldoPersonaje)
}