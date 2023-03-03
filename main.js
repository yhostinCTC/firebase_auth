import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./app/config.js"
import { setupPosts } from "./data.js"

import './app/forms/form-login.js'
import './app/forms/form-logout.js'
import './app/forms/form-registro.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
      //loginCheck(user);
      
      try {     
        const mensaje = "Iniciaste sesion";
  
        setupPosts(mensaje); 
      } catch (error) {
        console.log(error)
      }
    } else {
      const vacio = "";
      setupPosts(vacio);
      //loginCheck(user);
    }
  });