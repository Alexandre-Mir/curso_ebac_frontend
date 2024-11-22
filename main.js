// Seleciona os elementos do formulário
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

function mostraMensagem(texto, tipo){
    mensagem.textContent = texto;
    mensagem.className = tipo;
    mensagem.style.display = 'block';
}

formulario.addEventListener('submit', function (e) {
    // Obtém os valores de Campo A e Campo B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Valida se Campo B é maior que Campo A
    if (campoB > campoA) {
        // Mensagem positiva
        mostraMensagem('Campo B é maior que Campo A!','success')

        // Impede o envio do formulário
        e.preventDefault();
    } else {
        // Mensagem negativa
        mostraMensagem('Campo B deve ser maior que Campo A.', 'error')

        // Impede o envio do formulário
        e.preventDefault();
    }
});