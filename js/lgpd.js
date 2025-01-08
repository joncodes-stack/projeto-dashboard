//Selecionando os elementos
const msgLgpd = document.querySelector('#msg-lgpd');
const btnLgpd = document.querySelector('#btn-lgpd');

//Se o localStorage 'fechouLgpd' é diferente (!=) de nulo
if(localStorage.getItem('fechouLgpd') != null){
    msgLgpd.style.display = 'none';
}

function closeLgpd(){
    msgLgpd.style.display = 'none';

    //Session -> Guarda uma informação no navegador enquanto o usuário está navegando
    //Local -> Guarda uma informação no navegador mesmo que a página seja fechada
    
    //sessionStorage.setItem('tema','light');
    localStorage.setItem('fechouLgpd','sim');    
}

btnLgpd.addEventListener('click',closeLgpd);