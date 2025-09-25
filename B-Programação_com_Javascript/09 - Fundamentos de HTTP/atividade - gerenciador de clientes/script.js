const form = document.querySelector("form");
const listaClientes = document.getElementById("listaClientes");
const api = "https://crudcrud.com/api/0609f9c0c27e49298f4ebd7e3ef7838a/"


form.addEventListener("submit", function (event) {
  event.preventDefault(); //impede que o form recareegue a pagina

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let cliente = { nome, email };

  fetch(`${api}cliente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  })
    .then((resposta) => resposta.json())
    .then((data) => {
      const li = document.createElement("li");
      li.innerHTML = `${data.nome} - ${data.email} <button class="btn-excluir">X</button>`;

      const button = li.querySelector(".btn-excluir");
      button.addEventListener("click", () => {
        fetch(`${api}cliente/${data._id}`, { method: "DELETE" })
          .then(() => li.remove());
      });

      listaClientes.appendChild(li);
    });
});

// adiciona o cliente a lista de cliente
fetch(`${api}cliente`).then(
  (resposta) =>
    resposta.json().then((lista) => {
      lista.forEach((data) => {
        const cadastro = document.createElement("li");
        cadastro.innerHTML = `${data.nome} - ${data.email} <button class="btn-excluir">X</button>`;

        const button = cadastro.querySelector(".btn-excluir");
        button.addEventListener("click", () => {
            fetch(`${api}cliente/${data._id}`, { method: "DELETE" })
              .then(() => cadastro.remove());
          });

        listaClientes.appendChild(cadastro);
      });
    })
);
