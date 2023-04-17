// // FT-07 Реалізувати підвантаження популярних фільмів на головну (першу) сторінку
import { poster_sizes } from './fetchFromTheMovieDB';
import { pagination } from './pagination.js';
import { fetchPopMovies } from './fetchFromTheMovieDB';
import { genres } from './genres';
import { heightMax } from './withScroll';
// import Notiflix from 'notiflix';

// console.log('poster_sizes:', poster_sizes);//TODO:
const galleryListEl = document.querySelector('.film__gallery');
heightMax();
//initial fetch for 1st page
handlePageBtnClick(1); //pagination._currentPage = 1

pagination.on('afterMove', () => handlePageBtnClick(pagination._currentPage));

async function handlePageBtnClick(page) {
  try {
    const data = await fetchPopMovies(page);
    galleryListEl.innerHTML = createGalleryCards(data.results, poster_sizes[3]);
    pagination.setTotalItems(data.total_results);
  } catch (error) {
    //TODO: notification with Notiflix.error
    console.log('ERROR! ', error);
  }
}

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



