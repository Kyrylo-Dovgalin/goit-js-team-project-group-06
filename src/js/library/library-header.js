import { fetchById } from '../../api-services/movies-api-service';
const addWatchedBtn = document.querySelector(
  '.library__btns-btn[data-add="watched"]'
);
const addQueueBtn = document.querySelector(
  '.library__btns-btn[data-add="queue"]'
);

addWatchedBtn.addEventListener('click', onAddWatchedBtn);
addQueueBtn.addEventListener('click', onAddQueueBtn);

function onAddWatchedBtn() {
  addQueueBtn.classList.remove('library__btns-btn--active');
  addWatchedBtn.classList.add('library__btns-btn--active');
  document.querySelector('.library-list').innerHTML = '';
  const parsedWathcedFilms = JSON.parse(localStorage.getItem('WatchedFilms'));

  const arrLocalFilms = parsedWathcedFilms.map(id => {
    return fetchById(id).then(r => {
      markup(r);
    });
  });
}

function onAddQueueBtn() {
  addWatchedBtn.classList.remove('library__btns-btn--active');
  addQueueBtn.classList.add('library__btns-btn--active');
  document.querySelector('.library-list').innerHTML = '';
  const parsedQueueFilms = JSON.parse(localStorage.getItem('QueueFilms'));
  console.log('🚀 ~ onAddQueueBtn ~ parsedQueueFilms', parsedQueueFilms);

  const arrLocalFilms = parsedQueueFilms.map(id => {
    return fetchById(id).then(r => {
      markup(r);
    });
  });
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
      }, '')} | ${release_date}</p>
    </li>`;

  return document
    .querySelector('.library-list')
    .insertAdjacentHTML('beforeend', markup);
}
