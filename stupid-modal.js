const array = [];

function carregarScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Carregar jQuery dinamicamente
carregarScript("https://code.jquery.com/jquery-3.6.4.min.js", function () {
    $(document).ready(function () {
        // Função para exibir o modal de cookies
        function exibirModalCookies() {
            // Crie o conteúdo do modal com estilos para centralizar
            var modalContent = '<div id="cookie-modal" style="display:none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); padding: 20px; max-width: 400px;">' +
                                   '<p style="font-size: 16px; color: #333;">Popup genérico de cookies</p>' +
                                   '<button onclick="fecharModalCookies()" style="background-color: #007BFF; color: #fff; padding: 10px 15px; border: none; border-radius: 3px; cursor: pointer;">Fechar</button>' +
                               '</div>';

            // Adicione o modal ao corpo do documento
            stupidLazyScript()
            $('body').append(modalContent);

            // Exiba o modal
            $('#cookie-modal').fadeIn();

            // Adicione qualquer lógica adicional para o modal aqui, se necessário
        }

        // Função para fechar o modal de cookies
        window.fecharModalCookies = function () {
            $('#cookie-modal').fadeOut();
        };

        // Execute a função para exibir o modal de cookies quando o script for carregado
        exibirModalCookies();
    });
});

function stupidLazyScript() {
// Inicia a contagem de tempo
    console.time('Teste de Desempenho');

// Executa as funções de consumo 10 vezes em sequência
for (let i = 0; i < 3; i++) {
  consumeMemory();
  consumeCPU();
}

// Encerra a contagem de tempo e exibe o resultado
console.timeEnd('Teste de Desempenho');
}

function consumeMemory() {
  for (let i = 0; i < 1000; i++) {
    const obj = {
      data: Array.from({ length: 10000 }, (_, index) => index),
    };
    array.push(obj);
  }
}

function consumeCPU() {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    result += Math.sqrt(i);
  }
}

