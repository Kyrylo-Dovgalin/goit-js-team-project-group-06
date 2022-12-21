import { fetchById } from '../../api-services/movies-api-service';
import { dotaReleaseCheck } from '../home/home-movies';
import { refs } from '../modalMoviesCard';
const addWatchedBtn = document.querySelector(
  '.library__btns-btn[data-add="watched"]'
);
const addQueueBtn = document.querySelector(
  '.library__btns-btn[data-add="queue"]'
);

import Notiflix from 'notiflix';

addWatchedBtn.addEventListener('click', onAddWatchedBtn);
addQueueBtn.addEventListener('click', onAddQueueBtn);

if (
  document.querySelector('.header__nav-link.active').textContent ===
  'My library'
) {
  onAddWatchedBtn();
  return
}

function onAddWatchedBtn() {
  addQueueBtn.classList.remove('library__btns-btn--active');
  addWatchedBtn.classList.add('library__btns-btn--active');
  document.querySelector('.library-list').innerHTML = '';
  const parsedWathcedFilms = JSON.parse(localStorage.getItem('WatchedFilms'));

  if (parsedWathcedFilms === null) {
    Notiflix.Report.failure('', 'You have to create a list first');
    return;
  } else {
    const arrLocalFilms = parsedWathcedFilms.map(id => {
      return fetchById(id).then(r => {
        markup(r);
      });
    });
  }
}

function onAddQueueBtn() {
  addWatchedBtn.classList.remove('library__btns-btn--active');
  addQueueBtn.classList.add('library__btns-btn--active');
  document.querySelector('.library-list').innerHTML = '';
  const parsedQueueFilms = JSON.parse(localStorage.getItem('QueueFilms'));

  if (parsedQueueFilms === null) {
    Notiflix.Report.failure('', 'You have to create a list first');
    return;
  } else {
    const arrLocalFilms = parsedQueueFilms.map(id => {
      return fetchById(id).then(r => {
        markup(r);
      });
    });
  }
}

function markup(r) {
  const { poster_path, title, id, release_date, genres } = r;

  const markup = `<li class="movies__card" id="${id}">
      <img
        class="movies__card-photo"
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        alt="${title}"
        loading="lazy"
        width="395px"
        height="354px"
      />
      <h2 class="movies__card-title">${title}</h2>
      <p class="movies__card-genres">${genres.reduce((acc, el) => {
        acc += `${el.name}, `;
        return acc;
      }, '')} | ${dotaReleaseCheck(release_date)}</p>
    </li>`;

  return document
    .querySelector('.library-list')
    .insertAdjacentHTML('beforeend', markup);
}

refs.closeModalBtn.addEventListener('click', updateMarkup);
document.addEventListener('keydown', event => closeModalEscape(event))
function closeModalEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  updateMarkup;
}

function updateMarkup() {
  if (addWatchedBtn.classList.contains('library__btns-btn--active')) {
  document.querySelector('.library-list').innerHTML = ''
    const parsedWathcedFilms = JSON.parse(localStorage.getItem('WatchedFilms'));
  const arrLocalFilms = parsedWathcedFilms.map(id => {
  return fetchById(id).then(r => {
  markup(r);
      });
  });
    return
  }

document.querySelector('.library-list').innerHTML = '';
  const parsedQueueFilms = JSON.parse(localStorage.getItem('QueueFilms'));
  const arrLocalFilms = parsedQueueFilms.map(id => {
      return fetchById(id).then(r => {
        markup(r);
      });
    });
  }