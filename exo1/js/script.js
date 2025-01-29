const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click',fouvreferme);

function fouvreferme(){
    colTransport.classList.toggle('conteneur-transport-invisible');
};