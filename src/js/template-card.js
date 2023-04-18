//FT-05 Зверстати шаблон картки одного фільму
//for use in FT-15, FT-03, FT-09, FT-14, FT-15
//Author: Zversh3108
//Contributors: oshaleyko59

const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

export function getTemplateCard({
  id,
  title,
  genresStr,
  release_year,
  poster_path,
  poster_size = 'w342'}
) {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/${poster_size}${poster_path}`
    : DEFAULT_POSTER_URL;

  const year = release_year || 'Unknown';
  const genres = genresStr || 'Other';
  return `<li class="film__item" data-id=${id}><div class="film__wrap">
    <img
      class="film__poster"
      src="${posterUrl}"
      alt="${title}" loading="lazy"  data-id=${id}
    /></div>                                             <!-- Фото фільма -->
    <div class="film__info"  data-id=${id}>
      <p class="film__name">${title}</p>        <!-- Назва фільму -->
      <p class="film__ganres">${genres} | ${year}</p>    <!-- Жанр та рік фільму -->
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

