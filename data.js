const postList = document.querySelector(".posts");



export const setupPosts = (data) => {
    if (data.length){
        postList.innerHTML = data;
    }else{
        postList.innerHTML = '<h2>Inicia sesion para ver los posts</h2>'
    }
}