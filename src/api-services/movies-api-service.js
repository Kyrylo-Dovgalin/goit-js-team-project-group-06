import axios from 'axios';
export { getPopularMovies, getGanres, BASE_URL, API_KEY};
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';
const getPopularMovies = async () => {
  return await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};
// Запрос на массив объектов жанров, его нужно отфильтровать относительно id которые приходят с запроса getPopularMovies в свойстве genre_ids. Ну и зарэндерить в разметку
const getGanres = async () => {
  return await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
};
