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