import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const trailerButton = document.querySelector(`.button-open-trailer`);
const API_KEY = `f983fc840eb543faba07dcbe6db19b0b`;
const base_url = `https://api.themoviedb.org/3/movie/`;
const fetchTrailer = async id => {
  return axios.get(`${base_url}${id}/videos?api_key=${API_KEY}&language=en-US`);
};
trailerButton.addEventListener(`click`, clickTrailer);
function clickTrailer(event) {
  event.preventDefault();
  fetchTrailer(id, 1).then(data => {
    console.log(data.data.results[0].key),
      window.open(
        `https://www.youtube.com/watch?v=${data.data.results[0].key}`,
        '_blank'
      );
    if (data.data.results.length == 0) {
      Notify.failure(`Oops, no trailer for this film`);
      trailerButton.disabled = true;
    }
  });
}
