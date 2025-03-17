const pSeleccionPersonaje = document.getElementById('pSeleccionPersonaje') 
const pContraseña = document.getElementById('pContraseña')
const pPrincipalesBtns = document.getElementById('pPrincipalesBtns')
const pConsultarSaldo = document.getElementById('pConsultarSaldo')
const pIngresaMonto = document.getElementById('pIngresaMonto')
const pRetirarMonto = document.getElementById('pRetirarMonto')

let saldoPersonaje

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
    console.log(saldoPersonaje)
}

function password() {
    let pwd = document.getElementById('pwd').value
    console.log(pwd)

    if (pwd == personajeSeleccionado.clave) {
        alert("Clave correcta")
        pContraseña.style.display = "none"
        pPrincipalesBtns.style.display = ""
    } else {
        alert("intente nuevamente")
    }
}

function consultarSaldo() {
    pPrincipalesBtns.style.display = "none"
    pConsultarSaldo.style.display = ""
    document.getElementById('saldo').textContent = "El saldo actual de la cuenta es " + saldoPersonaje
}

function ingresarMonto() {
    pIngresaMonto.style.display = ""
    pPrincipalesBtns.style.display = "none"
}

function confirmarMonto() {
    if (saldoPersonaje += montoIngresado.value < 990) {
        event.preventDefault()
        let montoIngresado = document.getElementById('monto').value

        console.log(montoIngresado)

        saldoPersonaje += montoIngresado.value;

        document.getElementById('saldoIngresado').textContent = "El saldo ingresado a la cuenta es " + montoIngresado

        document.getElementById('saldoTotal').textContent = "El saldo actual de la cuenta es " + saldoPersonaje

    } else if(saldoPersonaje += montoIngresado.value > 990) {
        alert("La cuenta no admite mas de 990, debe ingresar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    } 
}