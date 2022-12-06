let produtos = new Array();

produtos = JSON.parse(localStorage.getItem("produtos"));
console.log(produtos)

document.querySelector('.btn-cadastrar').addEventListener('click',()=>{
    console.log(produtos);
    let codigo = document.querySelector('#codigo').value;
    let nome = document.querySelector('#nome').value;
    let categoria = document.querySelector('#categoria').value;
    let valor = document.querySelector('#valor').value;
    let quantidade = document.querySelector('#quantidade').value;

    if(codigo == '' ||nome == '' || categoria == '' || valor == '' || quantidade == ''){
        document.querySelector('.alerta').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.alerta').style.display = 'none';
        }, 3000);
    }else{
    var texto = '{"codigo": "'+codigo+'", "nome": "'+nome+'", "categoria": "'+categoria+'", "valor": "'+valor+'", "quantidade": "'+quantidade+'"}';
    var json = JSON.parse(texto);
    console.log(json)
    produtos.push(json);
    console.log(produtos);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    document.querySelector('#codigo').value = '';
    document.querySelector('#nome').value = '';
    document.querySelector('#categoria').value = '';
    document.querySelector('#valor').value = '';
    document.querySelector('#quantidade').value = '';
    }
    

});