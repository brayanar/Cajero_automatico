const primeraPantalla = document.getElementById('inicio')

const maria = document.querySelector("#maria")
maria.addEventListener("click",seleccion)
const javier = document.querySelector("#javier")
javier.addEventListener("click",seleccion)
const sofia = document.querySelector("#sofia")
sofia.addEventListener("click",seleccion)
const andres = document.querySelector("#andres")
andres.addEventListener("click",seleccion)

var personajes = [
    { nombre: "Maria", cuenta: "Corrinte", dinero: 684, clave: 7154 },
    { nombre: "Javier", cuenta: "Vista", dinero: 978, clave: 8520 },
    { nombre: "Sofía", cuenta: "Ahorro", dinero: 598, clave: 3817 },
    { nombre: "Andrés", cuenta: "Débito", dinero: 749, clave: 1863 },
]
