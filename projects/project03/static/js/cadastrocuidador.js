let inputNome = document.getElementById('InputNome')
let nomeOk = false

inputNome.addEventListener('keydown', () => { 
    /* Verifica se o tamanho do valor do inputNome é menor que 2 */
    if(inputNome.value == '') {
        inputNome.style.borderColor = 'red'; /* Troca a cor da borda do input para red */
        nomeOk = false
    } else {
        inputNome.style.borderColor = 'white'; /* Troca a cor da borda do input para green */
        nomeOk = true;
    }

    /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }

 })