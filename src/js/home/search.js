import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import { onKeyWord } from '../../api-services/movies-api-service';
import { createMoviesMarkupKey, galleryConteiner } from './home-movies';
import { createPagiKey } from '../pagination';

export { searchQuery };

const refs = {
  searchForm: document.querySelector('.header__form'),
  tuiPagination: document.querySelector('.tui-pagination'),
  moviesSection: document.querySelector('.movies'),
};

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value;
  page = 1;
  galleryConteiner.innerHTML = '';
  refs.tuiPagination.classList.add('is-hidden');

  if (!searchQuery) {
    notifyInfoSearch();
    return;
  }

  await onKeyWord(searchQuery, page)
    .then(({ data }) => {
      const totalRes = data.total_results;

      if (!totalRes) {
        notifyFailure();
        return;
      }
      if (totalRes <= 20) {
        refs.moviesSection.classList.add('movies--padding');
        createMoviesMarkupKey(searchQuery, page);
        return;
      }

      refs.moviesSection.classList.remove('movies--padding');
      createMoviesMarkupKey(searchQuery, page);
      createPagiKey(searchQuery, totalRes);
      refs.tuiPagination.classList.remove('is-hidden');
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.searchForm.reset();
    });
}

const notifyInfoSearch = () => {
  return Notiflix.Report.info(
    'Empty query 🧐',
    'Please, fill out this field!',
    {
      timeout: 4000,
    }
  );
};

const notifyFailure = () => {
  return Notiflix.Report.failure(
    'Ooops 😕',
    'Search result not successful. Enter the correct movie name',
    {
      timeout: 4000,
    }
  );
};
