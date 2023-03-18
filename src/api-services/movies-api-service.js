import axios from 'axios';
import { Notify } from 'notiflix';
export { getPopularMovies, getTrendMovies, getGanres, BASE_URL, API_KEY, fetchById, onKeyWord };
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';
const getPopularMovies = async page => {
  return await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
};

async function getTrendMovies(page = 1) {
  try {
    const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
// Запрос на массив объектов жанров, его нужно отфильтровать относительно id которые приходят с запроса getPopularMovies в свойстве genre_ids. Ну и зарэндерить в разметку
const getGanres = async () => {
  return await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
};
// Запрос на поиск данных о фильме ID
async function fetchById(id) {
  const responce = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  const data = await responce.json();
  return data;
}

const onKeyWord = async (searchQuery, page) => {
  return await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`);
};



