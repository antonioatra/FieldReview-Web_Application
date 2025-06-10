// ------ Interatividade com a página mobile ------
//Pegar o aside
let asideBar = document.getElementById("asideBar");


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
    if(asideBar.classList.contains("block")){
        //Deixar visível
        asideBar.classList.remove("block");
        asideBar.classList.add("hidden");
    }
} 

// ------ Integração com o banco de dados