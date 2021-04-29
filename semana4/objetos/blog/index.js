     
  

    function mostrarConsole (){
    const tituloPost =  document.getElementById('titulo-post').value
    const autorPost = document.getElementById('autor-post').value
    const conteudoPost =  document.getElementById('conteudo-post').value
    const containerPost = ("container-de-posts")

        const blogEntrada = {
            titulo : (tituloPost),
            autor :(autorPost),
            conteudo : (conteudoPost)                    
        }
        console.log(blogEntrada)

       
            containerPost.innerHTML += `<p>${blogEntrada.titulo}</p> <p>${blogEntrada.autor}</p><p>${blogEntrada.conteudo}</p>`
        
    
    
}

// function AcrescentarPosts (){
//     const tituloPost =  document.getElementById('titulo-post').value
//     const autorPost = document.getElementById('autor-post').value
//     const conteudoPost =  document.getElementById('conteudo-post').value
//     const containerPost = ("container-de-posts")

//     const blogEntrada = {
//     titulo : (tituloPost),
//     autor :(autorPost),
//     conteudo : (conteudoPost)
//     }
    
//     containerPost.innerHTML += `<p>${tituloPost.value}</p> <p>${autorPost.value}</p><p>${conteudoPost.value}</p>`
    

    
 