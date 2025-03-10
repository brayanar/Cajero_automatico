const primeraPantalla = document.getElementById('inicio')
const formulario = document.getElementById('form')
var claveacceso 
var pwd

var personajes = [
    { nombre: "Maria", cuenta: "Corrinte", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "Vista", dinero: 978, clave: 8520 },
    { nombre: "Sofía", cuenta: "Ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "Débito", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

function claveMaria() {
    let claveacceso = personajes[0].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(claveacceso)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)
    })
}

function claveJavier() {
    let claveacceso = personajes[1].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(claveacceso)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)
    })
}
function claveSofia() {
    let claveacceso = personajes[2].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(claveacceso)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)
    })
}
function claveAndres() {
    let claveacceso = personajes[3].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(claveacceso)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)
    })
}

// Clave de ingreso

if(pwd == claveacceso) {
    alert("Clave correcta")
} else {
    alert("no")
}
