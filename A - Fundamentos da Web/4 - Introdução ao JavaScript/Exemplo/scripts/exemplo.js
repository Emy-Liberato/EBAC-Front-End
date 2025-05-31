// entrada
const valorJantar = prompt("Valor do jantar R$: ");

// processamento
const valorGarcom =  Number(valorJantar) * 0.10;
const valorTotal = Number(valorJantar) + valorGarcom;

// saída
alert("valor total: R$" + valorTotal);