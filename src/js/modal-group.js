import { refs } from '../js/modalMoviesCard';
const reference = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

reference.openModalBtn.addEventListener('click', openModal);
reference.closeModalBtn.addEventListener('click', closeModal);

// function toggleModal() {
//   reference.modal.classList.toggle('is-hidden');
//   if (!reference.modal.classList.contains('is-hidden')) {
//     refs.classlist.remove('backdrop-movie');
//   }
// }
function openModal() {
  reference.modal.classList.remove('is-hidden');
  refs.backdrop.remove('is-hidden');
  refs.backdrop.remove('.backdrop-movie');
  console.log(reference.modal);
}

function closeModal() {
  reference.modal.classList.add('is-hidden');
}
