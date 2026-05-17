// ACCORDION
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {

  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    if(content.style.display === "block"){
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });

});

// ACESSIBILIDADE
let tamanhoFonte = 16;

function aumentarFonte(){

  tamanhoFonte += 1;

  document.body.style.fontSize = tamanhoFonte + "px";

}

function diminuirFonte(){

  tamanhoFonte -= 1;

  document.body.style.fontSize = tamanhoFonte + "px";

}

function alternarTema(){

  document.body.classList.toggle("dark");

}

// LEITURA DE VOZ
let falaAtual;

function lerTexto(){

  // Para qualquer leitura anterior
  speechSynthesis.cancel();

  // Lê apenas o conteúdo principal
  const conteudo = document.querySelector("main").innerText;

  falaAtual = new SpeechSynthesisUtterance(conteudo);

  falaAtual.lang = "pt-BR";

  speechSynthesis.speak(falaAtual);

}

// PARAR LEITURA
function pararLeitura(){

  speechSynthesis.cancel();

}