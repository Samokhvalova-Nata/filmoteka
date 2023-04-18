import Pagination from 'tui-pagination';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { dataQuery } from './query-word-searching';
import { Report } from 'notiflix/build/notiflix-report-aio';

const container = document.getElementById('tui-pagination-container');

const galleryEl = document.querySelector('.film__gallery');

let totalCount;
let totPages;

let options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  page: api.page,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-next">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const firstBtn = document.querySelector('.tui-first');
const lastBtn = document.querySelector('.tui-last ');
const prevBtn = document.querySelector('.tui-last-child');
const nextBtn = document.querySelector('.tui-next');
function notActive(itemsTotal, pagesTotal) {
  totalCount = itemsTotal;
  options.totalItems = itemsTotal;
  if (pagesTotal < api.page) {
    resetPagination();
    dataQuery((api.page = 1));
    Report.info(`This query has only ${pagesTotal} pages`, '');
  }
}

let paginationPopularTrand = new Pagination(container, options);
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
