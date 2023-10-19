const MODEL_URL = "https://teachablemachine.withgoogle.com/models/ht88Aq3U9/";
let model, maxPredictions;
const uploadedImage = document.getElementById("uploadedImage");
const resultContainer = document.getElementById("result");
const ethnicitiesList = document.getElementById("ethnicitiesList");
const inputElement = document.getElementById("imageInput");
const loading = document.getElementById("loading");
const button = document.getElementById("identifyButton");
const maxProbabilityTitle = document.getElementById("maxProbabilityTitle");
const linkEtnia = document.getElementById("link-etnia");

async function init() {
  const modelURL = MODEL_URL + "model.json";
  const metadataURL = MODEL_URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  inputElement.addEventListener("change", loadImage);
}

// Função para carregar e prever uma imagem
function loadImage() {
  // limpar lista de etnias, ocultar container de resultado, mostra o button
  ethnicitiesList.innerHTML = "";
  resultContainer.style.display = "none";
  button.style.display = "block";

  // Verifica se o user selecionou imagem
  if (inputElement.files.length === 0) {
    alert("Selecione uma imagem antes de carregar.");
    return;
  }

  const file = inputElement.files[0];
  uploadedImage.src = URL.createObjectURL(file);
  uploadedImage.style.display = "block";

  button.addEventListener("click", async () => {
    // Oculta o button e mostra o loading
    button.style.display = "none";
    loading.style.display = "block";

    //Ao carregar imagem chama a função prediction
    setTimeout(() => {
      prediction(uploadedImage);
    }, 100);
  });
}

async function prediction(uploadedImage) {
  // Previsão da imagem carregada
  const prediction = await model.predict(uploadedImage);
  // Loading
  loading.style.display = "none";

  // Lista de etnias (baseado nas etnias classificadas na Model (Teacheble Machine))
  const ethnicities = [
    "África",
    "América do Sul",
    "Europa",
    "América Central",
    "Ásia",
    "Oceania",
    "América do Norte",
  ];

  // Captura a classe com maior probabilidade
  let maxClass = "";
  let maxProbability = 0;

  for (let i = 0; i < maxPredictions; i++) {
    if (prediction[i].probability > maxProbability) {
      maxClass = prediction[i].className;
      maxProbability = prediction[i].probability;
    }
  }
  // Preenche a lista de etnias com base no resultado
  prediction.forEach((classPrediction, index) => {
    const divItem = document.createElement("div");
    divItem.classList.add("progress-container");
    const label = document.createElement("label");
    const progressItem = document.createElement("div");
    progressItem.classList.add("progress-bar");
    divItem.appendChild(label);
    divItem.appendChild(progressItem);
    label.textContent = `${ethnicities[index]}:`;
    progressItem.style.width =
      Math.round(classPrediction.probability * 100).toFixed(2) + "%";
    progressItem.textContent = `${Math.round(
      classPrediction.probability * 100
    )}%`;
    ethnicitiesList.appendChild(divItem);
  });
  // Exibe o resultado
  resultContainer.style.display = "block";

  maxProbabilityTitle.innerHTML = `Classe com Maior Probabilidade: ${maxClass} (${(
    maxProbability * 100
  ).toFixed(2)}%)`;
  buscaLinkEtnia(maxClass);
}

function buscaLinkEtnia(maxClass) {
  if (maxClass == "África") {
    linkEtnia.href = "https://pt.wikipedia.org/wiki/Povo_africano";
  } else if (maxClass == "América do sul") {
    linkEtnia.href =
      "https://pt.wikipedia.org/wiki/Demografia_da_Am%C3%A9rica_do_Sul";
  } else if (maxClass == "Europa") {
    linkEtnia.href =
      "https://pt.wikipedia.org/wiki/Grupos_%C3%A9tnicos_da_Europa";
  } else if (maxClass == "América Central") {
    linkEtnia.href = "https://pt.wikipedia.org/wiki/Am%C3%A9rica_Central";
  } else if (maxClass == "Ásia") {
    console.log("asia");
    linkEtnia.href = "https://pt.wikipedia.org/wiki/%C3%81sia";
  } else if (maxClass == "Oceania") {
    linkEtnia.href = "https://pt.wikipedia.org/wiki/Oceania";
  } else if (maxClass == "América do Norte") {
    linkEtnia.href =
      "https://pt.wikipedia.org/wiki/Categoria:Grupos_%C3%A9tnicos_da_Am%C3%A9rica_do_Norte";
  }
}

// Inicialize a aplicação
init();

/* 
// A URL do modelo fornecida pelo painel de exportação do Teachable Machine
const model_URL = "https://teachablemachine.withgoogle.com/models/ht88Aq3U9/";
let model;
let maxPredictions;
const uploadedImage = document.getElementById("uploadedImage");
const resultContainer = document.getElementById("result");
const ethnicitiesList = document.getElementById("ethnicitiesList");
const inputElement = document.getElementById("imageInput");
const loading = document.getElementById("loading");

// Carrega o modelo e configura um evento para carregar a imagem
async function init() {
  
  const modelURL = model_URL + "model.json";
  const metadataURL = model_URL + "metadata.json";

  // Carrega o modelo e metadados
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();
  // Configura um evento para carregar a imagem quando um arquivo é selecionado
  inputElement.addEventListener("change", loadImage);
}

// Função para carregar e prever uma imagem
async function loadImage() {
  loading.style.display = "block";
  ethnicitiesList.innerHTML = "";
  resultContainer.style.display = "none";

  if (inputElement.files.length === 0) {
    alert("Selecione uma imagem antes de carregar.");
    return;
  }

  const file = inputElement.files[0];
  const reader = new FileReader();

  reader.onload = async function () {
    
    // Exiba a imagem carregada
    uploadedImage.src = URL.createObjectURL(file)
     console.log(uploadedImage)
    // Previsão da imagem carregada
    const prediction = await model.predict(uploadedImage);
    // Exibe o resultado e a lista de etnias
    resultContainer.style.display = "block";
    // Lista de etnias (baseado nas etnias classificadas na Model (Teacheble Machine))
    const ethnicities = [
      "África",
      "América do Sul",
      "América do Norte",
      "América Central",
      "Ásia",
      "Europa",
      "Oceania",
    ];

    // Loading
    loading.style.display = "none";

    // Preenche a lista de etnias com base no resultado
    prediction.forEach((classPrediction, index) => {
      // const listItem = document.createElement("li");
      const divItem = document.createElement("div");
      const label = document.createElement("label");
      const progressItem = document.createElement("div");
      progressItem.classList.add("progress-bar");
      divItem.appendChild(label);
      divItem.appendChild(progressItem);
      label.textContent = `${ethnicities[index]}:`;
      progressItem.style.width =
        Math.round(classPrediction.probability * 100).toFixed(2) + "%";
      progressItem.textContent = `${Math.round(
        classPrediction.probability * 100
      )}%`;
      ethnicitiesList.appendChild(divItem);
    });
  };
  reader.readAsDataURL(file);
}
// Inicialize a aplicação
init();
*/
