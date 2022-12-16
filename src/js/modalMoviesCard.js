// import axios from 'axios';

const refs = {
  openModal: document.querySelector('.gallery__list'),
  closeModalBtn: document.querySelector('.button-close'),
  backdrop: document.querySelector('.backdrop-movie'),
  movieCard: document.querySelector('.movie-card'),
  movieContainer: document.querySelector('.modal-movie'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('[data-page]'),
};

refs.openModal.addEventListener('click', openModal);


function openModal (event) {
setTimeout(() => {
refs.modal.classList.toggle('is-hidden');
refs.body.classList.add('no-scroll');
refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', closeModalEscape);
refs.backdrop.addEventListener('click', closeModalBackdrop);
document.addEventListener('keydown', event => closeModalEscape(event));
refs.backdrop.classList.remove('is-hidden');
refs.backdrop.classList.add('backdrop-movie');
refs.movieContainer.classList.remove('is-hidden');

  }, 500);
}

function closeModal(event) {
refs.backdrop.classList.add('is-hidden');
refs.backdrop.firstElementChild.classList.add('is-hidden');
refs.closeModalBtn.removeEventListener('click', closeModal);
refs.backdrop.removeEventListener('click', closeModal);
refs.backdrop.removeEventListener('click', closeModalEscape);
document.removeEventListener('keydown', event => closeModalEscape(event));
refs.backdrop.classList.remove('backdrop-movie');
refs.body.classList.remove('no-scroll');
}

function closeModalBackdrop(event) {
if (event.target.classList.value !== 'backdrop-movie') {
  return;
}
closeModal();
}

function closeModalEscape(event) {
if (event.key !== 'Escape') {
  return;
}
closeModal();
}


// function createMarkupModalMovieCard(arr) {
//   const markup = arr
//     .map(
//       ({
//         title,
//         vote_average,
//         vote_count,
//         popularity,
//         original_title,
//         genre_ids,
//         overview,
//         backdrop_path,
//         poster_path,
//       }) => {
//         return `<div class="backdrop-movie is-hidden" data-modal>
//         <div class="modal-movie">
//           <button class="button-close">
//             <svg class="button-close_icon">
//               <use href="./images/Icons/symbol-defs.svg#icon-close"></use>
//             </svg>
//           </button>
//           <div class="movie-card">
//             <div class="movie-card_request">
//               <div class="movie-card_img-cover">
//                 <img
//                 class="movie-card_photo"
//                 src=src="${poster_path}"
//                 alt="${title}"
//               />
//                 <button class="button-open-trailer"></button>
//               </div>
//             </div>
//             <div class="movie-description">
//               <h2 class="movie-title">${title}</h2>
//               <table class="movie-table">
//                 <tbody>
//                   <tr class="movie-table_row">
//                     <td>
//                       <p class="movie-table_title">Vote/Votes</p>
//                     </td>
//                     <td>
//                       <p>
//                         <span movie-table_vote>${vote_average} / ${vote_count}</span>
//                       </p>
//                     </td>
//                   </tr>
//                   <tr class="movie-table_row">
//                     <td>
//                       <p class="movie-table_title">Popularity</p>
//                     </td>
//                     <td>
//                       <p>${popularity}</p>
//                     </td>
//                   </tr>
//                   <tr class="movie-table_row">
//                     <td>
//                       <p class="movie-table_title">Original Title</p>
//                     </td>
//                     <td>
//                       <p>${original_title}</p>
//                     </td>
//                   </tr>
//                   <tr class="movie-table_row">
//                     <td>
//                       <p class="movie-table_title">Genre</p>
//                     </td>
//                     <td>
//                       <p>${genre_ids}</p>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//               <div class="movie-about_container">
//               <h3 class="movie-about">About</h3>
//               <p class="movie-about_text">${overview}</p>
//             </div>
//               <ul class="movie-list">
//                 <li class="movie-item">
//                   <button type="button" class="movie-item_button">ADD TO WATHED</button>
//                 </li>
//                 <li class="movie-item">
//                   <button type="button" class="movie-item_button">ADD TO QUEUE</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>`
//       }
//     )
//     .join('');

//   refs.openModal.innerHTML = markup;
// }


// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
// const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';
// async function fetchSearchMovieCard() {
//     const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//       return response.data;
//   }

//   fetchSearchMovieCard()
//   .then(data => {
//     console.log(data);
//      createMarkupModalMovieCard(data)
//   })
//   .catch(err => console.error(err.message))
//   fetchSearchMovieCard()

// const localStorageMovies = (key, value) => {
//   try {
//     if (typeof value === 'string') {
//       localStorage.setItem(key, value);
//     } else {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getFromLocalStorage = key => {
//   try {
//     return JSON.parse(localStorage.getItem(key));
//   } catch (error) {
//     console.error(error);
//   }
// };

// const removeLocalFromStorage = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error(error);
//   }
// };