import { savePeliculas } from "../config.js";

export const formCardListener = (userEmail) =>{
    let formCard = document.getElementById('form_card')
    formCard.addEventListener('submit', async (evento) =>{
        evento.preventDefault();
        let director = formCard['inputDirector'].value;
        let titulo = formCard['inputTitulo'].value;
        let genero = formCard['inputGenero'].value;
        console.log(director, titulo, genero)

        try {
            let response = await savePeliculas(director, titulo, genero, userEmail)
            console.log(response)
        } catch (error) {
            console.log("ERROR FATAL, NO FUNCIONO, VAMONOS A COMER MEJOR")
        }
    })
}