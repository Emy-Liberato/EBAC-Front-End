// app.js
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

// Instância principal do sistema
const gastoPorCategoria = new ListaGastosPorCategoria(
  new Categoria("Alimentacao"),
  new Categoria("Transporte"),
  new Categoria("Lazer"),
  new Categoria("Outros")
);

// DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valorInformado = formulario.elements.valor.value;
  const categoriaInformada = formulario.elements.categoria.value;

  if (valorNegativo(valorInformado)) {
    alert("Valor inválido. O valor não pode ser negativo.");
    return;
  }

  const categoria = gastoPorCategoria.obterCategoriaPorNome(categoriaInformada);
  if (categoria) {
    categoria.adicionarValor(valorInformado);
  }

  atualizarInterface(gastoPorCategoria);
  formulario.reset();
});
