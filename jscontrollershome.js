// js/controllers/home.js

// Esta função é chamada automaticamente pelo app.js sempre que a home.html for carregada
function init_home() {
    console.log("Módulo Home Carregado!");
    atualizarKpisIniciais();
}

function atualizarKpisIniciais() {
    // Puxa os dados das variáveis globais (que estarão no api.js)
    // E atualiza os elementos na tela
    const elKpi = document.getElementById('kpiPendencias');
    if(elKpi && chamadosGlobais) {
        elKpi.innerText = chamadosGlobais.length;
    }
}
