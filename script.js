/**
 * Inicialização dos controles de acessibilidade, tema e persistência do MQS.
 * Carrega as preferências armazenadas localmente no navegador e vincula as ações
 * de alternância de visualização aos botões correspondentes da navbar.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos manipulados do DOM
    const btnTheme = document.getElementById('btn-theme');
    const btnFont = document.getElementById('btn-font');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // ==================== CARREGAMENTO DE CONFIGURAÇÕES SALVAS ====================

    // Recupere o tema ativo no localStorage (se inexistente, adota 'light' como tema padrão do site)
    const savedTheme = localStorage.getItem('tema') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);

    // O localStorage armazena dados puramente como String. 
    // É necessário comparar textualmente para obter a avaliação lógica da classe de acessibilidade.
    const savedFont = localStorage.getItem('fonte') === 'acessivel';
    if (savedFont) {
        bodyElement.classList.add('fonte-acessivel');
    }

    // ==================== COMPORTAMENTO DE INTERAÇÃO (LISTENERS) ====================

    // Escuta cliques no botão de tema para alternância de cores nativas do Bootstrap 5.3
    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            // Grava o novo estado para persistir nas próximas visitas do usuário
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('tema', newTheme);
        });
    }

    // Escuta cliques no botão de fonte para alternância da legibilidade estendida
    if (btnFont) {
        btnFont.addEventListener('click', () => {
            bodyElement.classList.toggle('fonte-acessivel');

            // Verifica a presença da classe ativa e atualiza o estado persistido correspondente
            const isAccessible = bodyElement.classList.contains('fonte-acessivel');
            localStorage.setItem('fonte', isAccessible ? 'acessivel' : 'padrao');
        });
    }
});
