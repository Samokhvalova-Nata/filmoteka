
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
  return `<li class="film__item" data-id=${id}>
    <div class="film__wrap">
      <img
        class="film__poster"
        src="${posterUrl}"
        alt="${title}" loading="lazy"  data-id=${id}
      />
    </div>                                            
    <div class="film__info"  data-id=${id}>
      <p class="film__name">${title}</p>        
      <p class="film__ganres">${genres} | ${year}</p>   
    </div>
  </li>`;
}
