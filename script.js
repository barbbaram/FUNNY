const boasVindas = document.getElementById("boasVindas");
const conteudo = document.getElementById("conteudo");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const explosao = document.getElementById("explosao");

const mensagens = [
  "Não te dei essa liberdade pra ficar me apertando...",
  "Tô de cara! Que ousadia!",
  "Você me respeite!",
  "Tá achando que é quem?",
  "eu vou explodir se vc me apertar mais uma vez"
];

let cliques = 0;
let fonteTamanho = 18;
let posicoes = ["top-left", "top-right", "bottom-left", "bottom-right"];

setTimeout(() => {
  boasVindas.classList.add("sair");
  setTimeout(() => {
    boasVindas.style.display = "none";
    conteudo.style.display = "flex";
  }, 2000);
}, 1500);

botao.addEventListener("click", () => {
  cliques++;
  fonteTamanho += 4;

  const pos = posicoes[Math.floor(Math.random() * posicoes.length)];
  botao.className = "";
  botao.classList.add(pos);

  if (cliques === 6) {
    conteudo.style.display = "none";
    explosao.style.display = "flex";
    explosao.classList.add("boom");
  } else {
    const index = Math.min(cliques - 1, mensagens.length - 1);
    mensagem.textContent = mensagens[index];
    mensagem.style.fontSize = fonteTamanho + "px";
  }
});

