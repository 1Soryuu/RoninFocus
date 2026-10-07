const toggleBtn = document.getElementById('toggleBtn');

// Assim que clicar na extensão, vê se está ligado ou desligado
chrome.storage.local.get(['focoAtivo'], (result) => {
    let ativo = result.focoAtivo !== false; // O padrão é começar ligado (true)
    atualizarBotao(ativo);
});

// Ao clicar no botão, inverte a chave
toggleBtn.addEventListener('click', () => {
    chrome.storage.local.get(['focoAtivo'], (result) => {
        let novoStatus = result.focoAtivo === false ? true : false;
        
        chrome.storage.local.set({ focoAtivo: novoStatus }, () => {
            atualizarBotao(novoStatus);
        });
    });
});

// Muda a cor e o texto do botão
function atualizarBotao(ativo) {
    if (ativo) {
        toggleBtn.innerText = "DESLIGAR FOCO";
        toggleBtn.className = "botao-ligado";
    } else {
        toggleBtn.innerText = "LIGAR FOCO";
        toggleBtn.className = "botao-desligado";
    }
}