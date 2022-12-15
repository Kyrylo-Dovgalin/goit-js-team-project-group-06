import SimpleSlider from 'simpleslider-js';
import 'simpleslider-js/dist/simpleslider.min.css';
// import SimpleLightbox from 'simplelightbox';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    gallery: document.querySelector('.gallery'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      new SimpleSlider('.simple-slider-first');
      //   let gallery = new SimpleLightbox('.gallery a');
      //   gallery.on('show.simplelightbox', function () {
      //     // Do something…
      //   });
    }
  }
})();
