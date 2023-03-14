
export const formCardUpdateListener = (id) => {
    let formUpdate = document.getElementById(`form_card_update${id}`);
    formUpdate.addEventListener("submit", async(evento)=>{
        evento.preventDefault();
        console.log("Formulario de editar funciona")
    })
}