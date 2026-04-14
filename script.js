/* =====================================================================
   HUB DO TREINADOR - SCRIPT GLOBAL (CORE UI)
   Controla a navegação, responsividade e tema de todas as páginas.
   ===================================================================== */

// --- 1. MENU MOBILE E TABLET (HAMBÚRGUER) ---
function toggleMenu() {
    document.body.classList.toggle('mobile-open');
}

// Garante que o menu mobile fecha ao clicar no fundo escurecido (overlay)
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            document.body.classList.remove('mobile-open');
        });
    }
});

// --- 2. MENU DESKTOP (ENCOLHER/RECOLHER BARRA LATERAL) ---
function toggleDesktopSidebar() {
    // Apenas permite recolher a barra se o ecrã for suficientemente grande (> 1024px)
    if (window.innerWidth > 1024) {
        document.body.classList.toggle('sidebar-collapsed');
        
        // Guarda a preferência do utilizador no navegador
        const isCollapsed = document.body.classList.contains('sidebar-collapsed');
        localStorage.setItem('hub_sidebar_state', isCollapsed);
    }
}

// --- 3. MODO ESCURO E CLARO (TEMA) ---
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('hub_dark_mode', isDark);
    
    // Altera o ícone da lua/sol no cabeçalho (se existir na página)
    const icon = document.getElementById('theme_icon');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// --- 4. APLICAR ESTADOS INICIAIS AO CARREGAR A PÁGINA ---
function applyInitialStates() {
    // 1. Restaura o Tema (Escuro ou Claro)
    if (localStorage.getItem('hub_dark_mode') === 'true') {
        document.body.classList.add('dark-theme');
        const icon = document.getElementById('theme_icon');
        if (icon) icon.className = 'fas fa-sun';
    }
    
    // 2. Restaura a Barra Lateral Recolhida (Apenas em ecrãs grandes)
    // Se o ecrã for pequeno, o CSS já trata de esconder a barra automaticamente.
    if (localStorage.getItem('hub_sidebar_state') === 'true' && window.innerWidth > 1024) {
        document.body.classList.add('sidebar-collapsed');
    }
}

// Executa a aplicação de estados assim que o documento (DOM) estiver pronto.
// Isto evita que o utilizador veja a página a "piscar" ao mudar de cor.
document.addEventListener('DOMContentLoaded', applyInitialStates);

// --- 5. AJUSTE DINÂMICO DE ECRÃ ---
// Se o utilizador rodar o telemóvel ou redimensionar a janela do browser, limpa as classes mobile
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        document.body.classList.remove('mobile-open');
    }
});