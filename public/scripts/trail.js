// ------ Interatividade com a página mobile ------
//Pegar o aside
let asideBar = document.getElementById("asideBar");
//pegar o título da trilha
let trailTitle = document.getElementById("trailTitle")
//titulo da trilha mobile
let mobileTrailTitle = document.getElementById("mobileTrailTitle");
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
const urlModule = `http://localhost:3000/api/module/`;
const urlTrail = `http://localhost:3000/api/trail/`;
const urlQuestion = `http://localhost:3000/api/question/module/`
const urlOptions = `http://localhost:3000/api/option/question/`

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

        //Titulo dos módulos
        const resp2 = await fetch(`${urlModule}trail/${trailId}`);
        const data2 = await resp2.json();
        data2.map((module) => {
            //criar a tag de componente de uma lista
            let li = createNode("li");
            //inserir informações
            li.innerHTML = `
            <span class="w-4 h-4 bg-green-500 rounded-full"></span>
            <span class="text-gray-600">${module.titulo}</span>`

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
                <input type="radio" class="w-5 h-5" name="option" data-state="right"/>
                 <span class="text-gray-700">
                    ${option.texto}
                </span>
                `;
            }
            else{
                label.innerHTML = `
                <input type="radio" class="w-5 h-5" name="option" data-state="wrong"/>
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
    }

    //Pegar se está errado ou falso
    const state = selected.dataset.state;

    //ver se está certo ou errado
    if (state === 'right'){
        alert("Resposta correta");
    } 
    else {
        alert("Resposta errada")
    }
}

executarFetches();