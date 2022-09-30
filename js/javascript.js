const footer__botonera = document.querySelector(".nav__home");
footer__botonera.addEventListener("click", ()=> {
    location.reload()
})

const botonera__sobremi = document.getElementById("botonera__sobremi_link");
botonera__sobremi.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="sobremi.html"></object>`
})

const botonera__educacion = document.getElementById("botonera__educacion_link");
botonera__educacion.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="educacion.html"></object>`
})

const botonera__proyectos = document.getElementById("botonera__proyectos_link");
botonera__proyectos.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="proyectos.html"></object>`
})

const botonera__contacto = document.getElementById("botonera__contacto_link");
botonera__contacto.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="contacto.html"></object>`
})