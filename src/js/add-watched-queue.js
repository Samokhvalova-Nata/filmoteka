const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';
localStorage.removeItem('queue');
localStorage.removeItem('watched');
const id = 76600;

638974;
736790;
830896;
816904;
493529;
603692;

const addWatchedEl = document.querySelector('.modal__button-watched');
const addQueueEl = document.querySelector('.modal__button-queue');
const galleryCard = document.querySelector('.film__gallery');

addWatchedEl.addEventListener('click', addFilmToWatchedStorage);
addQueueEl.addEventListener('click', addFilmToQueueStorage);
galleryCard.addEventListener('click', checkStorageKeys);

function addFilmToWatchedStorage() {
  const fromLocal = localStorage.getItem('watched');
  localStorage.setItem(
    'watched',
    JSON.stringify(checkLocaleStorage(fromLocal))
  );
}

function addFilmToQueueStorage() {
  const fromLocal = localStorage.getItem('queue');
  localStorage.setItem('queue', JSON.stringify(checkLocaleStorage(fromLocal)));
}

function checkLocaleStorage(data) {
  let queueStorage = JSON.parse(data);
  if (queueStorage === null) {
    queueStorage = [];
  }
  let currentLocaleStorage = [...queueStorage];
  if (!currentLocaleStorage.includes(id)) {
    currentLocaleStorage = [...currentLocaleStorage, id];
  }
  return currentLocaleStorage;
}

function checkStorageKeys() {
  checkWatchedKeys();
  checkQueueKeys();
}

function checkWatchedKeys() {
  const fromLocal = localStorage.getItem('watched');
  let localeStorage = JSON.parse(fromLocal);
  if (localeStorage === null) {
    return;
  }
  let currentLocaleStorage = [...localeStorage];
  if (currentLocaleStorage.includes(id)) {
    addWatchedEl.textContent = 'Remove from watched';
  } else {
    addWatchedEl.textContent = 'Add to watched';
  }
}

function checkQueueKeys() {
  const fromLocal = localStorage.getItem('queue');
  let localeStorage = JSON.parse(fromLocal);
  if (localeStorage === null) {
    return;
  }
  let currentLocaleStorage = [...localeStorage];
  if (currentLocaleStorage.includes(id)) {
    addQueueEl.textContent = 'Remove from queue';
  } else {
    addQueueEl.textContent = 'Add to queue';
  }
}
