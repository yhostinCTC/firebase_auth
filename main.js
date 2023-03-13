import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, getPeliculas, onGetPeliculas } from "./app/config.js"
import { setupPosts } from "./utils/data.js"


import { formCardListener } from "./app/forms/form-card.js"
import './app/forms/form-login.js'
import './app/forms/form-logout.js'
import './app/forms/form-registro.js'

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