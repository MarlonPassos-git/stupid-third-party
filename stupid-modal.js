// Função para carregar scripts dinamicamente
function carregarScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Carregar jQuery dinamicamente
carregarScript("https://code.jquery.com/jquery-3.6.4.min.js", function () {
    // Carregar o Slick Carousel dinamicamente após o carregamento do jQuery
    carregarScript("caminho-para-slick/slick.min.js", function () {
        // Agora que jQuery e Slick estão carregados, você pode usar seu código aqui
        $(document).ready(function () {
            // Configurações do Slick Carousel
            $('.your-carousel-selector').slick({
                // Configurações do Slick Carousel aqui
            });

            // Função para exibir o modal de cookies
            function exibirModalCookies() {
                // Crie o conteúdo do modal
                var modalContent = '<div id="cookie-modal" style="display:none;">' +
                                       '<p>Popup genérico de cookies</p>' +
                                       '<button onclick="fecharModalCookies()">Fechar</button>' +
                                   '</div>';

                // Adicione o modal ao corpo do documento
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
});
