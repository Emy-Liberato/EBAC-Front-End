// objeto literal
const pessoa = { nome: "Carlos", idade: 20 };

// criar classe
class Veiculo {
  // método construtor
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    // Atributo privado para indicar se o veículo está ligado
    this._ligado = false;
  }

  // metodos
  ligar() {
    this._ligado = true;
    console.log("O veículo está ligado");
  }
  desligar() {
    this._ligado = false;
    console.log("O veículo está desligado");
  }

  // Metodo getter para obter valor do atributo
  get ligado() {
    return this._ligado;
  }
}

// herança
class Moto extends Veiculo {
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, numeroPostas) {
    super(marca, modelo, ano);
    this.numeroPostas = numeroPostas;
  }

  abrirPortas() {
    console.log("As postas do carro foram abertas.");
  }
}

const carro = new Carro("Honda", "Civic", 2025, 4);
const moto = new Moto("Yamaha", "MT-07", 2025);

carro.ligar();
carro.desligar();
carro.abrirPortas();

console.log("O carro está ligado?", carro.ligado);
