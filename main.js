import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, getPeliculas, onGetPeliculas, deletePelicula } from "./app/config.js"
import { setupPosts } from "./utils/data.js"


import { formCardListener } from "./app/forms/form-card.js"
import './app/forms/form-login.js'
import './app/forms/form-logout.js'
import './app/forms/form-registro.js'
import './app/forms/form-edit-card.js'


import { card } from "./utils/card.js"

onAuthStateChanged(auth, async (user) => {
    if (user) {
      document.getElementById('button_logout').className = "btn btn-danger";

      try {
        //let peliculas = await getPeliculas()
        
        onGetPeliculas((peliculas)=>{
          let mensaje = "";
          peliculas.forEach(pelicula => {
            if(pelicula.data().userEmail == user.email){
              console.log(pelicula.data())
              mensaje+= card(pelicula.data(), pelicula.id);
            }

          });
          setupPosts(mensaje, user);
          formCardListener(user.email);
          let buttonsDelete = document.querySelectorAll(".btn-delete");
          buttonsDelete.forEach(btn =>{
            btn.addEventListener('click', (evento)=>{
              console.log("FUNCIONA EL ELIMINAR "+evento.target.dataset.id)

              //Close the signin modal
              const signInModal = document.querySelector(`#deleteModal${evento.target.dataset.id}`);
              const modal = bootstrap.Modal.getInstance(signInModal);
              modal.hide();              
              
              deletePelicula(evento.target.dataset.id)
            })
          })

        })
      } catch (error) {
        console.log(error)
      }
    } else {
      document.getElementById('button_logout').className = "btn btn-danger d-none";
      const vacio = "";
      setupPosts(vacio);
      //loginCheck(user);
    }
  });