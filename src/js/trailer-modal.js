const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_API = 'https://api.themoviedb.org';

const refs = {
  trailerModalClose: document.querySelector('[data-trailer-close]'),
  trailerModal: document.querySelector('[data-trailer-modal]'),
  trailerModalOpen: document.querySelector('.modal__watch-treller'),
  movieModal: document.querySelector('.modal__movie'),
  iframe: document.querySelector('[data-iframe]'),
  galleryCard: document.querySelector('.film__gallery'),
};

let movieId;

refs.trailerModalOpen.addEventListener('click', handleOpenTrailerClick);
refs.trailerModalClose.addEventListener('click', handleCloseTrailerBtnClick);
refs.galleryCard.addEventListener('click', addMovieId);

function addMovieId(evt) {
  movieId = evt.target.dataset.id;
  refs.trailerModalOpen.classList.remove('visually-hidden');
  refs.iframe.innerHTML = ' ';
  renderTrailerModal(movieId);
}

function handleOpenTrailerClick() {
  renderTrailerModal(movieId);
  refs.trailerModal.classList.toggle('visually-hidden');
  refs.movieModal.classList.toggle('visually-hidden');
  refs.trailerModal.addEventListener('click', handleBackdropClick);
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
  refs.iframe.innerHTML = ' ';
  refs.movieModal.classList.toggle('visually-hidden');
  refs.trailerModal.classList.toggle('visually-hidden');
  document.addEventListener('keydown', handleEscapeClick);
}

function onFetchError(err) {
  console.warn(err);
}

function findOfficialTrailer(data) {
  let key;

  data.results.forEach(el => {
    if (
      el.name === 'Official Trailer' ||
      el.name === 'Official Trailer 1' ||
      el.name === 'Trailer' ||
      el.name === 'Official International Trailer'
    ) {
      key = el.key;
    }
  });
  if (key === undefined) {
    refs.trailerModalOpen.classList.add('visually-hidden');
  }

  refs.iframe.insertAdjacentHTML(
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
  refs.iframe.innerHTML = ' ';
  return await fetchMovieTrailer(id)
    .then(findOfficialTrailer)
    .catch(onFetchError);
}
