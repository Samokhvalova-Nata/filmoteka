// FT-07 Реалізувати підвантаження популярних фільмів на головну (першу) сторінку
import { pagination } from './pagination.js';
import { genres } from './genres';
import { heightMax } from './withScroll';
import { api } from './API.js'
import { getTemplateCard } from './template-card.js';

const galleryListEl = document.querySelector('.film__gallery');
const POSTER_SIZE = api.getPosterSize(342);

heightMax();
handlePageBtnClick(1);

pagination.on('afterMove', () => handlePageBtnClick(pagination._currentPage));

async function handlePageBtnClick(page) {
  try {
    const data = await api.fetchPopMovies(page);
    galleryListEl.innerHTML = createGalleryCards(data.results, POSTER_SIZE);
    pagination.setTotalItems(data.total_results);
  } catch (error) {
    console.log('ERROR! ', error);
  }
}

function createGalleryCards(results, poster_size) {
  return results
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      return getTemplateCard({
        title,                   
        genresStr: genres.getSome(genre_ids), 
        release_year: release_date.slice(0, 4),      
        poster_path,              
        poster_size,
        id
      })
    })
    .join('');
}