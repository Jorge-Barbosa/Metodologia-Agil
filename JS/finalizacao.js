document.addEventListener('DOMContentLoaded', function() {
    // Dados do produto armazenados no localStorage
    const produtoImagemSrc = localStorage.getItem('produtoImagem');
    const produtoTamanho = localStorage.getItem('selectedSize');
    const produtoValor = localStorage.getItem('produtoValor');

    // Elementos da página para exibir os dados
    const produtoImagemElement = document.getElementById('produtoImagem');
    const produtoTamanhoElement = document.getElementById('produtoTamanho');
    const produtoValorElement = document.getElementById('produtoValor');

    // Definir os valores dos elementos
    if (produtoImagemSrc) {
        produtoImagemElement.src = produtoImagemSrc;
    }
    if (produtoTamanho) {
        produtoTamanhoElement.textContent = produtoTamanho;
    }
    if (produtoValor) {
        produtoValorElement.textContent = produtoValor;
    }
});

function finalizarCompra(metodoPagamento) {
    let paginaPagamento = '';
    switch (metodoPagamento) {
        case 'pix':
            paginaPagamento = '/compra.html?metodo=pix';
            break;
        case 'cartao':
            paginaPagamento = '/compra.html?metodo=cartao';
            break;
        default:
            alert('Método de pagamento não reconhecido.');
            return;
    }
    window.open(paginaPagamento, '_blank');
}
 