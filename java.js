// Captura o formulário de cadastro
const formularioCadastro = document.getElementById('formulario');

// Adiciona um listener para o evento 'submit' do formulário
formularioCadastro.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (envio)
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    // Monta a mensagem com as informações do usuário
    const mensagem = `Nome: ${nome}<br>Senha: ${senha}`;

    // Exibe as informações na tela inicial
    const informacoes = document.getElementById('informacoes');
    informacoes.innerHTML = mensagem;
});
