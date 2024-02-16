const convertButton = document.querySelector(".pedra");
const convertButton2 = document.querySelector(".papel");
const convertButton3 = document.querySelector(".tesoura");
const resultadoElement = document.querySelector(".resultado1");
const pontoElement = document.querySelector(".span1");
const pontoElement2 = document.querySelector(".span2");

let pontosJogador1 = 0;
let pontosJogador2 = 0;

function handleButtonClick(event) {
  const jogador1 = event.target.classList[0];
  const jogador2 = getRandomJogada();
  const resultado = jokenpo(jogador1, jogador2);
  console.log(resultado);
  resultadoElement.innerHTML = resultado;

  if (resultado === "Jogador 1 venceu!") {
    pontosJogador1++;
  } else if (resultado === "Jogador 2 venceu!") {
    pontosJogador2++;
  }

  pontoElement.innerHTML = pontosJogador1;
  pontoElement2.innerHTML = pontosJogador2;
}

function getRandomJogada() {
  const jogadas = ["pedra", "papel", "tesoura"];
  const randomIndex = Math.floor(Math.random() * jogadas.length);
  return jogadas[randomIndex];
}

function jokenpo(jogador1, jogador2) {
  if (jogador1 === jogador2) {
    return "Empate!";
  } else if (
    (jogador1 === "pedra" && jogador2 === "tesoura") ||
    (jogador1 === "tesoura" && jogador2 === "papel") ||
    (jogador1 === "papel" && jogador2 === "pedra")
  ) {
    return "Jogador 1 venceu!";
  } else {
    return "Jogador 2 venceu!";
  }
}

convertButton.addEventListener("click", handleButtonClick);
convertButton2.addEventListener("click", handleButtonClick);
convertButton3.addEventListener("click", handleButtonClick);