//-----Interatividade na tela-----
const modal = document.getElementById("moduleModal");
const dialog = document.querySelector("dialog");
const loadingPage = document.getElementById("loadingPage");
function showModal() {
  dialog.showModal();
  loadingPage.classList.remove("hidden");
  modal.classList.remove("hidden");
  runFetch()
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
if(idModule){
  idModule = idModule.replace(/"/g, ''); 
}
const idTrail = moduleData.dataset.idtrail;

//urls
const urlTrail = 'http://localhost:3000/api/trail/';
const urlModule = 'http://localhost:3000/api/module/';
const urlQuestion = `http://localhost:3000/api/question/`;
const urlOptions = `http://localhost:3000/api/option/`;


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
        moduleTitle.value = data1.titulo;
        moduleContent.value = data1.conteudo;
        moduleOrder.value = data1.ordem

        //pegar as informações das perguntas:
        const resp2 = await fetch(urlQuestion+"module/"+idModule);
        const data2 = await resp2.json();
        questionContent.value = data2.enunciado;
        questionPoints.value = data2.pontos;
        questionContent.dataset.id = data2.id;

        //pegar as informações das opções
        const resp3 = await fetch(urlOptions + "question/" +data2.id);
        const data3 = await resp3.json();
        const state = Array.from(optionContent).map((element, i) => {
          element.value = data3[i].texto;
          element.dataset.id = data3[i].id;
          return data3[i].eh_correta;
        });
        optionState.forEach((element, i) =>{
          element.checked = state[i];
        })

      } catch (err) {
        console.error('Erro ao pegar informações do módulo: ', err);
      }
    }

  } catch (err) {
    console.error("Erro inesperado: ", err)

  } finally {
    if(!loadingPage.classList.contains("hidden")){
      loadingPage.classList.add("hidden");
    }
    console.log("Todas as informações carregadas")
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

    console.log("Todo processo feito com sucesso!")
  } catch(err){
    console.error('Erro ao criar o módulo: ', err);
  }
}

async function updateModule(){
  try{
    //Atualizar o módulo
    const moduleOrderNumber = parseInt(moduleOrder.value);
    const moduleData = {
      title: moduleTitle.value,
      content: moduleContent.value,
      order: moduleOrderNumber
    };
    const moduleResponse = await fetch(urlModule + idModule, {
      method: 'PUT',
      body: JSON.stringify(moduleData),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const moduleJson = await moduleResponse.json();
    const updatedModule = moduleJson.module;

    //Atualizar a pergunta
    const questionPointsNumber = parseInt(questionPoints.value);
    const questionData = {
      statement: questionContent.value,
      points: questionPointsNumber
    }
    const questionResponse = await fetch(urlQuestion + questionContent.dataset.id , {
      method: 'PUT',
      body: JSON.stringify(questionData),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const updatedQuestion = await questionResponse.json();

    //Atualizar as opções
    const checked = document.querySelector('input[type="radio"]:checked');
    const promise = Array.from(optionContent).map((element, i) => {
      const isSelected = optionState[i] === checked;
      const optionData = {
        text: element.value,
        isCorrect: isSelected
      };
      return fetch(urlOptions + element.dataset.id, {
        method: 'PUT',
        body: JSON.stringify(optionData),
        headers: {
          'Content-type': 'application/json'
        }
      
      })
    })
    const optionsUpdated = await Promise.all(promise);
    console.log("Opções atualizadas: ", optionsUpdated);

  } catch (err) {
    console.error("Erro ao atualizar o módulo", err);
  } finally {
    console.log("Tudo atualizado")
  }
}
