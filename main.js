var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle="lightgrey";
pincel.fillRect(0,0,600,400);
var raio = 10;
var xAleatorio;
var yAleatorio;


function desenharCirculo(x,y,raio, cor){
  pincel.fillStyle = cor
  pincel.beginPath();
  pincel.arc(x,y,raio,0,2*Math.PI);
  pincel.fill();

}
function limparTela(){
  pincel.clearRect(0,0,600,400);
}


function desenhaAlvo(x,y){

  desenharCirculo(x,y,raio+20,'red');
  desenharCirculo(x,y,raio+10,'white');
  desenharCirculo(x,y,raio,'red');
}

function sorteiaPosicao(maximo){
  return Math.floor(Math.random()*maximo)  
}
function atualizaTela(){

  limparTela()
   xAleatorio=sorteiaPosicao(600);
   yAleatorio=sorteiaPosicao(400);
  desenhaAlvo(xAleatorio, yAleatorio);
}
setInterval(atualizaTela,700)

function disparar(evento){
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if((x > xAleatorio - raio )&&(x < xAleatorio + raio )&&(y > yAleatorio - raio )&&(y < yAleatorio + raio )){
    alert('Acertou')
  }

}
tela.onclick = disparar

