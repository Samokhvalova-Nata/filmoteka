const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_API = 'https://api.themoviedb.org';

const movieId = 948713;

const trailerModalCloseEl = document.querySelector('[data-trailer-close]');
const trailerModalEl = document.querySelector('[data-trailer-modal]');
const trailerModalOpenEl = document.querySelector('.modal__watch-treller');
const movieModalEl = document.querySelector('.modal__movie');
const iframeEl = document.querySelector('[data-iframe]');

trailerModalOpenEl.addEventListener('click', handleOpenTrailerClick);
trailerModalCloseEl.addEventListener('click', handleCloseTrailerBtnClick);

function handleOpenTrailerClick() {
  renderTrailerModal(movieId);
  trailerModalEl.classList.toggle('visually-hidden');
  movieModalEl.classList.toggle('visually-hidden');
  trailerModalEl.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapeClick);
}

function handleEscapeClick(event) {
  if (event.code === 'Escape') {
    toggleModal();
    document.removeEventListener('keydown', handleEscapeClick);
  }
}

function handleBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toggleModal();
    document.removeEventListener('keydown', handleEscapeClick);
  }
}

function handleCloseTrailerBtnClick() {
  toggleModal();
  document.removeEventListener('keydown', handleEscapeClick);
}

function toggleModal() {
  iframeEl.innerHTML = ' ';
  movieModalEl.classList.toggle('visually-hidden');
  trailerModalEl.classList.toggle('visually-hidden');
  document.addEventListener('keydown', handleEscapeClick);
}

function onFetchError(err) {
  console.warn(err);
}

function findOfficialTrailer(data) {
  let key;
  data.results.forEach(el => {
    if (el.name === 'Official Trailer' || el.name === 'Official Trailer 1') {
      key = el.key;
    }
  });
  iframeEl.insertAdjacentHTML(
    'beforeend',
    `<iframe
          class="trailer__iframe"
          src="https://www.youtube.com/embed/${key}"
          title="Official trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`
  );
}

async function fetchMovieTrailer(id) {
  return fetch(
    `${BASE_API}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  ).then(r => {
    if (!r.ok) {
      throw new Error(r.status);
    }
    return r.json();
  });
}

async function renderTrailerModal(id) {
  return await fetchMovieTrailer(id)
    .then(findOfficialTrailer)
    .catch(onFetchError);
}
