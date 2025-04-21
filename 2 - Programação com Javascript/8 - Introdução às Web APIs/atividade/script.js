// Preenchimento automático do endereço pelo CEP
document.getElementById("cep").addEventListener("blur", (event) => {
  const elemento = event.target;
  const cepInformado = elemento.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cepInformado.length !== 8) {
    alert("CEP inválido! Digite 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
        salvarDadosFormulario(); // Salva os dados após preencher automaticamente
      } else {
        alert("CEP não encontrado.");
      }
    })
    .catch((error) => console.error("Erro ao buscar o CEP:", error));
});

// Função para salvar os dados no localStorage
function salvarDadosFormulario() {
  const dados = {
    cep: document.getElementById("cep").value,
    logradouro: document.getElementById("logradouro").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value
  };
  localStorage.setItem("formularioEndereco", JSON.stringify(dados));
}

// Salva os dados sempre que sair de um campo
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", salvarDadosFormulario);
});

// Restaura os dados quando a página é carregada
window.addEventListener("DOMContentLoaded", () => {
  const dadosSalvos = localStorage.getItem("formularioEndereco");
  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    document.getElementById("cep").value = dados.cep || "";
    document.getElementById("logradouro").value = dados.logradouro || "";
    document.getElementById("bairro").value = dados.bairro || "";
    document.getElementById("cidade").value = dados.cidade || "";
    document.getElementById("estado").value = dados.estado || "";
  }
});
