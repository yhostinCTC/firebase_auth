export const card = (pelicula, id) => {
    let container_card = document.createElement("div")
    container_card.className="card my-3"
    container_card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${pelicula.titulo}</h5>
            <p class="card-text">${pelicula.director}</p>
            <p class="card-text">${pelicula.genero}</p>
            <div class="row">
                <div class="col-2">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${id}">
                    Delete
                    </button>
                </div>    
                <div class="col-2">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal${id}">
                    Edit
                    </button>
                </div>
            </div>

        </div>    
    `
    let deleteModal = `
        <!-- Delete Modal -->
        <div class="modal fade" id="deleteModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">¿Estas seguro de realizar la accion de borrado?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" data-id=${id}>Eliminar</button>
            </div>
            </div>
        </div>
        </div>
    `

    let editModal = `
    <!-- Edit Modal -->
    <div class="modal fade" id="editModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Pelicula</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" data-id=${id}>Editar</button>
        </div>
        </div>
    </div>
    </div>
    `
    container_card.innerHTML+= deleteModal;
    container_card.innerHTML+= editModal;

    return container_card.outerHTML;
}