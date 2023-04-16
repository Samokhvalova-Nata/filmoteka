import { genres } from './genres.js';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { pagination } from './pagination.js';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
const galleryEl = document.querySelector('.film__gallery');
const filmSearchForm = document.querySelector('.search-bar');
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '0bd052a36cb17fd9656e5b38bc680abf';


filmSearchForm.addEventListener('submit', handleFormSubmit);

export async function fetchMoviesSearcher(query, page = 1) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function handleFormSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.search.value.trim();

  if (query === '') {
    Notify.failure('Please enter a search query for the movie');
    return;
  }

  try {
    const movies = await fetchMoviesSearcher(query);

    if (movies.total_results === 0) {
      Notify.failure('No movies found with the given search query.');
      renderMoviesMarkup(null);
      return;
    }

    renderMoviesMarkup(movies);
  } catch (error) {
    console.log(error);
  } finally {
    filmSearchForm.reset();
  }
}

function returnGenreName(id) {
  return genres.getName(id);
}

export function renderMoviesMarkup(response) {
  if (response === null) {
    galleryEl.innerHTML = '';
    return;
  }
  const markup = response.results
    .map(({ poster_path, title, genre_ids, id, release_date }) => {
      const date = release_date.split('').splice(0, 4).join('');
      let selectedGenres = '';
      if (genre_ids.length === 1) {
        selectedGenres = returnGenreName(genre_ids[0]);
      } else if (genre_ids.length === 2) {
        selectedGenres = `${returnGenreName(genre_ids[0])}, ${returnGenreName(
          genre_ids[1]
        )}`;
      } else if (genre_ids.length > 2) {
        selectedGenres = `${returnGenreName(genre_ids[0])}, ${returnGenreName(
          genre_ids[1]
        )}, Other`;
      }
      const posterUrl = poster_path
        ? `${IMG_URL}${poster_path}`
        : DEFAULT_POSTER_URL;
      return ` 
        <li class="film__item">   
          <a href="#" class="film__item-link link" >  
            <div class="film-card__img">  
              <img src="${posterUrl}" alt="${title}" loading="lazy" data-id="${id}"/>  
            </div>  
            <div class="film__info">  
              <p class="film__name">${title}</p>  
              <p class="film__ganres">${selectedGenres} | ${date}</p>  
            </div>  
          </a>  
        </li>`;
    })
    .join('');
  galleryEl.innerHTML = markup;
}
