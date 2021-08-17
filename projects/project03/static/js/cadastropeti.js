function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click',(e) =>{
        if(e.target.id == modalID || e.target.classList == 'fechar' ) {
            modal.classList.remove('mostrar');
        }

    });    
}
const CadastroIrmao = document.querySelector('.menu-cadastro_pet');
CadastroIrmao.addEventListener('click',function() {
    iniciaModal('modal_cadastro_pet');

})
const cadastro_trab = document.querySelector('.menu-cadastro_trab');
cadastro_trab.addEventListener('click',function() {
    iniciaModal('modal_cadastro_trab');

})
const fechar = document.querySelector('.fechar');
fechar.addEventListener('click',function() {
    getElementById('modal_cadastro_trab').classList.remove('mostrar');

})
