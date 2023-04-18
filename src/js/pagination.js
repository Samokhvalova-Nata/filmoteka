import Pagination from 'tui-pagination';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { dataQuery } from './query-word-searching';
import { Report } from 'notiflix/build/notiflix-report-aio';

const container = document.getElementById('tui-pagination-container');

const galleryEl = document.querySelector('.film__gallery');

// ==========================
function notActive(itemsTotal, pagesTotal) {
  api.totalCountOfItem = itemsTotal;
  let paginationPopularTrand = new Pagination(container, {
    totalItems: api.totalCountOfItem,
    itemsPerPage: 20,
    visiblePages: 3,
    centerAlign: true,
  });
}
// ==========================
let paginationPopularTrand = new Pagination(container, {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 3,
  centerAlign: true,
});
// ==========================
if (container) {
  paginationPopularTrand.on('afterMove', event => {
    if (api.check === false) {
      api.page = event.page;
      cleanAllGallery();
      handlePageBtnClick();
    } else if (api.check === true) {
      api.page = event.page;
      dataQuery(api.page);
      cleanAllGallery();
    }
  });
}
// =================> for reset of pagination
function resetPagination() {
  paginationPopularTrand.reset();
}

function cleanAllGallery() {
  galleryEl.innerHTML = ' ';
}

export { resetPagination, notActive };
