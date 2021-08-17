let inputNome = document.getElementById('InputNome')
let nomeOk = false
let inputSobrenome = document.getElementById('InputSobrenome')
let sobrenomeOk = false
let inputCPF = document.getElementById('InputCPF')
let cpfOk = false
let inputEmail = document.getElementById('InputEmail')
let emailOk = false
let inputSenha = document.getElementById('Inputsenha')
let senhaOk = false
let confirmaSenha = document.getElementById('InputSenhaConfirmacao')
let confirmasenhaOk = false
let inputEndereco = document.getElementById('InputEndereco')
let enderecoOk = false
let inputNum = document.getElementById('inputNum')
let numOk = false
let inputCEP = document.getElementById('InputCEP')
let cepOk = false
let inputNasc = document.getElementById('InputDataNascimento')
let nascOk = false
let btnEnviar = document.getElementById('EnviarCadastro')
btnEnviar.disabled = true

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

 inputSobrenome.addEventListener('keydown', () => { 
    /* Verifica se o tamanho do valor do inputNome é menor que 2 */
    if(inputSobrenome.value == '') {
        inputSobrenome.style.borderColor = 'red'; /* Troca a cor da borda do input para red */
        sobrenomeOk = false
    } else {
        inputSobrenome.style.borderColor = 'white'; /* Troca a cor da borda do input para green */
        sobrenomeOk = true;
    }

    /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 inputCPF.addEventListener('keydown', () => {
     if (inputCPF.value.length < 11 || inputCPF.value < 0){
         inputCPF.style.borderColor = 'red';
         cpfOk = false
     } else {
         inputCPF.style.borderColor = 'white';
         cpfOk = true
     }

     if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 inputEmail.addEventListener('keydown', () => {
    if(inputEmail.value.indexOf('@') == 0 || inputEmail.value.indexOf('.') ==0) {
       inputEmail.style.borderColor = 'red' /* Troca a cor da borda do input para red */
       emailOk = false
    } else {
       inputEmail.style.borderColor = 'white' /* Troca a cor da borda do input para green */
       emailOk = true
    }  
 
    /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 inputSenha.addEventListener('keydown', () => {
     if(inputSenha.value.length < 6 || inputSenha.value.indexOf(' ') >= 0){
         inputSenha.style.borderColor = 'red'
         senhaOk = false
     } else {
         inputSenha.style.borderColor = 'white'
         senhaOk = true
     }

     /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 confirmaSenha.addEventListener('keydown', () => {
     if(confirmaSenha.value === inputSenha.value) {
         confirmaSenha.style.borderColor = 'white'
         confirmasenhaOk = true
     } else {
         confirmaSenha.style.borderColor = 'red'
         confirmasenhaOk = false
     }

     /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 inputEndereco.addEventListener('keydown', () => { 
    /* Verifica se o tamanho do valor do inputNome é menor que 2 */
    if(inputEndereco.value == '') {
        inputEndereco.style.borderColor = 'red'; /* Troca a cor da borda do input para red */
        enderecoOk = false
    } else {
        inputEndereco.style.borderColor = 'white'; /* Troca a cor da borda do input para green */
        enderecoOk = true;
    }

    /* Se todas as variáveis forem true habilita o botão */
    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
        btnEnviar.disabled = false
    } else { /* se não, desabilita */
        btnEnviar.disabled = true
    }
 })

 inputNum.addEventListener('keydown', () => {
    if (inputNum.value == '' || inputNum.value < 0){
        inputNum.style.borderColor = 'red';
        numOk = false
    } else {
        inputNum.style.borderColor = 'white';
        numOk = true
    }

    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
       btnEnviar.disabled = false
   } else { /* se não, desabilita */
       btnEnviar.disabled = true
   }
 })

 inputCEP.addEventListener('keydown', () => {
    if (inputCEP.value.length < 8 || inputCEP.value < 0){
        inputCEP.style.borderColor = 'red';
        cepOk = false
    } else {
        inputCEP.style.borderColor = 'white';
        cepOk = true
    }

    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
       btnEnviar.disabled = false
   } else { /* se não, desabilita */
       btnEnviar.disabled = true
   }
 })

 inputNasc.addEventListener('keydown', () => {
    if (inputNasc.value == '') {
        inputNasc.style.borderColor = 'red';
        nascOk = false
    } else {
        inputNasc.style.borderColor = 'white';
        nascOk = true
    }

    if (nomeOk && sobrenomeOk && cpfOk && emailOk && senhaOk && confirmasenhaOk && enderecoOk && numOk && cepOk && nascOk) {
       btnEnviar.disabled = false
   } else { /* se não, desabilita */
       btnEnviar.disabled = true
   }
})