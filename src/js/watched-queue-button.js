//TODO: import { fetchMovieInfo } from './fetchFromTheMovieDB';
//TODO: not used import { getTemplateCard } from './template-card';
import { getSome } from './genres';

const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';

const id = 76600;

const galleryEl = document.querySelector('.library-gallery');
const galleryListEl = document.querySelector('[data-movies-list]');
const watchedGalleryEl = document.querySelector('[data-watched]');
const queueGalleryEl = document.querySelector('[data-queue]');
const libraryGalleryEl = document.querySelector('[data-library]');

// watchedGalleryEl.addEventListener('click', renderWatchedGallery);
// queueGalleryEl.addEventListener('click', renderQueueGallery);
// window.addEventListener('load', renderWatchedGallery);

function renderWatchedGallery() {
  watchedGalleryEl.classList.add('active');
  //   queueGalleryEl.classList.toggle('active');
  renderGalleryFromLocaleStorage('watched');
}

function renderQueueGallery() {
  //   queueGalleryEl.classList.toggle('active');
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
        const data = await fetchMovieInfo(el);
        renderWatchedCards(data);
      } catch (error) {
        console.warn(error);
      }
    });
  }
}

function renderWatchedCards(data) {
  const genresId = data.genres.map(el => el.id);
  const movieGenres = getSome(genresId);
  galleryListEl.insertAdjacentHTML(
    'beforeend',
    `<li class="film__item" id=${data.id}>
  <a class="film__item-link link" href="#">
    <img
      class="film__poster"
      src="https://image.tmdb.org/t/p/w500${data.poster_path}"
      alt=""
    />
    <div class="film__info">
      <p class="film__name">${data.title}</p>
      <p class="film__ganres">${movieGenres} | ${data.release_date.slice(
      0,
      4
    )}</p>
    </div>
  </a>
</li>`
  );
}
