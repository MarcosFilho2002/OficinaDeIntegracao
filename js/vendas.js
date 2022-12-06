let produtos = new Array();
let disponivel = new Array();

produtos = JSON.parse(localStorage.getItem("produtos"));

produtos.forEach(element => {
    var table = document.querySelector('.tabelinha');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    td1.append(element.codigo);
    td2.append(element.nome);

    tr.append(td1,td2);

    table.appendChild(tr);
});

produtos.forEach(element => {
    disponivel.push(element.codigo);
});

document.querySelector('.codigo').addEventListener('keyup',()=>{
    var valor = document.querySelector('.codigo').value;
    document.querySelector('.nomeProduto').textContent = '';
    if(disponivel.includes(valor)){
        var produto = '';
       produtos.forEach(element => {
            console.log(element.codigo)
            if(element.codigo == valor){
                produto = element.nome;
            }
       });

        let nomeProduto = document.querySelector('.nomeProduto');
        let texto = document.createTextNode(produto);
        nomeProduto.appendChild(texto);

    }else{
        console.log('não inclui')
    }

});

document.querySelector('.btn-add').addEventListener('click', ()=>{
    let codigo = document.querySelector('.codigo').value;
    let quantidade = document.querySelector('.quantidade').value;
    if(disponivel.includes(codigo)){
        var produto = '';
        var preco = 0;
        var quantidadeInt = parseInt(quantidade)
       produtos.forEach(element => {
            console.log(element.codigo)
            if(element.codigo == codigo){
                produto = element.nome;
                preco = parseFloat(element.valor);

            }
       });
    }

    console.log(preco);

    if(codigo !=='' && quantidade !== '' && quantidadeInt > 0){
        addNewtr(quantidade,produto,preco);
        let valorTotal = document.querySelector('.valor_total');
        let valorTotalAux = valorTotal.textContent;
        let precoTotal = valorTotal.textContent;
        let resultado = soma(quantidade,preco);
        console.log(precoTotal);
        //precoTotal = precoTotal.split
        precoTotal = precoTotal.replace(/([^\d])+/gim, ' ');
        let precoTotalAux = [];
        precoTotalAux = precoTotal.split(' ');
        console.log(precoTotalAux);
        console.log(resultado);
        let aux = parseInt(precoTotalAux[1]) + (parseInt(precoTotalAux[2]) / 100);
        console.log(aux);
        document.querySelector('.valor_total').textContent = 'R$ '+(resultado+aux).toFixed(2);
    }

});

function addNewtr(quantidade, produto, preco){
    $(".tabela-venda").append("<tr> <td>"+quantidade+"</td> <td>"+produto+"</td> <td>"+"R$ "+preco.toFixed(2)+"</td> </tr>");
}

function soma(quantidade, preco){
    return preco*quantidade;
}