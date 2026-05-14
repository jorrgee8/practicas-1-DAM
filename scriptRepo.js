//github

let contenedor = document.getElementById("contenedor-repos");

    fetch("https://api.github.com/users/jorrgee8/repos")
    .then(respuesta => respuesta.json())
    .then(datosJS =>{
        mostrarRepos(datosJS)
    })

    function mostrarRepos(datos){

    datos.forEach(repo => {
        contenedor.innerHTML += `<div class = "repo">
                                <p><strong>${repo.name}</strong></p>
                                <p>${repo.description}</p>
                                <a href="${repo.html_url}">Ver Repo</a>
                                </div>`
    });
    
}
