const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';

const id = 638974;

const addWatchedEl = document.querySelector('.modal__button-watched');
const addQueueEl = document.querySelector('.modal__button-queue');
const galleryCard = document.querySelector('.film__gallery');

// addWatchedEl.addEventListener('click', toggleFilmToWatchedStorage);
// addQueueEl.addEventListener('click', toggleFilmToQueueStorage);
// galleryCard.addEventListener('click', checkStorageKeys);

function toggleFilmToWatchedStorage() {
  if (addWatchedEl.textContent === 'Remove from watched') {
    const fromLocal = localStorage.getItem('watched');
    let watchedStorage = JSON.parse(fromLocal);
    const removeMovie = watchedStorage.filter(el => el !== id);
    localStorage.setItem('watched', JSON.stringify(removeMovie));
    addWatchedEl.textContent = 'Add to watched';
    return;
  }
  const fromLocal = localStorage.getItem('watched');
  localStorage.setItem(
    'watched',
    JSON.stringify(checkLocaleStorage(fromLocal, 'watched', addWatchedEl))
  );
}

function toggleFilmToQueueStorage() {
  if (addQueueEl.textContent === 'Remove from queue') {
    const fromLocal = localStorage.getItem('queue');
    let queueStorage = JSON.parse(fromLocal);
    const removeMovie = queueStorage.filter(el => el !== id);
    localStorage.setItem('queue', JSON.stringify(removeMovie));
    addQueueEl.textContent = 'Add to queue';
    return;
  }
  const fromLocal = localStorage.getItem('queue');
  localStorage.setItem(
    'queue',
    JSON.stringify(checkLocaleStorage(fromLocal, 'queue', addQueueEl))
  );
}

function checkLocaleStorage(data, btn, el) {
  let queueStorage = JSON.parse(data);
  if (queueStorage === null) {
    queueStorage = [];
  }
  let currentLocaleStorage = [...queueStorage];
  if (!currentLocaleStorage.includes(id)) {
    currentLocaleStorage = [...currentLocaleStorage, id];
    el.textContent = `Remove from ${btn}`;
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
