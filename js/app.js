// js/app.js
const SENHA_ACESSO = "TBX2026";
let currentView = 'home';

window.onload = () => {
    verificarAutenticacao();
};

function verificarAutenticacao() {
    const auth = localStorage.getItem("app_tbx_auth");
    if (auth === "true") {
        document.getElementById("loginScreen").classList.add("hidden");
        document.body.style.overflow = "auto";
        iniciarSistema();
    } else {
        document.getElementById("loginScreen").classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
}

// A MÁGICA ACONTECE AQUI: Carrega o HTML da pasta views dinamicamente
async function navegarPara(tela) {
    try {
        const response = await fetch(`views/${tela}.html`);
        if (!response.ok) throw new Error("Tela não encontrada");
        
        const htmlText = await response.text();
        document.getElementById('app-root').innerHTML = htmlText;
        currentView = tela;

        // Atualiza botões e títulos do Header
        atualizarHeader(tela);

        // Chama a função de inicialização específica da tela (se existir)
        const funcaoInit = `init_${tela.replace(/-/g, '_')}`;
        if (typeof window[funcaoInit] === 'function') {
            window[funcaoInit]();
        }

    } catch (error) {
        showToast("Erro ao carregar módulo.", "error");
        console.error(error);
    }
}

function iniciarSistema() {
    // Inicializa a API e carrega a tela Home
    inicializarAPI();
    navegarPara('home');
}

function atualizarHeader(tela) {
    const btnVoltar = document.getElementById('btnVoltar');
    const title = document.getElementById('headerTitle');
    const subtitle = document.getElementById('headerSubtitle');

    if (tela === 'home') {
        btnVoltar.classList.add('hidden');
        title.innerText = "Painel Inicial"; 
        subtitle.innerText = "Grupo TBX · Sistema Modular";
    } else {
        btnVoltar.classList.remove('hidden');
        // Você pode adicionar um switch case aqui para personalizar os títulos por tela
    }
}

function showToast(message, type = 'success') {
    // COLOQUE SUA FUNÇÃO DE TOAST AQUI
}
