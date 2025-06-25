// ------ Interatividade com a página mobile ------
//Pegar o aside
let asideBar = document.getElementById("asideBar");
//pegar o título da trilha
let trailTitle = document.getElementById("trailTitle")
//titulo da trilha mobile
let mobileTrailTitle = document.getElementById("mobileTrailTitle");
//titulo da trilha principal
let mainTrailTitle = document.getElementById("mainTrailTitle");
//pegar o ul para colocar os modulos
let moduleList = document.getElementById("moduleList");
//Pegar o título do módulo
let moduleTitle = document.getElementById("moduleTitle");
//Pegar o conteúdo do módulo
let moduleContent = document.getElementById("moduleContent");
//Pegar a questão
let question = document.getElementById("question");
//Pegar as opções
let cardOptions = document.getElementById("cardOptions");
//Pegar o video
let video = document.getElementById("video");

function showAside() {
    if (asideBar.classList.contains("hidden")) {
        //Deixar visível
        asideBar.classList.remove("hidden");
        asideBar.classList.add("block");
    }
    else {
    }
}

function hideAside() {
    if (asideBar.classList.contains("block")) {
        //Deixar invisível
        asideBar.classList.remove("block");
        asideBar.classList.add("hidden");
    }
    else{}
}

//Carregamento de uma página
function showPage() {
    let loadingScreen = document.getElementById("loadingScreen");
    let content = document.getElementById("content");

    loadingScreen.classList.remove("fixed");
    loadingScreen.classList.add("hidden");

    content.classList.remove("hidden");
}

// ------ Integração com o backend
//Pegar as informações do div de informações
//Detalhe: dataset->pega todos os atributos data- e sempre oq vem depois é em letra minúscula
const dataDiv = document.getElementById("trailData");
const trailId = dataDiv.dataset.idtrail;
const moduleId = dataDiv.dataset.idmodule;
const userId = dataDiv.dataset.userid;
const urlModule = `/api/module/`;
const urlTrail = `/api/trail/`;
const urlQuestion = `/api/question/module/`
const urlOptions = `/api/option/question/`

//Função para criar uma tag
function createNode(element) {
    return document.createElement(element);
}

//função para inserir uma tag em outra
function append(parent, el) {
    return parent.appendChild(el)
}

async function executarFetches() {
    //Realizar o GET de informações
    try {
        //Título da trilha
        const resp1 = await fetch(urlTrail + trailId);
        const data1 = await resp1.json();
        trailTitle.innerHTML = data1.trail.titulo;
        mobileTrailTitle.innerHTML = data1.trail.titulo;
        mainTrailTitle.innerHTML = data1.trail.titulo;

        //Titulo dos módulos
        const resp2 = await fetch(`${urlModule}trail/${trailId}`);
        const data2 = await resp2.json();
        data2.map((module) => {
            //criar a tag de componente de uma lista
            let li = createNode("li");
            
            // Verificar se é o módulo atual para destacar
            const isCurrentModule = module.id == moduleId;
            const circleClass = isCurrentModule 
                ? "w-4 h-4 bg-green-500 rounded-full ring-2 ring-green-300 ring-offset-1" 
                : "w-4 h-4 bg-gray-300 rounded-full";
            const linkClass = isCurrentModule 
                ? "text-blue-600 font-semibold" 
                : "text-gray-600";
            
            //inserir informações
            li.innerHTML = `
            <span class="${circleClass}"></span>
            <a href="/trail/${trailId}/${module.id}" class="${linkClass}">${module.titulo}</a>`

            //estilizar
            li.classList.add("flex", "items-center", "space-x-2");

            //inserir
            append(moduleList, li);
        });

        //GET do módulo
        const resp3 = await fetch(urlModule + moduleId);
        const data3 = await resp3.json();
        moduleTitle.innerHTML = data3.titulo;
        moduleContent.innerHTML = data3.conteudo;
        if(data3.drivevideo){
            video.setAttribute("src", data3.drivevideo);
        } 

        //GET das pergunta
        const resp4 = await fetch(urlQuestion + moduleId);
        const data4 = await resp4.json();
        question.innerHTML = data4.enunciado;
        let questionId = data4.id;

        //GET das opcoes
        const resp5 = await fetch(urlOptions + questionId);
        const data5 = await resp5.json();
        data5.map((option) => {
            let label = createNode("label");
            //Inserir as informações
            if(option.eh_correta){
                label.innerHTML = `
                <input type="radio" class="w-fit h-fit" name="option" data-state="right"/>
                 <span class="text-gray-700">
                    ${option.texto}
                </span>
                `;
            }
            else{
                label.innerHTML = `
                <input type="radio" class="w-fit h-fit" name="option" data-state="wrong"/>
                 <span class="text-gray-700" >
                    ${option.texto}
                </span>
                `;
            }
            //estilizar
            label.classList.add("flex", "items-center", "space-x-3");
            //inserir
            append(cardOptions, label);

        });


    } catch (error) {
        console.error("Erro ao executar os fetches: ", error);

    } finally {
        showPage();
    }
}

//Checar se a resposta está correta
function checkAnswer(){
    const selected = document.querySelector('input[type="radio"]:checked');

    //Se nada for selecionado
    if (!selected){
        alert("Você precisa selcionar uma opção");
        return;
    }

    //Pegar se está errado ou falso
    const state = selected.dataset.state;

    //ver se está certo ou errado
    if (state === 'right'){
        // Marcar módulo como completo
        markModuleComplete();
        alert("Resposta correta! Módulo concluído.");
        window.location.href ='/';
    } 
    else {
        alert("Resposta errada");
    }
}

// Função para marcar módulo como completo
async function markModuleComplete() {
    try {
        const response = await fetch(`/api/trail/module/${moduleId}/complete/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (response.ok) {
            console.log('Módulo marcado como completo!');
        } else {
            console.error('Erro ao marcar módulo como completo');
        }
    } catch (error) {
        console.error('Erro ao marcar módulo como completo:', error);
    }
}

executarFetches();