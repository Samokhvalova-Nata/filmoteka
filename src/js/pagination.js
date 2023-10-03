import { refs } from './refs';
import Pagination from 'tui-pagination';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { dataQuery } from './query-word-searching';
import { playSpinner, stopSpinner } from './spinner.js';

let paginationSearch;
let paginationPopularTrand;

function notActive(itemsTotal) {
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
    setTimeout(() => {
      dataQuery(api.page);
    }, 111);
    cleanAllGallery();
  });
}


function makePagin() {
  paginationPopularTrand = new Pagination(refs.container, {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: api.page,
  });
  
  if (refs.container) {
    paginationPopularTrand.on('afterMove', e => {
      api.page = e.page;

      cleanAllGallery();
      setTimeout(() => {
        handlePageBtnClick();
      }, 111);
    });
  }
}

function cleanAllGallery() {
  refs.gallery.innerHTML = ' ';
}

export { notActive, makePagin };
