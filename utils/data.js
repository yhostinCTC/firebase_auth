import { form_card } from "./form_card.js";

let postList = document.querySelector(".posts");
postList.classList+="container";
postList.innerHTML = "<div class=row></div>"
postList = postList.firstChild;

console.log(postList)

export const setupPosts = (data) => {
    console.log("Si se esta ejecutando");
    if (data.length){
        postList.innerHTML = `
            <div class='col-7 container'>
             ${data}
            </div>
            <div class='col-5'>
                ${form_card}
            </div>
        `;
    }else{
        postList.innerHTML = '<h2>Inicia sesion para ver los posts</h2>'
    }
}