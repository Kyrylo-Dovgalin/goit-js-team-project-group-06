import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onKeyWord } from '../../api-services/movies-api-service';
import { createMoviesMarkupKey, galleryConteiner } from './home-movies';
import { createPagiKey } from '../pagination';

const refs = {
  searchForm: document.querySelector('.header__form'),
};

let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value;
  page = 1;
  galleryConteiner.innerHTML = '';

  if (!searchQuery) {
    notifyInfoSearch();
    return;
  }

  await onKeyWord(searchQuery, page)
    .then(({ data }) => {
      createMoviesMarkupKey(searchQuery, page);
      const totalRes = data.total_results;
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
