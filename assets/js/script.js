const pSeleccionPersonaje = document.getElementById('pSeleccionPersonaje')
const pContraseña = document.getElementById('pContraseña')
const pPrincipalesBtns = document.getElementById('pPrincipalesBtns')
const pConsultarSaldo = document.getElementById('pConsultarSaldo')
const pIngresaMonto = document.getElementById('pIngresaMonto')
const pRetirarMonto = document.getElementById('pRetirarMonto')

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
    console.log(personajeSeleccionado.clave)
}

let saldoPersonaje
let nuevoSaldoPersonaje

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

function consultarSaldo() {
    pPrincipalesBtns.style.display = "none"
    pConsultarSaldo.style.display = ""
    document.getElementById('saldo').textContent = "El saldo actual de la cuenta es " + saldoPersonaje
    console.log(saldoPersonaje)
}

function ingresarMonto() {
    pIngresaMonto.style.display = ""
    pPrincipalesBtns.style.display = "none"
    console.log(saldoPersonaje)
}

saldoIngresado.addEventListener('submit', function () {
    event.preventDefault()
    let dineroIngresado = document.getElementById('pwd2').value
    console.log(dineroIngresado)
    console.log(saldoPersonaje)
    nuevoSaldoPersonaje = saldoPersonaje + dineroIngresado

    if (nuevoSaldoPersonaje < 990) {
        document.getElementById('saldoIngresado').textContent = "El saldo ingresado a la cuenta es " + dineroIngresado
        document.getElementById('saldoTotalIngreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
    } else if (nuevoSaldoPersonaje > 990) {
        alert("La cuenta no admite mas de 990, debe ingresar un valor menor")
    } else if ((saldoPersonaje)) {
        alert("Ta malo")
    } else {
        alert("Debe ingresar solo numeros")
    }
})

function retirarMonto() {
    pRetirarMonto.style.display = ""
    pPrincipalesBtns.style.display = "none"
}

saldoRetirado.addEventListener('submit', function () {
    event.preventDefault()
    let dineroRetirado = document.getElementById('pwd3').value
    console.log(dineroRetirado)
    
    nuevoSaldoPersonaje = Number(saldoPersonaje) - Number(dineroRetirado)

    if (nuevoSaldoPersonaje > 10) {
        document.getElementById('saldoRetirado').textContent = "El saldo retirado de la cuenta es " + dineroRetirado
        document.getElementById('saldoTotalEgreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
    } else if (nuevoSaldoPersonaje < 10) {
        alert("La cuenta no admite menos de 10, debe retirar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    }
})


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
