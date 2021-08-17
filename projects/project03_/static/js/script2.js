function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click',(e) =>{
        if(e.target.id == modalID || e.target.classList == 'fechar' ) {
            modal.classList.remove('mostrar');
        }
    });    
}

const login = document.querySelector('.menu_conectar');
login.addEventListener('click',function() {
    iniciaModal('modal_login');

})

const CadastroIrmao = document.querySelector('.menu-cadastro_usuario');
CadastroIrmao.addEventListener('click',function() {
    iniciaModal('modal_cadastro');

})

let inputLogin = document.getElementById('login_email');
let loginOk = false;
let inputLoginSenha = document.getElementById('senha');
let loginsenhaOk = false;
let btnLogin = document.getElementById('FazerLogin');
btnLogin.disabled = true;

inputLogin.addEventListener('keydown', () => {
    if(inputLogin.value.indexOf('@') == 0 || inputLogin.value.indexOf('.') ==0 || inputLogin.value == '') {
       inputLogin.style.borderColor = 'red'; /* Troca a cor da borda do input para red */
       loginOk = false;
    } else {
       inputLogin.style.borderColor = 'white'; /* Troca a cor da borda do input para green */
       loginOk = true;
    }  
 
    /* Se todas as variáveis forem true habilita o botão */
    if (loginOk && loginsenhaOk) {
        btnLogin.disabled = false;
    } else { /* se não, desabilita */
        btnLogin.disabled = true;
    }
 })

 inputLoginSenha.addEventListener('keydown', () => {
     if(inputLoginSenha.value.length < 6 || inputLoginSenha.value.indexOf(' ') >= 0){
         inputLoginSenha.style.borderColor = 'red';
         loginsenhaOk = false;
     } else {
         inputLoginSenha.style.borderColor = 'white';
         loginsenhaOk = true;
     }

     /* Se todas as variáveis forem true habilita o botão */
    if (loginOk && loginsenhaOk) {
        btnLogin.disabled = false;
    } else { /* se não, desabilita */
        btnLogin.disabled = true;
    }
 })