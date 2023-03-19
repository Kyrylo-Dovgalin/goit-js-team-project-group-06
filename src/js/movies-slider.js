import * as basicLightbox from 'basiclightbox';
import { glide } from './glide-slider';
import { fetchTrailerSlider } from './trailer';
import {KEY} from './localStorageKey';
import { getTrendMovies } from '../api-services/movies-api-service';

const refs = {
  slidesList: document.querySelector('.glide__slides'),
}

  export async function renderSliderMovies() {
    const {results} = await getTrendMovies()
      markupMoviesSliderCard(results);
  }

  renderSliderMovies();

function markupMoviesSliderCard(results) {
  const markup = results.map(({ title, poster_path, id }) => {
  return `
    <li class="movies-slides__item">
    <img class="movies-slides__img"
    src="https://image.tmdb.org/t/p/w500${poster_path}"
    alt="${title}"
    data-id="${id}"
    width="143.25"
    height ="214.8"
    />

    <button data-id="${id}" class="button-open-trailer-slider" type="button"></button>
    </li>`
  }).join('');

   refs.slidesList.innerHTML = markup;
   glide.mount();
   showSliderTrailer(document.querySelectorAll('.button-open-trailer-slider'))
}


function showSliderTrailer(trailer) {
  trailer.forEach(item => {
    item.addEventListener('click', event => {
      fetchTrailerSlider(event.target.dataset.id);

  const getTrailerKey = localStorage.getItem(KEY);

  const { key } = JSON.parse(getTrailerKey);

  const instance = basicLightbox.create(`
  <div class="close-btn-trailer"></div>
  <iframe  width="660" height="415" src='https://www.youtube.com/embed/${key}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
  instance.show();

  const closeBtnTrailer = document.querySelector('.close-btn-trailer');
  closeBtnTrailer.addEventListener('click', () => {
    instance.close();
  });
    });
  });
}


