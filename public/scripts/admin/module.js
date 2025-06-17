//-----Interatividade na tela-----
const modal = document.getElementById("moduleModal")
const dialog = document.querySelector("dialog")

dialog.showModal();
modal.classList.remove("hidden");
function showModal() {
}

function hideModal() {
  modal.classList.add("hidden");
  dialog.close();
}

//-----Integração com o backend-----
//Pegar as informações da div de informação
//Infor de id
const moduleData = document.getElementById("moduleData");
let idModule = moduleData.dataset.idmodule
 idModule = idModule.replace(/"/g, ''); 
console.log(idModule);
const idTrail = moduleData.dataset.idtrail;

//urls
const urlTrail = 'http://localhost:3000/api/trail/';
const urlModule = 'http://localhost:3000/api/module/';
const urlQuestion = `http://localhost:3000/api/question/`
const urlOptions = `http://localhost:3000/api/option/`

//pegar as tags para alteração
const moduleTitle = document.getElementById(
"moduleTitle");
const moduleContent = document.getElementById("moduleContent");
const questionContent = document.getElementById("questionContent");
const moduleOrder = document.getElementById("moduleOrder");
const questionPoints = document.getElementById("questionPoints");
const optionContent = document.querySelectorAll(".optionContent");
const optionState = document.querySelectorAll(".optionState");

  async function runFetch() {
  try {
    if (idModule) {
      try {
        //pegar as informações do módulo
        const resp1 = await fetch(urlModule + idModule);
        const data1 = await resp1.json();
        console.log(data1)
        moduleTitle.value = data1.titulo;
        moduleContent.value = data1.conteudo;
        moduleOrder.value = data1.ordem

        //pegar as informações das perguntas:
        const resp2 = await fetch(urlQuestion+"module/"+idModule);
        const data2 = await resp2.json();
        questionContent.value = data2.enunciado;
        questionPoints.value = data2.pontos;
        console.log(data2);

        //pegar as informações das opções
        const resp3 = await fetch(urlOptions + "question/" +data2.id);
        const data3 = await resp3.json();
        console.log(resp3)

      } catch (err) {
        console.error('Erro ao pegar informações do módulo: ', err);
      }
    }

  } catch (err) {
    console.error("Erro inesperado: ", err)

  } finally {
    console.log("pronto")
  }
}

async function createModule() {
  try {
    //Criar novo módulo
    const moduleOrderNumber = parseInt(moduleOrder.value);
    const moduleData = {
      idTrail: idTrail,
      title: moduleTitle.value,
      content: moduleContent.value,
      order: moduleOrderNumber
    };

    const moduleResponse = await fetch(urlModule, {
      method: 'POST',
      body: JSON.stringify(moduleData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //Pegar a resposta da criação pra criar a pergunta
    const moduleJson = await moduleResponse.json();
    const createdModule = moduleJson.module;

    // Criar nova pergunta
    // Verificar resposta correta (input radio selecionado)
    const selected = document.querySelector('input[type="radio"]:checked');
    if (!selected) {
      alert("Você precisa selecionar uma opção");
      return;
    }
    //Criar um array com os objetos das opções para adicionar no objeto de criação de perguntas 
    const optionData = Array.from(optionContent).map((content, i) => {  
      const isSelected = optionState[i] === selected;
      return {
        text: content.value,
        isCorrect: isSelected
      };
    });
    //Objeto com a criação da pergunta e das opções
    const questionData = {
      moduleId: createdModule.id,
      statement: questionContent.value,
      points: questionPoints.value,
      options: optionData
    };
    //Criação das perguntas e das opções
    const questionResponse = await fetch(urlQuestion, {
      method: 'POST',
      body: JSON.stringify(questionData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("todo processo feito com sucesso!")
  } catch(err){
    console.log('Erro encontrado: ', err);
  }
}

runFetch();