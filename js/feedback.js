
const buttonfeeedbackOpen = document.querySelector('.button-contacts');
const modal = document.querySelector('.feedback-form');
const buttonfeeedbackClose = document.querySelector('.feedback-button-close');
const overlay = document.querySelector('.social-feedback')

document.querySelector('.button-contacts').addEventListener('click', () => {
  // откроем модальное окно
  overlay.classList.add('modal-show');
});

document.querySelector('.feedback-button-close').addEventListener('click', () => {
  overlay.classList.remove('modal-show');
});

document.addEventListener('keydown', () => {
  if ('evt'.key === 'Escape') {
  overlay.classList.remove('modal-show');
  }
});
