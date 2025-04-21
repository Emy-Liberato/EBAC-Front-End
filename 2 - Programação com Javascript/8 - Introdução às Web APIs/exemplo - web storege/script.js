const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
    // verifica se o usuario já tem um tema definido
    const temaAtual = localStorage.getItem("tema"); 
    // verifica qual o tema qual o tema e inverte
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    // salvar a preferencia do usuario 
    localStorage.setItem("tema", novoTema);
    // adicionar a classe dark no elemento body 
    document.body.classList.toggle(novoTema);
    // atualiza o texto do botão 
    botaoTema.textContent =  novoTema === "dark" ? `☀︎` : `☽`;
})

document.addEventListener("DOMContentLoaded", () => {
    // verificar se tem tema salvo 
    const temaSalvo = localStorage.getItem("tema");

    // se for dark, adiciona a classe e altera o botâo 
    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
        botaoTema.textContent = `☀︎` ;
    } else {
        // caso contrário é light e o botão deve ser pra mudar pra dark
        botaoTema.textContent = `☽`
    }
});