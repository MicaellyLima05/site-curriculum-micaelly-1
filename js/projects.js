var texto = "Esses são alguns dos meus projetos ao longo dessa jornada:";
var atraso = 100;
var textoElemento = document.querySelector("#titulo_animacao");

var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();