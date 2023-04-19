import { refs } from './refs';
import Pagination from 'tui-pagination';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { dataQuery } from './query-word-searching';
//TODO: import { Report } from 'notiflix/build/notiflix-report-aio';

//OD: const container = document.getElementById('tui-pagination-container');

//OD: const galleryEl = document.querySelector('.film__gallery');
let paginationSearch;
let paginationPopularTrand;

// ==========================
function notActive(itemsTotal) {
  // resetPagination();
  paginationSearch = new Pagination(refs.container, {
    totalItems: itemsTotal,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: api.page,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  });
  go(paginationSearch);
}

function go(value) {
  value.on('beforeMove', event => {
    api.page = event.page;
    dataQuery(api.page);
    cleanAllGallery();
  });
}

// ==========================
//OD: THIS IS THE COURSE OF ERROR WHEN LOADING!
//TODO: if (api.search == null) makePagin();
function makePagin() {
  paginationPopularTrand = new Pagination(refs.container, {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });
  // ==========================
  if (refs.container) {
    paginationPopularTrand.on('afterMove', e => {
      api.page = e.page;

      cleanAllGallery();
      handlePageBtnClick();
    });
  }
}

// =================> for reset of pagination
// function resetPagination() {
//   paginationPopularTrand.reset();
// }
// function resetPaginationSearch() {
//   paginationSearch.reset();
// }
function cleanAllGallery() {
  refs.gallery.innerHTML = ' ';
}

export { notActive, makePagin };
