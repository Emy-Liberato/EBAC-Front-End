import { Cliente } from "./classes.js";
import {
  api,
  endpoint,
  criarElementoCliente,
  validarCliente,
} from "./utils.js";

const form = document.getElementById("formulario");
const listaClientes = document.getElementById("listaClientes");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();

  if (!validarCliente(nome, email)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const cliente = new Cliente(nome, email);

  fetch(`${api}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  })
    .then((res) => res.json())
    .then((data) => {
      const li = criarElementoCliente(data, excluirCliente);
      listaClientes.appendChild(li);
      form.reset();
    });
});

function excluirCliente(id, elementoHTML) {
  fetch(`${api}${endpoint}/${id}`, { method: "DELETE" })
    .then(() => elementoHTML.remove());
}

// Carregar dados ao iniciar
fetch(`${api}${endpoint}`)
  .then((res) => res.json())
  .then((clientes) =>
    clientes.forEach((cliente) => {
      const li = criarElementoCliente(cliente, excluirCliente);
      listaClientes.appendChild(li);
    })
  );
