let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarChute() {
  if (tentativas >= 10) {
    document.getElementById(
      "resultado"
    ).textContent = `Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`;
    return; 
  }

  let chute = parseFloat(document.getElementById("chute").value);

  tentativas++;

  if (chute === numeroSecreto) {
    document.getElementById(
      "resultado"
    ).textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
  } else if (tentativas >= 10) {
    document.getElementById(
      "resultado"
    ).textContent = `Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`;
  } else if (chute > numeroSecreto) {
    document.getElementById("resultado").textContent =
      "O número secreto é menor do que você chutou.";
  } else {
    document.getElementById("resultado").textContent =
      "O número secreto é maior do que você chutou.";
  }

  document.getElementById(
    "numeroTentativas"
  ).textContent = `Tentativas restantes: ${10 - tentativas}`;
}
