/**
 * Inicialização dos controles de acessibilidade e tema do MQS
 */
document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos interativos da interface
    const btnTheme = document.getElementById('btn-theme');
    const btnFont = document.getElementById('btn-font');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // 1. Controle do Tema Escuro/Claro Nativo do Bootstrap 5
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            // Lê o tema atual ou define como light por padrão
            const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Atualiza o atributo raiz para que o Bootstrap aplique as variáveis corretas
            htmlElement.setAttribute('data-bs-theme', newTheme);
        });
    }

    // 2. Controle do Modo de Acessibilidade de Fonte
    if (btnFont) {
        btnFont.addEventListener('click', () => {
            // Alterna a classe de estilo no corpo do site
            bodyElement.classList.toggle('fonte-acessivel');
        });
    }
});
