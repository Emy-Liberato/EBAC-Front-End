/* Elaborar um programa para um Cinema, onde o Usuário possa digitar o 
título e a duração de um filme em minutos. Exiba o título do filme 
e converta a duração para horas e minutos.

 1. obter o nome do filme
 2. obter a duração em minutos
 3. conveter a duração de minutos em horas
    3.1 fazer a divisão dos minutos por 60 para pegar a quantidade em horas
    3.2 arredondar a quantidade de horas para pegar só as horas cheias
    3.3 pergas ro resultados da duração em minutos e remover as horas cheias (60)
    exmeplo: 70 minutos (1h e 10 minutos)
    60 minutps = 1h
    10 minutos
    70/ 60 = 1,6 (arredondar p baixo) = 1
    const minutos = 70 - 1 * 60 = 10
4. exibir o nome do filme
5. exibir a duraçaõ em horas e minutos
*/

function algoritimo() {
  // entrada
  const titulo = document.getElementById("titulo").value;
  const duracao = Number(document.getElementById("duracao").value);

  // processamento
  const hora = Math.floor(duracao / 60);
  const minutos = duracao - hora * 60;

  // saida
  document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
  document.getElementById("duracaoSaida").textContent =
    hora + " hora(s) e " + minutos + " minuto(s)";
}
