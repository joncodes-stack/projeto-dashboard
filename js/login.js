

var icon = document.querySelector('.icon');
var informationAware = document.querySelector('.information-aware')
var inputLogin = document.querySelector('#login');
var inputSenha = document.querySelector('#password');
var button = document.querySelector('#submit');
var buttonaware = document.querySelector('#btn-aware');

if(localStorage.getItem('fechouLgpd')){
    closeAware();
}

function changeEye() {

    var type = inputSenha.getAttribute('type')

    if (type == 'password') {
        icon.src = "assets/images/open.svg"
        inputSenha.type = "text"
    } else {
        icon.src = "assets/images/closed.svg"
        inputSenha.type = "password"
    }

}

function showEye() {
    
    if (inputSenha.value.length > 0) {
        inputSenha.style.outline  = 'none';
    }

    if (inputSenha.value.length > 0) {
        icon.style.display = 'block';
    } else {
        icon.style.display = 'none';
    }

}

function validationData() {

    if (inputLogin.value.length <= 0) {
        inputLogin.style.outline  = '1px solid red';
    }

    if (inputSenha.value.length <= 0) {
        inputSenha.style.outline  = '1px solid red';
    }
}

function RemoveValidation() {

    if (inputLogin.value.length > 0) {
        inputLogin.style.outline  = 'none';
    }
}

function closeAware() {
    informationAware.style.display = 'none';

    localStorage.setItem('fechouLgpd', 'sim');
}



icon.addEventListener('click', changeEye);
inputLogin.addEventListener('keyup', RemoveValidation);
inputSenha.addEventListener('keyup', showEye);
button.addEventListener('click', validationData);
buttonaware.addEventListener('click', closeAware)

