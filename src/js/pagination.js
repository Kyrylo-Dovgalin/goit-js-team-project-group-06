import Pagination from 'tui-pagination';
import { getPopularMovies } from '../api-services/movies-api-service';
import {
  galleryConteiner,
  createMoviesMarkup,
  createMoviesMarkupKey,
} from './home/home-movies';
export { createPagi, createPagiKey };

function createPagi(total) {
  const options = {
    totalItems: total,
    page: 1,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</strong > ',
      page:
        '<a href="1" class="tui-page-btn page"> ' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</a>',
      moveButton:
        '<a href="movebutton" class="tui-page-btn  tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">&#8592;</span>' +
        '</a>',
      moreButton:
        '<a href="moreButton" class="tui-page-btn  tui-{{type}}-is-ellip"> ' +
        '<span class="tui-ico-ellip moreButton">...</span>' +
        '</a>',

      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} disabledMoveButton">' +
        '<span class="tui-ico-{{type}} disabledMoveButton"></span>' +
        '</span>',
    },
  };
  const pagination = new Pagination(
    document.getElementById('tui-pagination-container'),
    options
  );
  pagination.on('afterMove', event => {
    galleryConteiner.innerHTML = '';
    const currentPage = event.page;
    createMoviesMarkup(currentPage);
  });
}
function createPagiKey(searchQuery, total) {
  const options = {
    totalItems: total,
    page: 1,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</strong > ',
      page:
        '<a href="1" class="tui-page-btn page"> ' +
        '<span class="tui-ico-page">{{page}}</span>' +
        '</a>',
      moveButton:
        '<a href="movebutton" class="tui-page-btn  tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">&#8592;</span>' +
        '</a>',
      moreButton:
        '<a href="moreButton" class="tui-page-btn  tui-{{type}}-is-ellip"> ' +
        '<span class="tui-ico-ellip moreButton">...</span>' +
        '</a>',

      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} disabledMoveButton">' +
        '<span class="tui-ico-{{type}} disabledMoveButton"></span>' +
        '</span>',
    },
  };
  const pagination = new Pagination(
    document.getElementById('tui-pagination-container'),
    options
  );
  pagination.on('afterMove', event => {
    galleryConteiner.innerHTML = '';
    const currentPage = event.page;

    createMoviesMarkupKey(searchQuery, currentPage);
  });
}
