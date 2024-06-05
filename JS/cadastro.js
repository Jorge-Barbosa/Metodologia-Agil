document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;

        // Armazena os dados no localStorage
        localStorage.setItem('nomeUsuario', nome);
        localStorage.setItem('senhaUsuario', senha);

        // Redireciona para a página inicial
        window.location.href = 'index.html';
    });
});
