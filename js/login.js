$(function(){

    $.getJSON("./js/bd.json", function(data) {
        console.log(data.Cliente);
        
        let pessoas = new Array();
        data.Cliente.forEach(element => {
           pessoas.push(element);
        });
        if (localStorage.hasOwnProperty("pessoas")) {
            console.log('Já existe pessoas!');
        }else{
            localStorage.setItem("pessoas", JSON.stringify(pessoas));
        }

        let produtos = new Array();
        data.Produto.forEach(element => {
           produtos.push(element);
        });
        if (localStorage.hasOwnProperty("produtos")) {
            console.log('Já existe produtos!');
        }else{
            localStorage.setItem("produtos", JSON.stringify(produtos));
        }

    });
  
});





document.querySelector('.btn-entrar').addEventListener('click', ()=>{
    $(function(){

        $.getJSON("./js/bd.json", function(data) {
            console.log(data.Usuario[0].username);
            
            encontraUsuario(data.Usuario);
        });
      
    });

});
function encontraUsuario(usuario){
    let username = document.querySelector('.username').value;
    let senha = document.querySelector('.senha').value;
    //console.log('aaa');
    //console.log(usuario.length);

    usuario.forEach(element => {
        console.log(element.username)
        if(senha == element.senha && username == element.username){
            window.location.href = '/html/home.html';
        }else{
            document.querySelector('.alerta').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.alerta').style.display = 'none';
            }, 3000);
        }
    });
}

