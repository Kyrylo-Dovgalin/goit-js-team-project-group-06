import {
  getPopularMovies,
  getGanres,
  onKeyWord,
} from '../../api-services/movies-api-service';
import { createPagi } from '../pagination';

export { galleryConteiner, createMoviesMarkup, createMoviesMarkupKey };

const galleryConteiner = document.querySelector('.movies__list');
let page = 1;
async function createMoviesMarkup(page) {
  const response = await getPopularMovies(page);
  const results = response.data.results;
  const arrGenerId = response.data.results.map(item => item.genre_ids);

  const genreResponse = await getGanres();
  const arrGener = genreResponse.data.genres;

  replaceIdtoGener(arrGener, arrGenerId);

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
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="${title}"
      loading="lazy"
      width="395px"
      height="354px"
    />
    <h2 class="movies__card-title">${title}</h2>
    <p class="movies__card-genres">${genre_ids.join(
      ', '
    )} | ${release_date.slice(0, 4)}</p>
  </li>`
    )
    .join('');
  galleryConteiner.insertAdjacentHTML('beforeend', markup);
}
getPopularMovies(page)
  .then(({ data }) => {
    createMoviesMarkup(page);
    const totalRes = data.total_results;
    createPagi(totalRes);
  })
  .catch(error => console.log(error));

// getPopularMovies()
//   .then(({ data }) => createMoviesMarkup(data))
//   .catch(error => console.log(error));

// getGanres()
//   .then(({ data }) => console.log(data))
//   .catch(error => console.log(error));

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

async function createMoviesMarkupKey(searchQuery, page) {
  const response = await onKeyWord(searchQuery, page);
  const results = response.data.results;
  const arrGenerId = response.data.results.map(item => item.genre_ids);

  const genreResponse = await getGanres();
  const arrGener = genreResponse.data.genres;

  replaceIdtoGener(arrGener, arrGenerId);

  const markup = results
    .map(
      ({
        poster_path,
        title,
        release_date,
        genre_ids,
      }) => `<li class="movies__card">
    <img
      class="movies__card-photo"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="${title}"
      loading="lazy"
      width="395px"
      height="354px"
    />
    <h2 class="movies__card-title">${title}</h2>
    <p class="movies__card-genres">${genre_ids.join(
      ', '
    )} | ${release_date.slice(0, 4)}</p>
  </li>`
    )
    .join('');
  galleryConteiner.insertAdjacentHTML('beforeend', markup);
}
