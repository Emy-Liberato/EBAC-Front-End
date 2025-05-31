export class Categoria {
  // emcapsulamento com campos provados
  #nome;
  #valor;

  constructor(nome) {
    this.#nome = nome;
    this.#valor = 0;
  }

  // Uso do getters
  get valor() {
    return this.#valor;
  }

  get nome() {
    return this.#nome;
  }

  // manipulação
  adicionarValor(valor) {
    this.#valor += parseFloat(valor);
  }
}

export class ListaGastosPorCategoria {
  #categoria;

  // rest operetor
  constructor(...categorias) {
    this.categorias = categorias;
  }

  get categoria() {
    return this.#categoria;
  }

  // Programação funcional
  obterCategoriaPorNome(nome) {
    return this.categorias.find((categoria) => categoria.nome == nome);
  }

  obterTotal() {
    // redução de dados com reduce
    return this.categorias.reduce(
      (total, categoria) => total + categoria.valor,
      0
    );
  }
}
