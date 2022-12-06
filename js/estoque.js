$(function(){

    $.getJSON("./js/bd.json", function(data) {
        let produtos = new Array();
        data.Produto.forEach(element => {
           produtos.push(element);
        });

        const estoqueTexto = localStorage.getItem("produtos");
        const estoque = JSON.parse(estoqueTexto);

        estoque.forEach(element => {
            var table = document.querySelector('.tabela-estoque');
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            td1.append(element.quantidade);
            td2.append(element.nome);
            td3.append(element.categoria);

            tr.append(td1,td2,td3);

            table.appendChild(tr);
        });

        
    });
  
});
