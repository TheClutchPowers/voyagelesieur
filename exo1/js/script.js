const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.col-transports-invisible');

btPlus.addEventListener('click',fouvreferme);

function fouvreferme(){
    colTransport.classList.toggle('col-transport-invisible');
};