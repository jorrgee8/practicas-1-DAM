let boton = document.getElementById("modo");
let temaGuardado = localStorage.getItem("tema")


if (temaGuardado === "oscuro") {

    document.body.classList.add("modo-oscuro");

}

boton.addEventListener('click', () =>{

    document.body.classList.toggle("modo-oscuro")

    if (document.body.classList.contains("modo-oscuro")){
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
})

/* Estudios */

let botonEstudios = document.getElementById("agregar-estudio");
let modal = document.getElementById("modal");
let cerrarModal = document.getElementById("cerrar-modal");

let agregarEstudio = document.getElementById("agregar");

//info

let estudioAgregado = document.getElementById("estudio-agregado")

let lista = document.getElementById("estudios");


botonEstudios.addEventListener('click', () =>{
    modal.style.display = "flex";
})

cerrarModal.addEventListener('click', () =>{
    modal.style.display = "none";
})

agregarEstudio.addEventListener('click', (e) => {

    e.preventDefault();

    let titulo = document.getElementById("titulo").value;
    let contenido = document.getElementById("info").value;

    let li = document.createElement('li');

        li.innerHTML = `<strong>${titulo}</strong><br>${contenido}`;

        lista.appendChild(li);

        estudioAgregado.innerHTML += `El estudio <strong>${titulo}</strong> se ha agregado <br>`

        document.getElementById("formulario-estudio").reset()

})