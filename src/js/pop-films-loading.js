import axios from 'axios';
import { pagination } from './pagination.js';

const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';

// console.log(pagination);
// console.log(pagination._currentPage);
const fetchMovies = async (page) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=${page}`);
        // console.log({data});
        return  {data} ;
    } catch (error) {
        throw new Error(error);
    }
}

const galleryListEl = document.querySelector('.gallery');
// console.log(galleryListEl);

handleSearchMovies(pagination._currentPage);
pagination.on('afterMove', () => handlePageBtnClick(pagination._currentPage));

async function handleSearchMovies(page) {
    try {
        const { data } = await fetchMovies(page);
        // console.log(data.total_results);
        galleryListEl.innerHTML = createGalleryCards( data.results );
        pagination.setTotalItems(data.total_results);
        // console.log(pagination._options.totalItems);
    } catch (error) {
        console.log(error);
        }
}
  
async function handlePageBtnClick(page) {
    try {
        // console.log(pagination._currentPage);
        const { data } = await fetchMovies(page);
        // console.log(data.page);
        galleryListEl.innerHTML = createGalleryCards(data.results);
        // addSmoothScroll();
    } catch (error) {
        console.log(error);
        }
}

function createGalleryCards(results) {
    return results.map(({ poster_path, title, genre_ids, release_date}) => {
        return `
        <div class="films-card">
            <img src="${poster_path}" alt="poster to this movie" loading="lazy" />
            <div class="info">
                <p class="info-title">${title.slice(0, 30)}</p>
                <p class="info-genre">${genre_ids}</p>
                <p class="info-year">${release_date.slice(0, 4)}</p>
            </div>
        </div>
    `}).join('');
}

// function addSmoothScroll() {
//     const { height: cardHeight } = document.querySelector(".gallery")
//     .firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//     top: cardHeight * 2,
//     behavior: "smooth",
//     });
// }