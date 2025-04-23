// Seleciona a nossa ul com a lista de tarefas no HTML
const tarefas = document.getElementById("listaTarefas");

// faz uma requisicao GET para a API externa pra buscar todas as tarefas
fetch("https://crudcrud.com/api/6eb37636f955438997e4d224fdf22eea/tarefas")
  .then((resposta) => resposta.json()) //converte o corpo da resposta em JSON
  .then((listaTarefas) => {
    // Intera sobre cada tarefa no array
    listaTarefas.forEach((tarefa) => {
      // cria um novo elemrnto HTML li para cada tarefa
      const item = document.createElement("li");
      // define o conteudo HTML do item, incluindo a descrição e botão
      item.innerHTML = `${tarefa.descricao} <button>X</button>`;
      // adiciona uma novo item a lista de tarefas no HTML
      tarefas.appendChild(item);
    });
  });

// adicona um ouvinte de evento de clink no botão "adicionar" 
document.getElementById("add").addEventListener("click", (evento) => {
    evento.preventDefault();
    // pega a descrição que o úsuario adiciona no input com ID da tarefa
    const descricao = document.getElementById("tarefa").value;
    // faz uma requisição POST para a API externa para criar a tarefa 
    fetch("https://crudcrud.com/api/6eb37636f955438997e4d224fdf22eea/tarefas", {
    // definido como postMessage, mas podemos usar getComputedStyle, POST, PUT e DELETE 
      method: "POST",
      // definimos o cabeçallho da requisição, com o tipo de conteúdo JSON 
      headers: {
        "Content-Type": "application/json",
      },
      // convetermos um objeto JS para uma string JSON e passamos no corpo
      body: JSON.stringify({ descricao: descricao })
    })
    .then(resposta => resposta.json())
    .then((tarefa) => {
      // cria um novo elemrnto HTML li para cada tarefa
      const item = document.createElement("li");
      // define o conteudo HTML do item, incluindo a descrição e botão
      item.innerHTML = `${tarefa.descricao} <button>X</button>`;
      // adiciona uma novo item a lista de tarefas no HTML
      tarefas.appendChild(item);
    });
});
