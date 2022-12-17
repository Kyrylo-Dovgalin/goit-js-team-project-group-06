const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal-group]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

// function toggleModal() {
//   reference.modal.classList.toggle('is-hidden');
// }

function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', event => closeModalEscape(event));
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', event => closeModalEscape(event));
}

function closeModalEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}
