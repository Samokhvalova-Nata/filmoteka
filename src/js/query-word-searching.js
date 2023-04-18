import { getSome } from './genres.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { pagination } from './pagination.js';
import { getTemplateCard } from './template-card.js';
import { api } from './API.js';
import { playSpinner, stopSpinner } from './spinner.js';
import { resetPagination, notActive } from './pagination.js';

const galleryEl = document.querySelector('.film__gallery');
const filmSearchForm = document.querySelector('.search-bar');
const container = document.getElementById('tui-pagination-container');

filmSearchForm.addEventListener('submit', handleFormSubmit);
export function handleFormSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.search.value.trim();
  api.page = 1;
  if (query === '') {
    Notify.failure('Please enter a search query for the movie');
    return;
  }
  container.classList.remove('visually-hidden');
  api.search = query;
  resetPagination();
  dataQuery();
}
export async function dataQuery() {
  try {
    playSpinner();
    const movies = await api.fetchMovie(api.search);
    if (movies.total_results === 0) {
      Notify.failure('No movies found with the given search query.');
      renderMoviesMarkup(null);
      container.classList.add('visually-hidden');
      return;
    }
    notActive(movies.total_results, movies.total_pages);
    renderMoviesMarkup(movies);
  } catch (error) {
    console.log(error);
  } finally {
    filmSearchForm.reset();
    api.check = true;
  }
  stopSpinner();
}
export function renderMoviesMarkup(response) {
  if (response === null) {
    galleryEl.innerHTML = '';
    return;
  }
  const markup = response.results
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      const date = release_date.split('').splice(0, 4).join('');
      const genresStr = getSome(genre_ids);
      return getTemplateCard({
        id,
        title,
        genresStr,
        release_year: date,
        poster_path,
      });
    })
    .join('');
  galleryEl.innerHTML = markup;
}
