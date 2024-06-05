document.addEventListener('DOMContentLoaded', function() {
    const saudacao = document.getElementById('saudacao');
    const nomeUsuario = localStorage.getItem('nomeUsuario');

    if (nomeUsuario) {
        saudacao.textContent = `Olá, ${nomeUsuario}`;
    } else {
        saudacao.textContent = 'Olá, visitante';
    }
});
