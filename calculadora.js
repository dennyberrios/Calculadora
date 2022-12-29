function insert(denny) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + denny;
}
function clean() {       //clean comando para apargar todo conteudo da calculadora.
  
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);   //codigo eval computa todas as operações da calculadora.
  } else {
    document.getElementById("resultado").innerHTML = "sem resultado";
  }
}
