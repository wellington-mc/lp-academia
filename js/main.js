document.addEventListener('DOMContentLoaded', () => {
    // Lógica para pré-selecionar o plano na página de matrícula
    const planSelect = document.querySelector('#plan');
    if (planSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const plan = urlParams.get('plano');
        if (plan) {
            planSelect.value = plan;
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});
