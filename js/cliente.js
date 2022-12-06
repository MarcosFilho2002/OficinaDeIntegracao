$(function(){

    $.getJSON("./js/bd.json", function(data) {
        let pessoas = new Array();
        data.Cliente.forEach(element => {
           pessoas.push(element); 
        });
        if (localStorage.hasOwnProperty("pessoas")) {
            console.log('Já existe pessoas!')
        }else{
            localStorage.setItem("pessoas", JSON.stringify(pessoas));
        }
        
        const cliente = localStorage.getItem("pessoas");
        const clientes = JSON.parse(cliente);
        
        clientes.forEach(element => {
            var table = document.querySelector('.tabela-clientes');
            var tr = document.createElement('tr');
            
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');

            td2.append(element.nome);
            td3.append(element.CPF);
            td4.append(element.telefone);
            td5.append(element.endereco);
            tr.append(td2,td3,td4,td5);

            table.appendChild(tr);
        });
        
        
    });
  
});
