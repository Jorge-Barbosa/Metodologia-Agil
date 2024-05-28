let tamanhoSelecionado = '';
let quantidadeSacola = 0;

// Função para selecionar tamanho
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
    tamanhoSelecionado = tamanho;
}

// Função para atualizar a quantidade na sacola
function atualizarSacola() {
    const sacolaButton = document.getElementById('sacola');
    sacolaButton.dataset.quantity = quantidadeSacola;
    sacolaButton.querySelector('.quantity').textContent = quantidadeSacola;
}

// Função para adicionar produto à sacola
function adicionarProduto() {
    const selectedSize = localStorage.getItem('selectedSize');
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho.');
        return;
    }
    quantidadeSacola++;
    atualizarSacola();
}

// Função para zerar a sacola
function zerarSacola() {
    quantidadeSacola = 0;
    atualizarSacola();
}

// Event listener para o botão de compra
document.getElementById('comprarButton').addEventListener('click', function() {
    const selectedSize = localStorage.getItem('selectedSize');
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho.');
        return;
    }
    window.location.href = '/finalizacao.html';
});

// Event listeners para os botões de adicionar e zerar sacola
document.getElementById('adicionarButton').addEventListener('click', adicionarProduto);
document.getElementById('zerarSacola').addEventListener('click', zerarSacola);







// Define a imagem do produto e o valor (substitua com os valores reais)
const produtoImagemSrc = '../../IMG/bayerM.png'; // Caminho da imagem do produto
const produtoValor = 'R$ 399,00'; // Valor do produto

// Armazena no localStorage
localStorage.setItem('produtoImagem', produtoImagemSrc);
localStorage.setItem('produtoValor', produtoValor);

// Função para atualizar a quantidade na sacola
function atualizarSacola() {
    const sacolaButton = document.getElementById('sacola');
    sacolaButton.dataset.quantity = quantidadeSacola;
    sacolaButton.querySelector('.quantity').textContent = quantidadeSacola;
}

// Função para adicionar produto à sacola
function adicionarProduto() {
    const selectedSize = localStorage.getItem('selectedSize');
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho.');
        return;
    }
    quantidadeSacola++;
    atualizarSacola();
}

// Função para zerar a sacola
function zerarSacola() {
    quantidadeSacola = 0;
    atualizarSacola();
}

// Event listener para o botão de compra
document.getElementById('comprarButton').addEventListener('click', function() {
    const selectedSize = localStorage.getItem('selectedSize');
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho.');
        return;
    }
    window.location.href = '/finalizacao.html';
});

// Event listeners para os botões de adicionar e zerar sacola
document.getElementById('adicionarButton').addEventListener('click', adicionarProduto);
document.getElementById('zerarSacola').addEventListener('click', zerarSacola);