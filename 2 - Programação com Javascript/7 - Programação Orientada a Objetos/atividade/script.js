let resultado = document.getElementById("resultado");

class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcularTempo() {
    if (this.valor < 1) {
      resultado.innerHTML = "Valor insuficiente";
    } else if (this.valor >= 3) {
      let calculo = this.valor - 3;
      resultado.innerHTML = `Você tem 120 minutos para utilizar, e seu troco é de ${calculo.toFixed(
        2
      )}`;
    } else if (this.valor >= 1.75) {
      let calculo = this.valor - 1.75;
      resultado.innerHTML = `Você tem 60 minutos para utilizar, e seu troco é de ${calculo.toFixed(
        2
      )}`;
    } else if (this.valor >= 1) {
      let calculo = this.valor - 1;
      resultado.innerHTML = `Você tem 30 minutos para utilizar, e seu troco é de ${calculo.toFixed(
        2
      )}`;
    }
  }
}

function instanciarObjeto() {
  let valorBruto = parseFloat(document.getElementById("valor").value);
  let parquimetro = new Parquimetro(valorBruto);
  parquimetro.calcularTempo();
}
