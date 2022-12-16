import axios from 'axios';
import {
    BASE_URL,
    API_KEY,
} from '../../api-services/movies-api-service';

// Запрос на полную информацию о фильме по ID
let id = 76600; //для примера
const getMovieInfo = async () => {
    return await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
};
getMovieInfo().then(({data: {id, vote_average}}) => 
    console.log("id фильма - ", id, "рейтинг - ", vote_average)
);

// const galleryConteiner = document.querySelector('.library-list');

// function addMovieToLabrary() {
//     рендорим лишку 
// }
