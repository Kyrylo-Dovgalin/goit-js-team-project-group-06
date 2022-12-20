import {
  getPopularMovies,
  getGanres,
  onKeyWord,
} from '../../api-services/movies-api-service';
import Notiflix from 'notiflix';
import { createPagi } from '../pagination';

export {
  galleryConteiner,
  createMoviesMarkup,
  createMoviesMarkupKey,
  dotaReleaseCheck,
  checkImg
};

const galleryConteiner = document.querySelector('.movies__list');
let page = 1;
async function createMoviesMarkup(page) {
  if (
    document.querySelector('.header__nav-link.active').textContent === 'Home'
  ) {
    const response = await getPopularMovies(page);
    const results = response.data.results;
    const arrGenerId = response.data.results.map(item => item.genre_ids);

    const genreResponse = await getGanres();
    const arrGener = genreResponse.data.genres;

    replaceIdtoGener(arrGener, arrGenerId);
    markup(results);
    return;
  }
}
getPopularMovies(page)
  .then(({ data }) => {
    createMoviesMarkup(page);
    const totalRes = data.total_results;
    createPagi(totalRes);
  })
  .catch(error => console.log(error));

async function createMoviesMarkupKey(searchQuery, page) {
  const response = await onKeyWord(searchQuery, page);
  const results = response.data.results;
  const arrGenerId = response.data.results.map(item => item.genre_ids);

  const genreResponse = await getGanres();
  const arrGener = genreResponse.data.genres;

  replaceIdtoGener(arrGener, arrGenerId);

  markup(results);
}

// Эти функции (под коментарием) можно вынести в отдельный файл.js/модуль
const markup = results => {
  const markup = results
    .map(
      ({
        poster_path,
        title,
        id,
        release_date,
        genre_ids,
      }) => `<li class="movies__card" id="${id}">
    <img
      class="movies__card-photo"
      src="${checkImg(poster_path)}"
      alt="${title}"
      loading="lazy"
      width="395px"
      height="354px"
    />
    <h2 class="movies__card-title">${title}</h2>
    <p class="movies__card-genres">${genre_ids.join(', ')} | ${dotaReleaseCheck(
        release_date
      )}</p>
  </li>`
    )
    .join('');
  return galleryConteiner.insertAdjacentHTML('beforeend', markup);
};

// Функция очистки галереи

const clearMarkup = () => {
  galleryConteiner.innerHTML = '';
};

// функции проверки значений приходящих в запросе

// Проверка даты релиза
const dotaReleaseCheck = value =>
  `${!value ? 'Unknown' : `${value.slice(0, 4)}`}`;

// Проверка фото
const checkImg = url =>
  `${
    !url
      ? `https://img.freepik.com/premium-vector/video-production-logo-fun-modern-black_434503-786.jpg?w=1060`
      : `https://image.tmdb.org/t/p/w500${url}`
  }`;
// функция для замены ID  на его название

function replaceIdtoGener(arrGener, arrGenerId) {
  arrGenerId.forEach(item => {
    for (let i = 0; i < item.length; i += 1) {
      for (let j = 0; j < arrGener.length; j += 1) {
        item[i] === arrGener[j].id ? (item[i] = arrGener[j].name) : item[i];
      }
    }
  });
}
