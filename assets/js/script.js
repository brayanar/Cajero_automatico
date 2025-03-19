const pSeleccionPersonaje = document.getElementById('pSeleccionPersonaje')
const pContraseña = document.getElementById('pContraseña')
const pPrincipalesBtns = document.getElementById('pPrincipalesBtns')
const pConsultarSaldo = document.getElementById('pConsultarSaldo')
const pIngresaMonto = document.getElementById('pIngresaMonto')
const pRetirarMonto = document.getElementById('pRetirarMonto')

const formIngreso = document.getElementById('formIngresarMonto')
const formEgreso = document.getElementById('formRetirarMonto')

let saldoPersonaje
let nuevoSaldoPersonaje

let saldoIngresado = document.getElementById('formIngresarMonto1')
let saldoRetirado = document.getElementById('formRetirarMonto1')

var personajes = [
    { nombre: "Maria", dinero: 684, clave: 7154 },
    { nombre: "Javier", dinero: 978, clave: 8520 },
    { nombre: "Emma", dinero: 598, clave: 3817 },
    { nombre: "Andrés", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

let personajeSeleccionado;

function seleccionarPersonaje(indice) {
    pContraseña.style.display = ""
    pSeleccionPersonaje.style.display = "none"
    personajeSeleccionado = personajes[indice]
    saldoPersonaje = personajes[indice].dinero
    alert("La clave de ingreso es: " + personajeSeleccionado.clave)
    console.log(personajeSeleccionado.clave)
}

// Ingreso de Clave

function password() {
    event.preventDefault()
    let pwd = document.getElementById('pwd').value

    if (pwd == personajeSeleccionado.clave) {
        alert("Clave correcta")
        pContraseña.style.display = "none"
        pPrincipalesBtns.style.display = ""
        console.log(saldoPersonaje)
    } else {
        alert("intente nuevamente")
    }
}

// Funcion de consulta de saldo

function consultarSaldo() {
    pPrincipalesBtns.style.display = "none"
    pConsultarSaldo.style.display = ""
    document.getElementById('saldo').textContent = "El saldo actual de la cuenta es " + saldoPersonaje;
    console.log(saldoPersonaje)

}

// Funcion de Ingresar monto

function ingresarMonto() {
    pIngresaMonto.style.display = ""
    formIngreso.style.display = ""
    pPrincipalesBtns.style.display = "none"
    console.log(saldoPersonaje)
}

saldoIngresado.addEventListener('submit', function () {
    event.preventDefault()
    let montoIngresado = document.getElementById('pwd2').value
    console.log(montoIngresado)
    let saldoProvisional = Number(saldoPersonaje) + Number(montoIngresado)

    if (saldoProvisional < 990) {
        let dineroIngresado = montoIngresado
        nuevoSaldoPersonaje = Number(saldoPersonaje) + Number(montoIngresado)
        document.getElementById('saldoIngresado').textContent = "El saldo ingresado de la cuenta es " + dineroIngresado
        document.getElementById('saldoTotalIngreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
        formIngreso.style.display = "none"
    } else if (saldoProvisional > 990) {
        alert("La cuenta no admite mas de 990, debe ingresar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    }
})

// Funcion de retirar de saldo

function retirarMonto() {
    pRetirarMonto.style.display = ""
    formEgreso.style.display = ""
    pPrincipalesBtns.style.display = "none"
}

saldoRetirado.addEventListener('submit', function () {
    event.preventDefault()
    let montoRetirado = document.getElementById('pwd3').value
    console.log(montoRetirado)
    let saldoProvisional = Number(saldoPersonaje) - Number(montoRetirado) 


    if (saldoProvisional > 10) {
        let dineroRetirado = montoRetirado
        nuevoSaldoPersonaje = Number(saldoPersonaje) - Number(dineroRetirado)
        document.getElementById('saldoRetirado').textContent = "El saldo retirado de la cuenta es " + dineroRetirado
        document.getElementById('saldoTotalEgreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
        formEgreso.style.display = "none"
    } else if (saldoProvisional < 10) {
        alert("La cuenta no admite menos de 10, debe retirar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    }
})

// Boton para poder navegar entre pantallas

function volverPantallaPrincipal(indice) {
    document.getElementById('saldo').textContent = ""
    document.getElementById('saldoRetirado').textContent = ""
    document.getElementById('saldoTotalEgreso').textContent = ""
    document.getElementById('saldoIngresado').textContent = ""
    document.getElementById('saldoTotalIngreso').textContent = ""

    if ([indice] == 0) {
        saldoPersonaje = nuevoSaldoPersonaje
        pConsultarSaldo.style.display = "none"
        pPrincipalesBtns.style.display = ""
    } else if ([indice] == 1) {
        saldoPersonaje = nuevoSaldoPersonaje
        pIngresaMonto.style.display = "none"
        pPrincipalesBtns.style.display = ""
    } else if ([indice] == 2) {
        saldoPersonaje = nuevoSaldoPersonaje
        pRetirarMonto.style.display = "none"
        pPrincipalesBtns.style.display = ""
    } else {
        alert("algo anda mal")
    }
}
