function calcularIMC() {
  // entrada
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let classificacao = "";

  //processamento
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  //saída
  document.getElementById("resultado").textContent = imc.toFixed(2);
  document.getElementById("classificacao").textContent = classificacao;
}
