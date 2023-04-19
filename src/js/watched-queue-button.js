import { refs } from './refs';
import { getSome } from './genres';
import { api } from './API';

// let id;
// id = evt.target.dataset.id;

/* OD:
const galleryListEl = document.querySelector('[data-movies-list]');
const watchedGalleryEl = document.querySelector('[data-watched]');
const queueGalleryEl = document.querySelector('[data-queue]'); */

/* OD:
window.addEventListen er('load', renderWatchedGallery);
refs.watchedGalleryEl.addEventList ener('click', renderWatchedGallery);
refs.queueGalleryEl.addEventListen er('click', renderQueueGallery); */

export function renderWatchedGallery() {
  console.log('renderWatchedGallery:', refs.galleryListEl);
  refs.watchedGalleryEl.classList.add('active');
  renderGalleryFromLocaleStorage('watched');
  console.log(
    'renderWatchedGallery:',
    refs.galleryListEl.innerHTML
  );
}

export function renderQueueGallery() {
  refs.watchedGalleryEl.classList.remove('active');
  renderGalleryFromLocaleStorage('queue');
}

function renderGalleryFromLocaleStorage(key) {
  refs.galleryListEl.innerHTML = ' ';
  const localeStorage = localStorage.getItem(key);
  const localeStorageMovies = JSON.parse(localeStorage);
  if (localeStorageMovies.length) {
    localeStorageMovies.forEach(async el => {
      try {
        const data = await api.fetchMovieInfo(el);
        renderCards(data);
      } catch (error) {
        console.warn(error);
      }
    });
  } else {
    refs.galleryListEl.innerHTML =
      '<div class = "my-lib-empty-wrap"><iframe src="https://giphy.com/embed/iNx9pCiBimBAdOb0oa" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><span class ="my-lib-empty">Your libruary is empty...</span></p></div>';
    //console.log('oooops, nothing');
  }
}

function renderCards(data) {
  const genresId = data.genres.map(el => el.id);
  const movieGenres = getSome(genresId);
  refs.galleryListEl.insertAdjacentHTML(
    'beforeend',
    `<li class="film__item" data-id=${data.id}><div class="film__wrap">
    <img
      class="film__poster"
      src="https://image.tmdb.org/t/p/w500${data.poster_path}"
      alt="" data-id=${data.id}
    /></div>
    <div class="film__info" data-id=${data.id}>
      <p class="film__name">${data.title}</p>
      <p class="film__ganres">${movieGenres} | ${data.release_date.slice(
      0,
      4
    )}</p>

    </div>

</li>`
  );
}
