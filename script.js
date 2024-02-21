const modal = document.querySelector('.modal');

const fecharModal = document.querySelector('.botao-fechar-modal');

const abrirModal = document.querySelector('.botao-chamada');

abrirModal.addEventListener('click', () => {
  modal.showModal();
});


fecharModal.addEventListener('click', () => {
  modal.close();
});