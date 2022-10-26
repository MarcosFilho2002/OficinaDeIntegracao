document.querySelector('.btn-entrar').addEventListener('click', ()=>{
    let username = document.querySelector('.username').value;
    let senha = document.querySelector('.senha').value;
    console.log('aaa');

    if(senha === 'admin' && username === 'admin'){
        window.location.href = '../html/index.html'
    }else{
        alert('Usuário não existe!')
    }

})