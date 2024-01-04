const generatorBtn = document.querySelector("#generate-btn");
const colorsDiv = document.querySelector(".colors");

function generateColors() {
  colorsDiv.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateColorsRandom();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement("p");
    colorName.textContent = color;
    colorName.style.color = color;

    colorName.setAttribute("data-color-id", i);

    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
    
  }
}

function generateColorsRandom() {
  const letters = "123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;

}

generatorBtn.addEventListener("click", generateColors);
// cor de fundo

const btnCor = document.querySelector(".back");
const hexInput = document.querySelector("#hex-color");
const colorInput = document.querySelector("#back-color");

function mudarCorFundo() {
  let corEscolhida;

  // Se o campo hexadecimal estiver preenchido, use-o, caso contrário, use a cor do seletor de cor
  if (hexInput.value) {
    corEscolhida = hexInput.value;
  } else {
    corEscolhida = colorInput.value;
  }

  // Define a cor de fundo da página
  document.body.style.backgroundColor = corEscolhida;
}

btnCor.addEventListener("click", mudarCorFundo);

// Copiar a cor da div
function copyColorCode(event) {
  // Obtém o código de cor clicado usando o identificador único
  const colorId = event.target.getAttribute("data-color-id");
  const colorCode = colorsDiv.children[colorId].querySelector("p").textContent;

  // Cria um elemento de texto temporário e define seu valor para o código da cor
  const tempElement = document.createElement("textarea");
  tempElement.value = colorCode;

  // Adiciona o elemento ao DOM
  document.body.appendChild(tempElement);

  // Seleciona e copia o texto
  tempElement.select();
  document.execCommand("copy");

  // Remove o elemento temporário
  document.body.removeChild(tempElement);

  
}
// Adiciona o evento de clique ao container .colors para delegação de eventos
colorsDiv.addEventListener("click", function(event) {
  if (event.target.tagName === "P") {
    copyColorCode(event);
  }
});

generatorBtn.addEventListener("click", generateColors);