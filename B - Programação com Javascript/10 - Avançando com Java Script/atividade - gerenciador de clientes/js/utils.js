export const api = "https://crudcrud.com/api/f7304f0a9c0141df996028c8bb4ef6dd/";
export const endpoint = "cliente";

export function criarElementoCliente(data, callbackExcluir) {
  const li = document.createElement("li");
  li.innerHTML = `${data.nome} - ${data.email} <button class="btn-excluir">X</button>`;

  const button = li.querySelector(".btn-excluir");
  button.addEventListener("click", () => callbackExcluir(data._id, li));

  return li;
}

export function validarCliente(nome, email) {
  return nome.trim() !== "" && email.trim() !== "";
}
