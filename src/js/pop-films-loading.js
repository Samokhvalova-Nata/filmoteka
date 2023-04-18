//import { poster_sizes } from './fetchFromTheMovieDB';
import { getSome } from './genres';
import { heightMax } from './withScroll';
import { api } from './API';
import { resetPagination, notActive } from './pagination.js';
import { getTemplateCard } from './template-card.js';

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

function createGalleryCards(results, poster_size) {
  return results
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      return getTemplateCard({
        title,
        genresStr: getSome(genre_ids),
        release_year: release_date.slice(0, 4),
        poster_path,
        poster_size,
        id,
      });
    })
    .join('');
}
