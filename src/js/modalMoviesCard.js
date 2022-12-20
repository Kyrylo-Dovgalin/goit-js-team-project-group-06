// import axios from 'axios';
export { refs };
import { fetchById } from '../api-services/movies-api-service';
import Notiflix, { Notify } from 'notiflix';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { fetchTrailer } from './trailer';
import { checkImg } from './home/home-movies';

const refs = {
  openModal: document.querySelector('.movies__list'),
  closeModalBtn: document.querySelector('.button-close'),
  backdrop: document.querySelector('.backdrop-movie'),
  movieCard: document.querySelector('.movie-card'),
};
const instance = basicLightbox.create(refs.backdrop);

refs.openModal.addEventListener('click', searchIdforMovie);

//Получаем данные по ID фильма и после того как приходят данные по запросу рендерим данные в модалку

async function searchIdforMovie(e) {
  if (e.target.nodeName === 'LI') {
    const idMovie = e.target.id;
    const response = await fetchById(idMovie);

    createMarkupMovieCardInModal(response);
  }
  if (
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H2' ||
    e.target.nodeName === 'P'
  ) {
    const idMovie = e.target.parentElement.id;
    const response = await fetchById(idMovie);
    // Тут уже беру ID фильма на который нажал idMovie
    createMarkupMovieCardInModal(response);
    instance.show();
    refs.closeModalBtn.addEventListener('click', instance.close);

    document
      .querySelector(`[data-add="wathced"]`)
      .addEventListener('click', onAddToWatched);

    document
      .querySelector(`[data-add="queue"]`)
      .addEventListener('click', onAddToQueue);

    const trailerButton = document.querySelector('.button-open-trailer');

    trailerButton.addEventListener(`click`, clickTrailer);
  }
}

function clickTrailer(event) {
  event.preventDefault();

  const filmIdToLS = document.querySelector(`[data-add="wathced"]`).dataset.id;

  fetchTrailer(filmIdToLS).then(data => {if (data.data.results.length>0) { window.open(
    `https://www.youtube.com/watch?v=${data.data.results[0].key}`,
    '_blank' );}
    else {Notify.failure('Sorry, but there is no trailer for this movie'); }
  });
  
}

function createMarkupMovieCardInModal({
  poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  genres,
  overview,
  popularity,
  id,
}) {
  const movieGenres = genres.map(({ name }) => name).join(', ');

  const markup = `<div class="movie-card">
  <div class="movie-card_request">
    <div class="movie-card_img-cover">
      <img
      class="movie-card_photo"
      src="${checkImg(poster_path)}"
      alt="${title}"
    />
      <button type="button" class="button-open-trailer"></button>
    </div>
  </div>
  <div class="movie-description">
    <h2 class="movie-title">${title}</h2>
    <table class="movie-table">
      <tbody>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Vote/Votes</p>
          </td>
          <td>
            <p>
              <span movie-table_vote>${vote_average} / ${vote_count}</span>
            </p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Popularity</p>
          </td>
          <td>
            <p>${popularity}</p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Original Title</p>
          </td>
          <td>
            <p>${original_title}</p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Genre</p>
          </td>
          <td>
            <p>${movieGenres}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="movie-about_container">
    <h3 class="movie-about">About</h3>
    <p class="movie-about_text">${overview}</p>
  </div>
    <ul class="movie-list">
      <li class="movie-item">
        <button type="button" class="movie-item_button" data-id=${id} data-add="wathced">ADD TO WATHED</button>
      </li>
      <li class="movie-item">
        <button type="button" class="movie-item_button" data-id=${id} data-add="queue">ADD TO QUEUE</button>
       </li>
    </ul>
  </div>
</div>`;

  refs.movieCard.innerHTML = markup;
}

function onAddToWatched(e) {
  const filmIdToLS = document.querySelector(`[data-add="wathced"]`).dataset.id;

  const parsedWathcedFilms = JSON.parse(localStorage.getItem('WatchedFilms'));
  if (parsedWathcedFilms === null) {
    Notiflix.Report.success('','Film added to WATCHED');
    localStorage.setItem('WatchedFilms', JSON.stringify([filmIdToLS]));
  }
  if (parsedWathcedFilms.includes(filmIdToLS)) {
    Notiflix.Report.failure(
      '',
      'The movie has already been added to the list!'
    );
    return;
  }

  parsedWathcedFilms.push(filmIdToLS);
  Notiflix.Report.success('','Film added to WATCHED');
  localStorage.setItem('WatchedFilms', JSON.stringify(parsedWathcedFilms));
}
function onAddToQueue() {
  const filmIdToLS = document.querySelector(`[data-add="queue"]`).dataset.id;

  const parsedQueueFilms = JSON.parse(localStorage.getItem('QueueFilms'));
  if (parsedQueueFilms === null) {
    localStorage.setItem('QueueFilms', JSON.stringify([filmIdToLS]));
  }
  if (parsedQueueFilms.includes(filmIdToLS)) {
    return Notiflix.Report.failure(
      '',
      'The movie has already been added to the queue!'
    );
  }

  parsedQueueFilms.push(filmIdToLS);
   Notiflix.Report.success('', 'Film added to QUEUE');
  localStorage.setItem('QueueFilms', JSON.stringify(parsedQueueFilms));
}
