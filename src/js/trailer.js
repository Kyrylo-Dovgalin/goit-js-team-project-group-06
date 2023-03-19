import axios from 'axios';
import {KEY} from './localStorageKey';

const API_KEY = `f983fc840eb543faba07dcbe6db19b0b`;
const base_url = `https://api.themoviedb.org/3/movie/`;

export const fetchTrailer = async id => {
  return axios.get(`${base_url}${id}/videos?api_key=${API_KEY}&language=en-US`);
};

export async function fetchTrailerSlider(id) {
  let trailerKey = '';
  try {
    const response = await axios.get(`${base_url}${id}/videos?api_key=${API_KEY}&language=en-US`);
     const data = response.data.results;
    console.log('response', data);
    data.forEach(data => {
      if (data.type === 'Trailer') {
        trailerKey = {
          key: data.key,
        };
      }
    });
    localStorage.setItem(KEY, JSON.stringify(trailerKey));
  } catch (error) {
    console.error(error);
  }
}