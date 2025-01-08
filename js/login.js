//alert('ok');

//var -> Variável no formato clássico
//let -> Variável mais moderna que não permite redeclaração
//const -> Constante, usada quando o valor não vai sofrer mudanças

//Selecionando os elementos HTML que serão manipulados pelo JS
const icon = document.querySelector('.icon');
const inputSenha = document.querySelector('#senha');

function alterarInput() {
    //alert('Função acionada');

    let inputType = inputSenha.getAttribute('type');
    console.log(inputType);

    //== comparação (igualdade)

    if (inputType == 'password') {
        //inputSenha.type = 'text';
        inputSenha.setAttribute('type', 'text');
        icon.setAttribute('src', 'img/open.svg');
    }

    else {
        //inputSenha.type = 'password';
        inputSenha.setAttribute('type', 'password');
        icon.setAttribute('src', 'img/closed.svg');
    }

}

function showIcon() {
    
    //se a quantidade de caracteres(length) digitada no input for maior que zero
    if (inputSenha.value.length > 0) {
        icon.style.display = 'block';
    }

    else {
        icon.style.display = 'none';
    }    

}

//Eventos que irão acionar as funções
icon.addEventListener('click', alterarInput);
inputSenha.addEventListener('keyup', showIcon);