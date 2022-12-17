// import axios from 'axios';
export { refs };
import { fetchById } from '../api-services/movies-api-service';

const refs = {
  openModal: document.querySelector('.movies__list'),
  closeModalBtn: document.querySelector('.button-close'),
  backdrop: document.querySelector('.backdrop-movie'),
  movieCard: document.querySelector('.movie-card'),
  movieContainer: document.querySelector('.modal-movie'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('[data-page]'),
};

refs.openModal.addEventListener('click', openModal);

function openModal(event) {
  setTimeout(() => {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.add('no-scroll');
    refs.closeModalBtn.addEventListener('click', closeModal);
    refs.backdrop.addEventListener('click', closeModalEscape);
    refs.backdrop.addEventListener('click', closeModalBackdrop);
    refs.backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', event => closeModalEscape(event));
    refs.backdrop.classList.remove('is-hidden');
    refs.backdrop.classList.add('backdrop-movie');
    refs.movieContainer.classList.remove('is-hidden');
  }, 500);
}

function closeModal(event) {
  refs.backdrop.classList.add('is-hidden');
  refs.backdrop.firstElementChild.classList.add('is-hidden');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.backdrop.removeEventListener('click', closeModal);
  refs.backdrop.removeEventListener('click', closeModalEscape);
  document.removeEventListener('keydown', event => closeModalEscape(event));
  refs.backdrop.classList.remove('backdrop-movie');
  refs.body.classList.remove('no-scroll');
}

function closeModalBackdrop(event) {
  if (event.target.classList.value !== 'backdrop-movie') {
    return;
  }
  closeModal();
}

function closeModalEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}

// const localStorageMovies = (key, value) => {
//   try {
//     if (typeof value === 'string') {
//       localStorage.setItem(key, value);
//     } else {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getFromLocalStorage = key => {
//   try {
//     return JSON.parse(localStorage.getItem(key));
//   } catch (error) {
//     console.error(error);
//   }
// };

// const removeLocalFromStorage = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error(error);
//   }
// };

// Добавляем слушателя событий на список с карточками фильмов

const cardMovie = document.querySelector('.movies__list');
cardMovie.addEventListener('click', searchIdforMovie);

//Получаем данные по ID фильма и после того как приходят данные по запросу рендерим данные в модалку

async function searchIdforMovie(e) {
  if (e.target.nodeName === 'P') {
    const idMovie = e.target.parentElement.parentElement.id;
    const response = await fetchById(idMovie);
  }
  if (e.target.nodeName === 'LI') {
    const idMovie = e.target.id;
    const response = await fetchById(idMovie);
  }
  if (
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H2'
  ) {
    const idMovie = e.target.parentElement.id;
    const response = await fetchById(idMovie);
    console.log(response);
  }
}
