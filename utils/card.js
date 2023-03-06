export const card = (pelicula) => {
    let container_card = document.createElement("div")
    container_card.className="card my-3"
    container_card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${pelicula.titulo}</h5>
            <p class="card-text">${pelicula.director}</p>
            <a href="#" class="btn btn-primary">${pelicula.genero}</a>
        </div>   
    `
    return container_card.outerHTML;
}