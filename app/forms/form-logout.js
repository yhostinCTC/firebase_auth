import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "../config.js"


const logout = document.getElementById("button_logout")

logout.addEventListener("click", async (evento) =>{
    evento.preventDefault();
    try{
        await signOut(auth);
        alert("Se cerro su sesion satisfactoriamente");
    }catch(error){
        console.log(error);
    }
})