//-----Interatividade na tela-----
const modal = document.getElementById("moduleModal")
const dialog = document.querySelector("dialog")

function showModal() {
    modal.classList.remove("hidden");
    dialog.showModal();
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
const moduleOrder = 1;
const idTrail = moduleData.dataset.idtrail;

//urls
const urlTrail = 'http://localhost:3000/api/trail/';
const urlModule = 'http://localhost:3000/api/module/trail/';
const urlQuestion = '';
const urlOption = '';

console.log(idModule);

if(idModule) {
    async function runFetch() {
        try {
            const moduleTitle = document.getElementById("moduleTitle");
            const moduleContent = document.getElementById("moduleContent");
            const questionContent = document.getElementById("questionContent");
            //pegar as informações do módulo
            const resp1 = await fetch(urlModule + idTrail);
            const data1 = await resp1.json();
            moduleTitle.value = data1[moduleOrder-1].titulo
            moduleContent.value = data1[moduleOrder-1].conteudo

        } catch (err) {
            console.error("algo errado")

        } finally{
            console.log("pronto")
        }
    }
    runFetch()
}
