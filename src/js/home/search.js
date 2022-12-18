import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onKeyWord } from '../../api-services/movies-api-service';
import { createMoviesMarkupKey, galleryConteiner } from './home-movies';
import { createPagiKey } from '../pagination';

export { searchQuery };

const refs = {
  searchForm: document.querySelector('.header__form'),
  tuiPagination: document.querySelector('.tui-pagination'),
};

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value;
  page = 1;
  galleryConteiner.innerHTML = '';

  if (!searchQuery) {
    notifyInfoSearch();
    refs.tuiPagination.classList.add('is-hidden');
    return;
  }

  await onKeyWord(searchQuery, page)
    .then(({ data }) => {
      const totalRes = data.total_results;
      if (!totalRes) {
        notifyFailure();
        refs.tuiPagination.classList.add('is-hidden');
        return;
      }

      createMoviesMarkupKey(searchQuery, page);
      createPagiKey(searchQuery, totalRes);
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.searchForm.reset();
    });
}

const notifyInfoSearch = () => {
  return Notify.info('Please, fill out this field!', { timeout: 4000 });
};

const notifyFailure = () => {
  return Notify.failure(
    'Search result not successful. Enter the correct movie name!',
    { timeout: 4000 }
  );
};
