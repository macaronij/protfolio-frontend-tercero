const botonera__sobremi = document.getElementById("botonera__sobremi");
botonera__sobremi.addEventListener("click", ()=> {
    let appdata = document.querySelector("body");
    appdata.innerHTML = `<object type="text/html" data="sobremi.html"></object>`
})

const botonera__educacion = document.getElementById("botonera__educacion");
botonera__educacion.addEventListener("click", ()=> {
    let appdata = document.querySelector("body");
    appdata.innerHTML = `<object type="text/html" data="educacion.html"></object>`
})

const botonera__proyectos = document.getElementById("botonera__proyectos");
botonera__proyectos.addEventListener("click", ()=> {
    let appdata = document.querySelector("body");
    appdata.innerHTML = `<object type="text/html" data="proyectos.html"></object>`
})

const botonera__contacto = document.getElementById("botonera__contacto");
botonera__contacto.addEventListener("click", ()=> {
    let appdata = document.querySelector("body");
    appdata.innerHTML = `<object type="text/html" data="contacto.html"></object>`
})