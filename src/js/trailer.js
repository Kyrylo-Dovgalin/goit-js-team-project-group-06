import axios from 'axios';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { fetchTrailer, clickTrailer };
let idTrailer;

const API_KEY = `f983fc840eb543faba07dcbe6db19b0b`;
const base_url = `https://api.themoviedb.org/3/movie/`;

const fetchTrailer = async id => {
  return axios.get(`${base_url}${id}/videos?api_key=${API_KEY}&language=en-US`);
};

