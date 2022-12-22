// export { refs };
import { getPopularMovies } from '..//api-services/movies-api-service';
import Notiflix, { Notify } from 'notiflix';
import axios from 'axios';

const refs = {
  moviesContainer: document.querySelector('.movies-container'),
  sliderList: document.querySelector('.movies-slider__list'),
}



const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';


  function popularMovies() {
      const response = axios.get(`${BASE_URL}?key=${API_KEY}`)
      const data = response.json();
      console.log(data);
        return data;
    }


renderSlideFilms()

// const moviesApiService = page;

// console.dir(refs.moviesContainer);
// console.dir(refs.sliderList);
// moviesSlider(page)

// async function moviesSlider(page) {
//   if (page) {
//     moviesApiService.page = page;
//   }}
  function renderSlideFilms() {
    popularMovies().then((data ) => {
      console.log(data);
      markupMoviesSliderCard(data);
      onClickMoviesSliderCard();
        })

  }





    // const movingMoviesCard = page;
    // const demoMoviesCards = page.target.id;
    // const response = await fetchById(demoMoviesCards);


function markupMoviesSliderCard(data) {
  refs.moviesContainer.innerHTML = '';

  const markup = `<div class="movies-container">
  <div class="movies-slider">
      <ul class="movies-slider__list">
      <li class="movies-slider__item">
      <img
            class="movies-slider__img"
            src="./images/modal/todelete.jpg"
            alt="Название фильма"
          />
      </li>
      </ul>
  </div>
  <div class="movies-slider__arrows">
      <button class="movies-slider__arrows--left" </button>
      <button class="movies-slider__arrows--right" </button>
  </div>
</div>`

refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
}

function onClickMoviesSliderCard() {

  refs.sliderList.addEventListener('click', event => {
    searchIdforMovie(event);
  });
}