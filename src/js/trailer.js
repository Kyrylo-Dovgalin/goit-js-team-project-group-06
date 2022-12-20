import axios from 'axios';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
let idTrailer;
const trailerButton = document.querySelector(`.button-open-trailer`);
const API_KEY = `f983fc840eb543faba07dcbe6db19b0b`;
const base_url = `https://api.themoviedb.org/3/movie/`;
const fetchTrailer = async id => {
  return axios.get(`${base_url}${id}/videos?api_key=${API_KEY}&language=en-US`);
};
trailerButton.addEventListener(`click`, clickTrailer);
function clickTrailer(event) {
  event.preventDefault();
  fetchTrailer(idTrailer, 1).then(data => {
    console.log(data.data.results[0].key),
    console.log(data.data.results.length),
      window.open(
        `https://www.youtube.com/watch?v=${data.data.results[0].key}`,
        '_blank'
      );
    if (data.data.results.length===0) { console.log(data.data.results.length)
      Notiflix.Report.failure('Ooops 😕', `Can not find trailer for this film`);
      
    }
  });
}
const cardMovieSearch = document.querySelector('.movies__list');
cardMovieSearch.addEventListener('click', searchIdMovieTrailer);



async function searchIdMovieTrailer(e) {
  if (e.target.nodeName === 'P') {
    const idMovie = e.target.parentElement.parentElement.id;
    idTrailer=idMovie
  }
  if (e.target.nodeName === 'LI') {
    const idMovie = e.target.id;
    idTrailer= idMovie
  }
  if (
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H2'
  ) {
    const idMovie = e.target.parentElement.id;
    idTrailer= idMovie;
    
    
  }
}
