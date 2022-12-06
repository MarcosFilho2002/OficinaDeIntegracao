let pessoas = new Array();

pessoas = JSON.parse(localStorage.getItem("pessoas"));

//localStorage.setItem("idCliente",)




document.querySelector('.btn-cadastrar').addEventListener('click',()=>{
    
    
    console.log(pessoas);
    let nome = document.querySelector('.username').value;
    let CPF = document.querySelector('#CPF').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereco').value;
    if(nome == '' || CPF == '' || telefone == '' || endereco == ''){
        document.querySelector('.alerta').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.alerta').style.display = 'none';
        }, 3000);
    }else{
    var texto = '{"nome": "'+nome+'", "CPF": "'+CPF+'", "telefone": "'+telefone+'", "endereco": "'+endereco+'"}';
    var json = JSON.parse(texto);
    console.log(json)
    pessoas.push(json);
    console.log(pessoas);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    document.querySelector('.username').value = '';
    document.querySelector('#CPF').value = '';
    document.querySelector('#telefone').value = '';
    document.querySelector('#endereco').value = '';
    }
    

});