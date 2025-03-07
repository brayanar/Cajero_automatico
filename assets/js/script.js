const primeraPantalla = document.getElementById('inicio')
const formulario = document.getElementById('form')

var personajes = [
    { nombre: "Maria", cuenta: "Corrinte", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "Vista", dinero: 978, clave: 8520 },
    { nombre: "Sofía", cuenta: "Ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "Débito", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

function claveMaria() {
    let i = personajes[0].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(i)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)

        if(pwd == i) {
            alert("Clave correcta")
        } else {
            alert("no")
        }
    })
}

function claveJavier() {
    let i = personajes[1].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(i)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)

        if(pwd == i) {
            alert("Clave correcta")
        } else {
            alert("no")
        }
    })
}
function claveSofia() {
    let i = personajes[2].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(i)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)

        if(pwd == i) {
            alert("Clave correcta")
        } else {
            alert("no")
        }
    })
}
function claveAndres() {
    let i = personajes[3].clave
    primeraPantalla.style.display = "none"
    formulario.style.display = "unset"
    console.log(i)

    formulario.addEventListener('submit', function () {
        let pwd = document.getElementById('pwd').value
        console.log(pwd)

        if(pwd == i) {
            alert("Clave correcta")
        } else {
            alert("no")
        }
    })
}

// Clave de ingreso

// formulario.addEventListener('submit', function () {
//     let pwd = document.getElementById('pwd').value
//     console.log(pwd)
// })