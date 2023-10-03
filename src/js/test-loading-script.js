//Script with all static code
import { refs } from './refs';
import { api } from './API';
import { handlePageBtnClick } from './pop-films-loading';
import { heightMax } from './withScroll';
import {
  checkStorageKeys,
  toggleFilmToQueueStorage,
  toggleFilmToWatchedStorage,
} from './add-watched-queue';
import { handleFormSubmit } from './query-word-searching';
import {
  renderWatchedGallery,
  renderQueueGallery,
} from './watched-queue-button';
import {
  handleOpenTrailerClick,
  handleCloseTrailerBtnClick,
  addMovieId,
} from './trailer-modal';
import {
  holderOpenModal,
  holderCloseModal,
  holderCloseByPressBackdrop,
  handlerEscPrecc,
} from './modal';

const MAIN_PAGE_ID = 'mainpage';
const MYLIBRUARY_PAGE_ID = 'mylibruary';

//the page had finished loading its HTML
let pageId = 'not avaiable';

//fill refs
refs.body = document.querySelector('body');
refs.gallery = document.querySelector('.film__gallery');
refs.filmCard = document.querySelector('.modal__info');

//add watched queque
refs.addWatched = document.querySelector('.modal__button-watched');
refs.addQueue = document.querySelector('.modal__button-queue');

//pagination
refs.container = document.getElementById('tui-pagination-container');
//query word search
refs.filmSearchForm = document.querySelector('.search-bar');
//trailer-modal
refs.trailerModalClose = document.querySelector('[data-trailer-close]');
refs.trailerModal = document.querySelector('[data-trailer-modal]');
refs.trailerModalOpen = document.querySelector('.modal__watch-treller');
refs.movieModal = document.querySelector('.modal__movie');
refs.iframe = document.querySelector('[data-iframe]');

//watch-queque-button
refs.galleryListEl = document.querySelector('[data-movies-list]');
refs.watchedGalleryEl = document.querySelector('[data-watched]');
refs.queueGalleryEl = document.querySelector('[data-queue]');
refs.btnCloseModal = document.querySelector('[data-modal-close]');
refs.modal = document.querySelector('[data-modal]');
  //from spinner
refs.targetSpinner = document.getElementById('spinContainer');
initPage();

//===============================================================
function initPage() {
  pageId = document.body.id;

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  //from new withscroll
  const scrollUo = document.querySelector('.toTopBtn');
  if (scrollUo) {
    scrollUo.addEventListener('click', () => {
      window.scrollBy({
        top: 0,
        behavior: 'smooth',
      });
    });
  } else {
    // console.log('NOT Loaded!!!EventListener click toTopBtn');
  }

  //modal main
  refs.gallery.addEventListener('click', holderOpenModal);
  refs.btnCloseModal.addEventListener('click', holderCloseModal);
  refs.modal.addEventListener('click', holderCloseByPressBackdrop);
  document.addEventListener('keydown', handlerEscPrecc);
  //trailer-modal
  refs.trailerModalOpen.addEventListener('click', handleOpenTrailerClick);
  refs.trailerModalClose.addEventListener('click', handleCloseTrailerBtnClick);
  refs.gallery.addEventListener('click', addMovieId);

  refs.addWatched.addEventListener('click', toggleFilmToWatchedStorage);
  refs.addQueue.addEventListener('click', toggleFilmToQueueStorage);
  refs.gallery.addEventListener('click', checkStorageKeys);

  //from spinner
  refs.gallery.innerHTML = `<div class="spinner-backdrop"></div>`;
}

function onDOMContentLoaded() {
  pageId = document.body.id; // '#mainpage'

  switch (pageId) {
    case MAIN_PAGE_ID:
      initMainPage();
      break;
    case MYLIBRUARY_PAGE_ID:
      initMyLibruaryPage();
      break;
    default:
      // console.log('Unexpected case');
  }
}

function initMainPage() {
  heightMax();
  //initial fetch for 1st page
  handlePageBtnClick(); 
  //query word search
  refs.filmSearchForm.addEventListener('submit', handleFormSubmit);
}

function initMyLibruaryPage() {

  heightMax();

  //watch-queque-button
  window.addEventListener('load', renderWatchedGallery);
  refs.watchedGalleryEl.addEventListener('click', renderWatchedGallery);
  refs.queueGalleryEl.addEventListener('click', renderQueueGallery);
}
