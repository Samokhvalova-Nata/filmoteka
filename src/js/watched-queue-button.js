import { getSome } from './genres';
import { api } from './api';

// let id = 758323;
// id = evt.target.dataset.id;

const galleryListEl = document.querySelector('[data-movies-list]');
const watchedGalleryEl = document.querySelector('[data-watched]');
const queueGalleryEl = document.querySelector('[data-queue]');

window.addEventListener('load', renderWatchedGallery);
watchedGalleryEl.addEventListener('click', renderWatchedGallery);
queueGalleryEl.addEventListener('click', renderQueueGallery);

function renderWatchedGallery() {
  watchedGalleryEl.classList.add('active');
  renderGalleryFromLocaleStorage('watched');
}

function renderQueueGallery() {
  watchedGalleryEl.classList.remove('active');
  renderGalleryFromLocaleStorage('queue');
}

function renderGalleryFromLocaleStorage(key) {
  galleryListEl.innerHTML = ' ';
  const localeStorage = localStorage.getItem(key);
  const localeStorageMovies = JSON.parse(localeStorage);
  if (localeStorageMovies !== null) {
    localeStorageMovies.forEach(async el => {
      try {
        const data = await api.fetchMovieInfo(el);
        renderCards(data);
      } catch (error) {
        console.warn(error);
      }
    });
  } else {
    console.log('oooops, nothing');
  }
}

function renderCards(data) {
  const genresId = data.genres.map(el => el.id);
  const movieGenres = getSome(genresId);
  galleryListEl.insertAdjacentHTML(
    'beforeend',
    `<li class="film__item" data-id=${data.id}><div class="film__wrap">
    <img
      class="film__poster"
      src="https://image.tmdb.org/t/p/w500${data.poster_path}"
      alt=""
    />
    <div class="film__info" data-id=${data.id}>
      <p class="film__name">${data.title}</p>
      <p class="film__ganres">${movieGenres} | ${data.release_date.slice(
      0,
      4
    )}</p>
    </div>
    </div>
  
</li>`
  );
}
