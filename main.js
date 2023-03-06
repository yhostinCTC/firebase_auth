import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, getPeliculas } from "./app/config.js"
import { setupPosts } from "./utils/data.js"


import { formCardListener } from "./app/forms/form-card.js"
import './app/forms/form-login.js'
import './app/forms/form-logout.js'
import './app/forms/form-registro.js'

import { card } from "./utils/card.js"

onAuthStateChanged(auth, async (user) => {
    if (user) {
      //loginCheck(user);
      let mensaje = "";
      try {
        let peliculas = await getPeliculas()
        peliculas.forEach(pelicula => {
          mensaje+= card(pelicula.data());
        });
        // 
        setupPosts(mensaje);
        formCardListener();
      } catch (error) {
        console.log(error)
      }
    } else {
      const vacio = "";
      setupPosts(vacio);
      //loginCheck(user);
    }
  });