
const modalMain = document.getElementById('modal_main');
const successButton = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success')
const closeButtons = Array.from(document.querySelectorAll('.modal__close'));

modalMain.classList.add('modal_active');

closeButtons.forEach(closeButton => {
  closeButton.onclick = () => {
    closeButton.closest('.modal').classList.remove('modal_active') 
  }
})

successButton.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}
 
