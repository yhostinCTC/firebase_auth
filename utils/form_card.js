
export const form_card = `
    <form id="form_card">
        <div class="mb-3">
            <label for="inputDirector" class="form-label">Director</label>
            <input type="text" class="form-control" id="inputDirector" required>
        </div>
        <div class="mb-3">
            <label for="inputTitulo" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="inputTitulo" required>
        </div>
        <div class="mb-3">
            <label for="inputGenero" class="form-label">Genero</label>
            <input type="number" class="form-control" id="inputGenero" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Pelicula</button>
    </form>
    `