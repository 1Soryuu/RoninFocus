chrome.storage.local.get(['focoAtivo'], function(result) {
    if (result.focoAtivo === false) return;

    const urlAtual = window.location.href;

    if (urlAtual.includes("youtube.com")) {
        if (urlAtual.includes("/shorts/")) {
            mostrarTelaSamurai();
        } else {
            const estiloYouTube = document.createElement('style');
            estiloYouTube.innerHTML = `
                ytd-browse[page-subtype="home"] ytd-rich-grid-renderer { display: none !important; }
                ytd-reel-shelf-renderer { display: none !important; }
                a[title="Shorts"], ytd-mini-guide-entry-renderer[aria-label="Shorts"] { display: none !important; }
            `;
            document.head.appendChild(estiloYouTube);
        }
    } 
    else if (
        urlAtual.match(/tiktok\.com|instagram\.com|twitter\.com|x\.com/)
    ) {
        mostrarTelaSamurai();
    }

    function mostrarTelaSamurai() {
        document.body.style.overflow = "hidden";
        
        document.body.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #0a0a0a; color: #fff; font-family: 'Courier New', Courier, monospace; text-align: center; z-index: 999999; position: fixed; top: 0; left: 0; width: 100%;">
                <h1 style="color: #dc2626; font-size: 3.5rem; text-transform: uppercase;">A Honra foi Quebrada</h1>
                <p style="font-size: 1.5rem; max-width: 600px; color: #cccccc;">
                    Você fez um juramento de foco. Continuar forçará seu Samurai a cometer <b>Seppuku</b>.
                </p>
                <div style="font-size: 6rem; margin: 30px 0;">🗡️🩸🥋</div>
                
                <button id="btnHonra" style="background-color: #dc2626; color: white; border: none; padding: 15px 40px; font-size: 1.2rem; cursor: pointer; font-weight: bold; text-transform: uppercase; margin-top: 20px; border-radius: 5px;">
                    Manter a Honra (Sair do Site)
                </button>
                
                <button id="btnDesonra" style="background-color: transparent; color: #555; border: 1px solid #555; padding: 10px 20px; font-size: 1rem; cursor: pointer; margin-top: 20px; border-radius: 5px;">
                    Cometer Seppuku e Acessar
                </button>
            </div>
        `;

        // CORREÇÃO: Redireciona para o Google para forçar a saída da rede social
        document.getElementById('btnHonra').addEventListener('click', function() {
            window.location.href = "https://www.google.com";
        });

        document.getElementById('btnDesonra').addEventListener('click', function() {
            document.body.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #450a0a; color: white; font-family: 'Courier New', Courier, monospace;">
                    <h1 style="font-size: 2rem;">Honra: 0. O sacrifício foi feito. Atualize a página para acessar a distração.</h1>
                </div>
            `;
        });
    }
});