document.querySelector('.btn-add').addEventListener('click', ()=>{
    let codigo = document.querySelector('.codigo').value;
    let quantidade = document.querySelector('.quantidade').value;
    console.log(codigo);
    let produto = '';
    let preco = 0;
    if(codigo == 1){
        produto = 'Cerveja 350ml';
        preco = 3.50;
    }else if(codigo == 2){
        produto = 'Vodka 1L';
        preco = 32.00;
    }else if(codigo == 3){
        produto = 'Refrigerante 350ml';
        preco = 3.00;
    }
    let quantidadeInt = parseInt(quantidade)

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
    $("table").append("<tr> <td>"+quantidade+"</td> <td>"+produto+"</td> <td>"+"R$ "+preco.toFixed(2)+"</td> </tr>");
}

function soma(quantidade, preco){
    return preco*quantidade;
}

document.querySelector('.codigo').addEventListener('keyup',()=>{
    let codigo = document.querySelector('.codigo').value;
    console.log(codigo);
    let produto = '';
    document.querySelector('.nomeProduto').textContent = '';
    if(codigo == 1){
        produto = 'Cerveja 350ml';
    }else if(codigo == 2){
        produto = 'Vodka 1L';
    }else if(codigo == 3){
        produto = 'Refrigerante 350ml';
    }
    let nomeProduto = document.querySelector('.nomeProduto');
    let texto = document.createTextNode(produto);
    nomeProduto.appendChild(texto);
    console.log(nomeProduto.textContent)
});
