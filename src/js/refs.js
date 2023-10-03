export const refs = {
  //modal
  btnCloseModal: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  gallery: document.querySelector('.film__gallery'),
  filmCard: document.querySelector('.modal__info'),
  body: document.querySelector('body'),
  //add watched queque
  addWatched: document.querySelector('.modal__button-watched'),
  addQueue: document.querySelector('.modal__button-queue'),

  //pagination
  container: document.getElementById('tui-pagination-container'),
  //query word search
  filmSearchForm: document.querySelector('.search-bar'),
  //trailer-modal
  trailerModalClose: document.querySelector('[data-trailer-close]'),
  trailerModal: document.querySelector('[data-trailer-modal]'),
  trailerModalOpen: document.querySelector('.modal__watch-treller'),
  movieModal: document.querySelector('.modal__movie'),
  iframe: document.querySelector('[data-iframe]'),

  //watch-queque-button
  galleryListEl: document.querySelector('[data-movies-list]'),
  watchedGalleryEl: document.querySelector('[data-watched]'),
  queueGalleryEl: document.querySelector('[data-queue]'),

  //from spinner
  targetSpinner: document.getElementById('spinContainer')
};
