import {
  getPopularMovies,
  getGanres,
} from '../../api-services/movies-api-service';
import { createPagi } from '../pagination';
export { galleryConteiner, createMoviesMarkup }

const galleryConteiner = document.querySelector('.movies__list');

function createMoviesMarkup({ results }) {
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
    <div class="movies__card-text">
      <p class="movies__card-genres">${genre_ids}</p>
      <p class="movies__card-release">${release_date}</p>
    </div>
  </li>`
    )
    .join('');
  galleryConteiner.insertAdjacentHTML('beforeend', markup);
}
getPopularMovies()
  .then(({ data }) => { createMoviesMarkup(data); totalRes = data.total_results;  createPagi(totalRes)})
  .catch(error => console.log(error));
  

// getPopularMovies()
//   .then(({ data }) => createMoviesMarkup(data))
//   .catch(error => console.log(error));

getGanres()
  .then(({ data }) => console.log(data))
  .catch(error => console.log(error));
