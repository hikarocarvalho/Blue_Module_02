let inputNome = document.getElementById('InputNome')
let nomeOk = false
let inputIdade = document.getElementById('input_idade')
let idadeOk = false
let inputRacao = document.getElementById('input_racao')
let racaoOk = false
let inputMedicamento = document.getElementsById('input_medicamento')
let textoMedicamento = document.getElementsById('texto_medicamento')
textoMedicamento.disabled = true
let inputNecessidade = document.getElementById('input_necessidade')
let textoNecessidade = document.getElementById('texto_necessidade')
textoNecessidade.disabled = true
let btnFinalizar = document.getElementById('FinalizaCadastro')
btnFinalizar.disabled = true

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
    if (nomeOk && idadeOk && racaoOk) {
        btnFinalizar.disabled = false
    } else { /* se não, desabilita */
        btnFinalizar.disabled = true
    }

 })

 inputIdade.addEventListener('keydown', () => {
    if (inputIdade.value.length == 0 || inputIdade.value < 0){
        inputIdade.style.borderColor = 'red';
        idadeOk = false
    } else {
        inputCPF.style.borderColor = 'white';
        idadeOk = true
    }

    if (nomeOk && idadeOk && racaoOk) {
       btnFinalizar.disabled = false
   } else { /* se não, desabilita */
       btnFinalizar.disabled = true
   }
})

inputRacao.addEventListener('keydown', () => { 
    /* Verifica se o tamanho do valor do inputNome é menor que 2 */
    if(inputRacao.value == '') {
        inputRacao.style.borderColor = 'red'; /* Troca a cor da borda do input para red */
        racaoOk = false
    } else {
        inputRacao.style.borderColor = 'white'; /* Troca a cor da borda do input para green */
        racaoOk = true;
    }

    /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && idadeOk && racaoOk) {
        btnFinalizar.disabled = false
    } else { /* se não, desabilita */
        btnFinalizar.disabled = true
    }

 })

if (inputMedicamento.value === 'Sim') {
    textoMedicamento.disabled = false
}

if (inputNecessidade === 'Sim') {
    textoNecessidade.disabled = false
}