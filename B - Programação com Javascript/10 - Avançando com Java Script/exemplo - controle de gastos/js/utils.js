const obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");

// Função pura
export const valorNegativo = (valor) => parseFloat(valor) < 0;

export const atualizarInterface = (gastoPorCategoria) => {
  const categorias = gastoPorCategoria.categorias;

  categorias.forEach(({ nome, valor }) => {
    const elemento = obterElemento(nome);
    if (elemento) {
      elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    }
  });

  const elementoTotal = obterElemento("Total");
  if (elementoTotal) {
    elementoTotal.textContent = `Total: R$ ${formataMoeda(
      gastoPorCategoria.obterTotal()
    )}`;
  }
};
