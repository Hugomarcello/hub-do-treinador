// ==========================================
// SCRIPT GLOBAL - HUB DO TREINADOR
// Aplica-se a todas as páginas do projeto
// ==========================================

/**
 * Verifica no localStorage se o utilizador prefere o modo escuro 
 * ou se o menu lateral estava aberto/fechado na última sessão.
 */
function applyInitialStates() {
    // Aplicação do Tema Dark/Light
    if(localStorage.getItem('hub_theme') === 'dark') {
        document.body.classList.add('dark-theme');
        const themeIcon = document.getElementById('theme_icon');
        if(themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    // Aplicação do Estado da Sidebar (Desktop)
    if(window.innerWidth > 768 && localStorage.getItem('hub_sidebar_state') === 'collapsed') {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main_content');
        if(sidebar) sidebar.classList.add('collapsed');
        if(mainContent) mainContent.classList.add('expanded');
    }
}

/**
 * Alterna entre Modo Claro (Verde Esmeralda) e Modo Escuro
 */
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme_icon');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('hub_theme', 'dark');
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    } else {
        localStorage.setItem('hub_theme', 'light');
        if(icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

/**
 * Abre/Fecha o Menu Lateral no Telemóvel (Mobile)
 */
function toggleMenu() { 
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if(sidebar) sidebar.classList.toggle('open'); 
    if(overlay) overlay.classList.toggle('open'); 
}

/**
 * Abre/Encolhe o Menu Lateral no Computador (Desktop)
 */
function toggleDesktopSidebar() { 
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main_content');
    
    if(sidebar) {
        sidebar.classList.toggle('collapsed'); 
        // Guarda a preferência para a próxima vez que abrir a página
        localStorage.setItem('hub_sidebar_state', sidebar.classList.contains('collapsed') ? 'collapsed' : 'expanded');
    }
    if(mainContent) {
        mainContent.classList.toggle('expanded'); 
    }
}

// Quando o HTML carregar, aplica as cores e menus imediatamente
document.addEventListener('DOMContentLoaded', () => {
    applyInitialStates();
});