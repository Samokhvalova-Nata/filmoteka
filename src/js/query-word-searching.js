import { refs } from './refs';
import { getSome } from './genres.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getTemplateCard } from './template-card.js';
import { api } from './API';
import { playSpinner, stopSpinner } from './spinner.js';
import { notActive } from './pagination.js';


export function handleFormSubmit(event) {
  console.log('handleFormSubmit ', event.currentTarget);//TODO:
  event.preventDefault();
  console.log('handleFormSubmit ', event.currentTarget.search.value.trim());
  const query = event.currentTarget.search.value.trim();
  api.page = 1;
  if (query === '') {
    Notify.failure('Please enter a search query for the movie');
    return;
  }
  refs.container.classList.remove('visually-hidden');
  api.search = query;
  dataQuery();
}

export async function dataQuery() {
  console.log('dataQuery '); //TODO:
  try {
    playSpinner();
    const movies = await api.fetchMovie(api.search);
    if (movies.total_results === 0) {
      Notify.failure('No movies found with the given search query.');
      renderMoviesMarkup(null);
      refs.container.classList.add('visually-hidden');
      return;
    }
    notActive(movies.total_results, movies.total_pages);
    renderMoviesMarkup(movies);
  } catch (error) {
    console.log(error);
  } finally {
    refs.filmSearchForm.reset();
  }
  stopSpinner();
}

//TODO: export
  function renderMoviesMarkup(response) {
  if (response === null) {
    refs.gallery.innerHTML = '';
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
  refs.gallery.innerHTML = markup;
}
