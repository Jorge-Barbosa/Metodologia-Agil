document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const metodoPagamento = urlParams.get('metodo');

    const pagamentoDetalhes = document.getElementById('pagamentoDetalhes');
    const processamento = document.getElementById('processamento');
    const sucesso = document.getElementById('sucesso');

    if (metodoPagamento === 'pix') {
        pagamentoDetalhes.innerHTML = `
            <h1>Pagamento com Pix</h1>
            <p>Chave: 35999677580</p>
            <button id="finalizarCompra">Finalizar Compra</button>
        `;
    } else if (metodoPagamento === 'cartao') {
        pagamentoDetalhes.innerHTML = `
            <h1>Pagamento com Cartão</h1>
            <form id="formCartao">
                <div>
                    <label for="numeroCartao">Número do Cartão:</label>
                    <input type="text" id="numeroCartao" name="numeroCartao" required>
                </div>
                <div>
                    <label for="nomeCartao">Nome no Cartão:</label>
                    <input type="text" id="nomeCartao" name="nomeCartao" required>
                </div>
                <div>
                    <label for="validadeCartao">Data de Validade:</label>
                    <input type="text" id="validadeCartao" name="validadeCartao" required>
                </div>
                <div>
                    <label for="codigoSeguranca">Código de Segurança:</label>
                    <input type="text" id="codigoSeguranca" name="codigoSeguranca" required>
                </div>
                <div>
                    <label for="parcelas">Número de Parcelas:</label>
                    <select id="parcelas" name="parcelas" required>
                        <option value="1">1x</option>
                        <option value="2">2x</option>
                        <option value="3">3x</option>
                        <option value="4">4x</option>
                        <option value="5">5x</option>
                    </select>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        `;
    }

    pagamentoDetalhes.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'finalizarCompra') {
            pagamentoDetalhes.style.display = 'none';
            processamento.style.display = 'block';
            
            setTimeout(function() {
                processamento.style.display = 'none';
                sucesso.style.display = 'block';
            }, 5000);
        }
    });

    document.getElementById('formCartao')?.addEventListener('submit', function(event) {
        event.preventDefault();
        pagamentoDetalhes.style.display = 'none';
        processamento.style.display = 'block';
        
        setTimeout(function() {
            processamento.style.display = 'none';
            sucesso.style.display = 'block';
        }, 5000);
    });
});
