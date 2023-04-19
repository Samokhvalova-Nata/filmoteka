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
console.log('test script started ');

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
  console.log('init running on ', pageId);
  //TODO: show Loading();

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  console.log('add EventListener(DOMContentLoaded, onDOMContentLoaded');

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
    console.log('NOT Loaded!!!EventListener click toTopBtn');
  }
  //  console.log('toTopBtn ', scrollUo);
  //modal main
  refs.gallery.addEventListener('click', holderOpenModal);
  console.log('add EventListener click, holderOpenModal');

  refs.btnCloseModal.addEventListener('click', holderCloseModal);
  console.log('add EventListener click, holderCloseModal');
  refs.modal.addEventListener('click', holderCloseByPressBackdrop);
  console.log('add EventListener click, holderCloseByPressBackdrop');
  document.addEventListener('keydown', handlerEscPrecc);
  //trailer-modal
  refs.trailerModalOpen.addEventListener('click', handleOpenTrailerClick);
  console.log('add EventListener click, handleOpenTrailerClick');
  refs.trailerModalClose.addEventListener('click', handleCloseTrailerBtnClick);
  console.log('add EventListener click, handleCloseTrailerBtnClick');
  refs.gallery.addEventListener('click', addMovieId); //trailer-modal
  console.log('add EventListener click, addMovieId');
  //from spinner
  refs.gallery.innerHTML = `<div class="spinner-backdrop"></div>`;
}

function onDOMContentLoaded() {
  pageId = document.body.id; // '#mainpage'
  console.log('onDOMContentLoaded ', pageId);

  switch (pageId) {
    case MAIN_PAGE_ID:
      initMainPage();
      break;
    case MYLIBRUARY_PAGE_ID:
      initMyLibruaryPage();
      break;
    default:
      console.log('Unexpected case');
  }
}

function initMainPage() {
  console.log('initMainPage refs', refs);
  heightMax();
  //initial fetch for 1st page
  handlePageBtnClick(); //TODO:if (galleryListEl) {}
  //query word search
  refs.filmSearchForm.addEventListener('submit', handleFormSubmit);
  console.log('add EventListener submit, handleFormSubmit');
}

function initMyLibruaryPage() {
  console.log('initMyLibruaryPage ', refs);
  heightMax();
  //initial fetch for 1st page
  // handlePageBtnClick(); //TODO:if (galleryListEl) {}
  //listeners
  refs.addWatched.addEventListener('click', toggleFilmToWatchedStorage);
  //console.log('add EventListener click, toggleFilmToWatchedStorage');
  refs.addQueue.addEventListener('click', toggleFilmToQueueStorage);
  //console.log('add EventListener click, toggleFilmToQueueStorage');
  refs.gallery.addEventListener('click', checkStorageKeys);
 // console.log('add EventListener click,  checkStorageKeys');

  //watch-queque-button
  window.addEventListener('load', renderWatchedGallery);
  //console.log('add EventListener load window', renderWatchedGallery);
  refs.watchedGalleryEl.addEventListener('click', renderWatchedGallery);
  //console.log('add EventListener click refs.watchedGalleryEl,renderWatchedGallery');
  refs.queueGalleryEl.addEventListener('click', renderQueueGallery);
  console.log('add EventListener click, refs.queueGalleryEl, renderQueueGallery');
}
