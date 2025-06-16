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
const idModule = moduleData.dataset.idmodule;
const idTrail = moduleData.dataset.idtrail;

//urls
const urlTrail = 'http://localhost:3000/api/trail/';
const urlModule = 'http://localhost:3000/api/module/';
const urlQuestion = `http://localhost:3000/api/question/`
const urlOptions = `http://localhost:3000/api/option/`

//pegar as tags para alteração
const moduleTitle = document.getElementById("moduleTitle");
const moduleContent = document.getElementById("moduleContent");
const questionContent = document.getElementById("questionContent");
const moduleOrder = document.getElementById("moduleOrder");
const questionPoints = document.getElementById("questionPoints");

async function runFetch() {
  try {
    if (idModule) {
      try {
        //pegar as informações do módulo
        const resp1 = await fetch(urlModule + 'trail/' + idTrail);
        const data1 = await resp1.json();
        moduleTitle.value = data1[moduleOrder - 1].titulo
        moduleContent.value = data1[moduleOrder - 1].conteudo

      } catch (err) {
        console.error('Erro ao módulo: ', err);
      }
    }
    //Criar id caso não seja passado o id do módulo
    else {

    }

  } catch (err) {
    console.error("Erro inesperado: ", err)

  } finally {
    console.log("pronto")
  }
}

async function createModule() {
  try {
    // 1. Criar novo módulo
    const moduleData = {
      idTrail: idTrail,
      title: moduleTitle.value,
      content: moduleContent.value,
      order: moduleOrder.value
    };

    const moduleResponse = await fetch(urlModule, {
      method: 'POST',
      body: JSON.stringify(moduleData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const moduleJson = await moduleResponse.json();
    const createdModule = moduleJson.module;

    // 2. Criar nova pergunta
    // 3. Verificar resposta correta (input radio selecionado)
    const selected = document.querySelector('input[type="radio"]:checked');
    if (!selected) {
      alert("Você precisa selecionar uma opção");
      return;
    }

    const questionData = {
      moduleId: createdModule.id,
      statement: questionContent.value,
      points: questionPoints.value,
    };

    const questionResponse = await fetch(urlQuestion, {
      method: 'POST',
      body: JSON.stringify(questionData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch(err){
    console.log('Erro encontrado: ', err);
    res.status(500).json({error: "Erro encontrado"});
  }
}

runFetch();