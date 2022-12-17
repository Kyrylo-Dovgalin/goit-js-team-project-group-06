const refs = {
  // openModalBtn: document.querySelector('[data-modal-open]'), commented by Kyrylo
  openModalBtn: document.querySelector('.js-team-modal-open'), // added by KYRYLO
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal-group]'),
  body: document.querySelector('[data-page]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

// function toggleModal() {
//   reference.modal.classList.toggle('is-hidden');
// }

function openModal(e) {
  e.preventDefault();
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', event => closeModalEscape(event));
  refs.modal.addEventListener('click', closeModalBackdrop);
  refs.body.classList.add('no-scroll');
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', event => closeModalEscape(event));
  refs.modal.removeEventListener('click', closeModalBackdrop);
  refs.body.classList.remove('no-scroll');
}

function closeModalEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}

function closeModalBackdrop(event) {
  if (event.target.classList.value !== 'backdrop') {
    return;
  }
  closeModal();
}
