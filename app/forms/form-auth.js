import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "../config.js"

const formRegistro = document.getElementById("form-registro")

formRegistro.addEventListener("submit", async (evento) =>{
    evento.preventDefault()
    const email = formRegistro['email_registro'].value;
    const password = formRegistro['password_registro'].value;
    console.log(email, password)

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)
        
    } catch (error) {
        console.log("Ha habido un error revisalo")
    }
    console.log(1+1)

})

