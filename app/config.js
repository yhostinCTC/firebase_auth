// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" 



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Cambiar por su propia configuracion 
const firebaseConfig = {
  apiKey: "AIzaSyD-TlT0i5nHYvBdEiFuQC9bpyPmgY3kq5g",
  authDomain: "testunicef-19974.firebaseapp.com",
  projectId: "testunicef-19974",
  storageBucket: "testunicef-19974.appspot.com",
  messagingSenderId: "639517203686",
  appId: "1:639517203686:web:efed7c06981cf28c6e6f27",
  measurementId: "G-8Y78ZGWZ4J"
};

// Cambiar hasta aqui

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);