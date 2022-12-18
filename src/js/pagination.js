import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getPopularMovies } from '../api-services/movies-api-service';
import { galleryConteiner, createMoviesMarkup, createMoviesMarkupKey } from './home/home-movies';
export { createPagi, createPagiKey };
function createPagi(total) {
  const pagination = new Pagination(
    document.getElementById('tui-pagination-container'),
    {
      totalItems: total,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
    }
  );
  pagination.on('afterMove', event => {
    galleryConteiner.innerHTML = '';
    const currentPage = event.page;
    createMoviesMarkup(currentPage);
  });
}
function createPagiKey(searchQuery, total) {
  const pagination = new Pagination(
    document.getElementById('tui-pagination-container'),
    {
      totalItems: total,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
    }
  );
  pagination.on('afterMove', event => {
    galleryConteiner.innerHTML = '';
    const currentPage = event.page;
    
    createMoviesMarkupKey(searchQuery,currentPage);
  });
}