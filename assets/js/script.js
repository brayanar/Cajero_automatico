const primeraPantalla = document.getElementById('inicio')
const password = document.getElementById('form1')
const pantallaCuentas = document.getElementById('pantallaCuentas')
const pantallaMontos = document.getElementById('montosSugeridos')
const pantallaOtroMonto = document.getElementById('pantallaRetiro')
const pantallaInputRetiro = document.getElementById('inputRetiro')
const pantallaConfirmarMonto = document.getElementById('confirmar1')
const pantallaFinal = document.getElementById('pantallaFinal')
var saldoPersonaje
var valor

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
    primeraPantalla.style.display = "none"
    password.style.display = ""
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
        event.preventDefault()
    } else {
        alert("intente nuevamente")
    }
})

/* let cuentaUsuarioSeleccinada;

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
} */

function consultaSaldo() {
    pantallaCuentas.style.display = "none"
    let saldo = document.getElementById("saldo")
    saldo.textContent = personajeSeleccionado.nombre + " tiene " + personajeSeleccionado.dinero + " dolares de saldo"
    saldo.style.display = "block"
}

let montoUsuarioSeleccionado;
let saldoPersonajeBtns;

function montoUsuario(indice) {
    montoUsuarioSeleccionado = Number(indice)
    console.log(indice)
    saldoPersonajeBtns = saldoPersonaje - montoUsuarioSeleccionado
    console.log(saldoPersonajeBtns)
    pantallaMontos.style.display = "none"
    pantallaFinalF2()
}

function otroMonto() {
    pantallaMontos.style.display = "none"
    enviarValor()
}

function enviarValor() {
    pantallaInputRetiro.style.display = ""
    pantallaOtroMonto.style.display = ""
    pantallaFinal.style.display = "none"
    valor = document.getElementById("valorInput").value;

    if (valor.trim() !== "") {
        pantallaInputRetiro.style.display = "none"
        document.getElementById("valorEnviado").textContent = "Confirmar el retiro de: " + valor + " dolares";
        document.getElementById("valorEnviado").style.display = "block";
        document.getElementById("valorInput").value = "";
        console.log(valor)
        pantallaConfirmarMonto.style.display = ""
        event.preventDefault()
    } else {
        alert("Por favor, ingrese un valor.");
    }
}

function retirarMonto() {
    saldoPersonaje = saldoPersonaje - valor
    console.log(saldoPersonaje)
    pantallaFinalF()
    pantallaConfirmarMonto.style.display = "none"
}

function pantallaFinalF() {
    pantallaConfirmarMonto.style.display = "none"
    pantallaFinal.style.display = ""
    document.getElementById('transaccion').textContent = "Haz retirado exitosamente " + valor
}

function pantallaFinalF2() {
    pantallaConfirmarMonto.style.display = "none"
    pantallaFinal.style.display = ""
    document.getElementById('transaccion').textContent = "Haz retirado exitosamente " + montoUsuarioSeleccionado
}
