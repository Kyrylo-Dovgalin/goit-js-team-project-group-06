import './js/header';
import './js/search';
import { createMoviesMarkup } from './js/movies';
import { getPopularMovies, getGanres } from './api-services/movies-api-service';
getPopularMovies().then(({ data }) => createMoviesMarkup(data));

getGanres().then(({ data }) => console.log(data));
