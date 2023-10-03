import { refs } from './refs';
import { getSome } from './genres';
import { api } from './API';
import { getTemplateCard } from './template-card.js';
import { makePagin } from './pagination.js';
import { playSpinner, stopSpinner } from './spinner';

export async function handlePageBtnClick() {
  playSpinner();

  try {
    const { data } = await api.fetchPopMovies();
    makeElements(data.results, api.poster_sizes[3]);
  } catch (error) {
    console.log('ERROR! ', error);
  }
  setTimeout(() => {
    stopSpinner();
  }, 222);
}

function makeElements(value, size) {
  cleanAllGallery();
  makePagin();
  refs.gallery.insertAdjacentHTML(
    'afterbegin',
    createGalleryCards(value, size)
  );
}

function cleanAllGallery() {
  refs.gallery.innerHTML = '';
}

export function createGalleryCards(results, poster_size) {
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
