const footer__botonera = document.getElementById("footer__botonera");
footer__botonera.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="botonera.html"></object>
    <script src="js/botonera.js"></script>`
})

const footer__proyectos = document.getElementById("footer__proyectos");
footer__proyectos.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="proyectos.html"></object>`
})

const footer__contacto = document.getElementById("footer__contacto");
footer__contacto.addEventListener("click", ()=> {
    let appdata = document.getElementById("appdata");
    appdata.innerHTML = `<object type="text/html" data="contacto.html"></object>`
})

