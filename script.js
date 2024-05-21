document.getElementById('comprarButton').addEventListener('click', function() {
    
});



function selecionarTamanho(indice, tamanho) {
    // Remove a classe 'clicked' de todos os botões de tamanho
    const botoesTamanho = document.querySelectorAll('.btn-tamanho');
    botoesTamanho.forEach(function (btn) {
        btn.classList.remove('clicked');
    });

    // Adiciona a classe 'clicked' apenas ao botão clicado
    botoesTamanho[indice].classList.add('clicked');

    // Armazena a escolha do tamanho no localStorage
    localStorage.setItem('selectedSize', tamanho);
}

document.getElementById('comprarButton').addEventListener('click', function() {
    // Verifica se um tamanho foi selecionado
    const selectedSize = localStorage.getItem('selectedSize');
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho.');
        return;
    }

    // Redireciona para a página de finalização
    window.location.href = '/finalizacao.html';
});
