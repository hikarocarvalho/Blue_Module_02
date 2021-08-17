function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click',(e) =>{
        if(e.target.id == modalID || e.target.classList == 'fechar' ) {
            modal.classList.remove('mostrar');
        }

    });    
}

const CadastroIrmao = document.querySelector('.menu-cadastro_usuario');
CadastroIrmao.addEventListener('click',function() {
    iniciaModal('modal_cadastro');

})



