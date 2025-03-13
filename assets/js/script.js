const primeraPantalla = document.getElementById('inicio')
const password = document.getElementById('form')

var personajes = [
    { nombre: "Maria", cuenta: "Corrinte", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "Vista", dinero: 978, clave: 8520 },
    { nombre: "Sofía", cuenta: "Ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "Débito", dinero: 749, clave: 1863 },
]

// Seleccion de personaje

let personajeSeleccionado;

function seleccionarPersonaje(indice) {
    personajeSeleccionado = personajes[indice]
    primeraPantalla.style.display = "none"
    password.style.display = "unset"
    console.log(personajeSeleccionado.clave)
}

password.addEventListener('submit', function () {
    let pwd = document.getElementById('pwd').value
    console.log(pwd)

    if(pwd == personajeSeleccionado.clave) {
        alert("Clave correcta")
    } else {
        alert("no")
    }
})