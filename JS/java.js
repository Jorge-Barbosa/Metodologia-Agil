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

document.addEventListener("DOMContentLoaded", function() {
    const camisas = document.querySelectorAll('.camisa');
 
    camisas.forEach(camisa => {
        camisa.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede a propagação do evento para os elementos pai
            const info = camisa.querySelector('.info');
            const outrasInfos = document.querySelectorAll('.info');
            outrasInfos.forEach(outraInfo => {
                if (outraInfo !== info) {
                    outraInfo.style.display = 'none';
                }
            });
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block';
            } else {
                info.style.display = 'none';
            }
        });
    });
});