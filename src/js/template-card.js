//FT-05 Зверстати шаблон картки одного фільму
//for use in FT-15, FT-03, FT-09, FT-14, FT-15

export function getTemplateCard({
  title,
  genresStr,
  release_year,
  poster_path,
  poster_size = 'w342'}
) {
  return `<li class="film__item">
    <img
      class="film__poster"
      src="https://image.tmdb.org/t/p/${poster_size}${poster_path}"
      alt="movie poster"
    />                                             <!-- Фото фільма -->
    <div class="film__info">
      <p class="film__name">${title}</p>        <!-- Назва фільму -->
      <p class="film__ganres">${genresStr} | ${release_year}</p>      <!-- Жанр та рік фільму -->
    </div>
  </li>`;
}

/* example of use:

import { genres } from './genres';

getTemplateCard({
        title,                    //as returned by backend in results
        genresStr: genres.getSome(genre_ids), //or genres.getAll(genre_ids)
        release_year: year,       // release_date.slice(0, 4)
        poster_path,              //as returned by backend in results
        poster_size: 'w342',
      });
}

*/

