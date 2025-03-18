const pSeleccionPersonaje = document.getElementById('pSeleccionPersonaje') 
const pContraseña = document.getElementById('pContraseña')
const pPrincipalesBtns = document.getElementById('pPrincipalesBtns')
const pConsultarSaldo = document.getElementById('pConsultarSaldo')
const pIngresaMonto = document.getElementById('pIngresaMonto')
const pRetirarMonto = document.getElementById('pRetirarMonto')

let saldoIngresado = document.getElementById('formIngresarMonto1')
let saldoRetirado = document.getElementById('formRetirarMonto1')

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
    event.preventDefault()
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

saldoIngresado.addEventListener('submit', function (){
    event.preventDefault()
    let dineroIngresado = document.getElementById('pwd2').value
    console.log(dineroIngresado)

    let nuevoSaldoPersonaje = Number(saldoPersonaje)  + Number(dineroIngresado) 

    if (nuevoSaldoPersonaje < 990) {
        document.getElementById('saldoIngresado').textContent = "El saldo ingresado a la cuenta es " + dineroIngresado
        document.getElementById('saldoTotalIngreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
    } else if(nuevoSaldoPersonaje > 990) {
        alert("La cuenta no admite mas de 990, debe ingresar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    } 
})

function retirarMonto() {
    pRetirarMonto.style.display = ""    
    pPrincipalesBtns.style.display = "none"
}

saldoRetirado.addEventListener('submit', function (){
    event.preventDefault()
    let dineroRetirado = document.getElementById('pwd3').value
    console.log(dineroRetirado)

    let nuevoSaldoPersonaje = Number(saldoPersonaje)  - Number(dineroRetirado) 

    if (nuevoSaldoPersonaje > 10) {
        document.getElementById('saldoRetirado').textContent = "El saldo retirado de la cuenta es " + dineroRetirado
        document.getElementById('saldoTotalEgreso').textContent = "El saldo actual de la cuenta es " + nuevoSaldoPersonaje
    } else if(nuevoSaldoPersonaje < 10) {
        alert("La cuenta no admite menos de 10, debe retirar un valor menor")
    } else {
        alert("Debe ingresar solo numeros")
    } 
})
