function logar(){
    login = document.querySelector('#login').value;
    senha = document.querySelector('#senha').value;
    

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
    }
}

function dataCheck(){
    nome = document.querySelector('#nome').value;
    email = document.querySelector('#email').value;

    if(nome.length !== 0 && email.length !== 0 && email.includes("@")){
        alert('Obrigado! Fique de olho em seu E-mail!')
    }

    else if(email.includes("@") && nome.length == 0){
        alert('Campo "Nome" está vazio!')
    }

    else if( nome.length !== 0 && email.length == 0){
        alert('Campo "E-mail" está vazio!')
    }
}



