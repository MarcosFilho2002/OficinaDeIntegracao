document.querySelector('.btn-add').addEventListener('click', ()=>{
    let codigo = document.querySelector('.codigo').value;
    let quantidade = document.querySelector('.quantidade').value;
    console.log(codigo);
    let produto = '';
    let preco = 0;
    if(codigo == 237428){
        produto = 'Cerveja 350ml';
        preco = 3.50;
    }else if(codigo == 230900){
        produto = 'Vodka 1L';
        preco = 32.00;
    }

    if(codigo !=='' && quantidade !== '' && quantidade !== 0){
        addNewtr(quantidade,produto,preco);
    }
    
    let valorTotal = document.querySelector('.valor_total');
    let precoTotal = valorTotal.textContent;
    let resultado = soma(quantidade,preco);
    console.log(precoTotal);
    //precoTotal = precoTotal.split
    precoTotal = precoTotal.replace(/([^\d])+/gim, '');
    console.log(precoTotal);
    document.querySelector('.valor_total').textContent = 'R$ '+resultado;


});

function addNewtr(quantidade, produto, preco){
    $("table").append("<tr> <td>"+quantidade+"</td> <td>"+produto+"</td> <td>"+"R$ "+preco.toFixed(2)+"</td> </tr>");
}

function soma(quantidade, preco){
    return preco*quantidade;
}