import Pagination from 'tui-pagination';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { dataQuery } from './query-word-searching';
import { Report } from 'notiflix/build/notiflix-report-aio';

const container = document.getElementById('tui-pagination-container');

const galleryEl = document.querySelector('.film__gallery');
const firstBtn = document.querySelector('.tui-first');
const lastBtn = document.querySelector('.tui-last ');
const prevBtn = document.querySelector('.tui-last-child');
const nextBtn = document.querySelector('.tui-next');
let totalCount;
let totPages;
let paginationPopular;

function notActive(itemsTotal, pagesTotal) {
  totalCount = itemsTotal;
  totPages = pagesTotal;
  if (totPages < api.page) {
    resetPagination();
    dataQuery((api.page = 1));
    Report.info(`This query has only ${totPages} pages`, '');
  }
}

const options = {
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

if (container) {
  paginationPopular = new Pagination(container, options);
  paginationPopular.on('afterMove', event => {
    if (api.query == null) {
      const paginationPopularTrand = new Pagination(container, options);

      paginationPopularTrand.on('afterMove', event => {
        if (api.page === null) {
          api.page = 1;
        };
        api.page = event.page;
        cleanAllGallery();
        handlePageBtnClick();
      });
    } else {
      api.page = event.page;
      dataQuery(api.page);
      cleanAllGallery();
    }
  });
}
// =================> for reset of pagination
function resetPagination() {
  paginationPopular.reset();
}
function cleanAllGallery() {
  galleryEl.innerHTML = ' ';
}

export { resetPagination, notActive };
