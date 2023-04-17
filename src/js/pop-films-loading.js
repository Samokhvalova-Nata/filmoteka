// // FT-07 Реалізувати підвантаження популярних фільмів на головну (першу) сторінку
import { poster_sizes } from './fetchFromTheMovieDB';
import { genres } from './genres';
import { heightMax } from './withScroll';
import { api } from './API';
import { resetPagination, notActive } from './pagination.js';

// import Notiflix from 'notiflix';

// console.log('poster_sizes:', poster_sizes);//TODO:
const galleryListEl = document.querySelector('.film__gallery');
heightMax();
//initial fetch for 1st page
if (galleryListEl) handlePageBtnClick();
export async function handlePageBtnClick() {
  try {
    const { data } = await api.fetchPopMovies();

    makeElements(data.results, api.poster_sizes[3]);
  } catch (error) {
    //TODO: notification with Notiflix.error
    console.log('ERROR! ', error);
  }
}
// ==========>make HTML EL...
function makeElements(value, size) {
  cleanAllGallery();
  galleryListEl.insertAdjacentHTML(
    'afterbegin',
    createGalleryCards(value, size)
  );
}

// =======================>cleanAllinGallery
function cleanAllGallery() {
  galleryListEl.innerHTML = '';
}

// murkup of Gallery item=>
function createGalleryCards(results, poster_size) {
  return results
    .map(({ poster_path, title, genre_ids, release_date }) => {
      return `
        <li class="film__item"> 
            <a class="film__item-link link" href="#"> 
                <img class="film__poster" src="https://image.tmdb.org/t/p/${poster_size}${poster_path}" alt="poster to this movie" /> 
                <div class="film__info"> 
                     <p class="film__name">${title.slice(0, 30)}</p> 
                     <p class="film__ganres">${genres.getSome(
                       genre_ids
                     )} | ${release_date.slice(0, 4)}</p> 
                </div> </a>
         </li>
    `;
    })
    .join('');
}
