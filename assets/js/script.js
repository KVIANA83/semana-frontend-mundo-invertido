// Efeito ao clicar o botão para mudar tema
function switchTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

// JavaScript para exibir/esconder o menu em telas pequenas
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    // Função para alternar a visibilidade do menu
    function toggleMenu() {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }

    // Verifica se o menu toggle existe (somente em telas pequenas)
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // Ao redimensionar a tela, garante que o menu está visível em telas grandes
    function handleResize() {
        if (window.innerWidth > 480) {
            menu.style.display = "flex"; // Exibe o menu
        } else {
            menu.style.display = "none"; // Esconde o menu
        }
    }

    // Executa a função de redimensionamento na carga inicial
    handleResize();

    // Adiciona o ouvinte de evento para redimensionar a janela
    window.addEventListener("resize", handleResize);
});

