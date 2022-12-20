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

// Добавляем слушателя событий на список с карточками фильмов

// const cardMovie = document.querySelector('.movies__list');
refs.openModal.addEventListener('click', searchIdforMovie);

//Получаем данные по ID фильма и после того как приходят данные по запросу рендерим данные в модалку

async function searchIdforMovie(e) {
  if (e.target.nodeName === 'P') {
    const idMovie = e.target.parentElement.parentElement.id;
    const response = await fetchById(idMovie);
    createMarkupMovieCardInModal(response);
  }
  if (e.target.nodeName === 'LI') {
    const idMovie = e.target.id;
    const response = await fetchById(idMovie);
    createMarkupMovieCardInModal(response);
  }
  if (
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H2'
  ) {
    const idMovie = e.target.parentElement.id;
    const response = await fetchById(idMovie);
    createMarkupMovieCardInModal(response);

  }
}

function createMarkupMovieCardInModal({poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  genres,
  overview,
  popularity,
  id,}) {
  
 console.log(genres);
  const movieGenres = genres.map(({ name }) => name).join(", ");
  
console.log(movieGenres);

  const markup = `<div class="movie-card">
  <div class="movie-card_request">
    <div class="movie-card_img-cover">
      <img
      class="movie-card_photo"
      src=https://image.tmdb.org/t/p/original${poster_path}
      alt="${title}"
    />
      <button class="button-open-trailer"></button>
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
        <button type="button" class="movie-item_button" data-id=${id}>ADD TO WATHED</button>
      </li>
      <li class="movie-item">
        <button type="button" class="movie-item_button" data-id=${id}>ADD TO QUEUE</button>
       </li>
    </ul>
  </div>
</div>`;

refs.movieCard.innerHTML = markup;
}


