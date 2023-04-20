import { refs } from './refs';
import { renderQueueGallery } from './watched-queue-button';
import { renderWatchedGallery } from './watched-queue-button';

let id;

export function toggleFilmToWatchedStorage() {
  if (refs.addWatched.textContent === 'Remove from watched') {
    const fromLocal = localStorage.getItem('watched');
    let watchedStorage = JSON.parse(fromLocal);
    const removeMovie = watchedStorage.filter(el => el !== id);
    localStorage.setItem('watched', JSON.stringify(removeMovie));
    refs.addWatched.textContent = 'Add to watched';
    if (document.body.id === 'mylibruary') {
      renderWatchedGallery();
    }
    return;
  }
  const fromLocal = localStorage.getItem('watched');
  localStorage.setItem(
    'watched',
    JSON.stringify(checkLocaleStorage(fromLocal, 'watched', refs.addWatched))
  );

  if (document.body.id === 'mylibruary') {
    renderWatchedGallery();
  }
}

export function toggleFilmToQueueStorage() {
  if (refs.addQueue.textContent === 'Remove from queue') {
    const fromLocal = localStorage.getItem('queue');
    let queueStorage = JSON.parse(fromLocal);
    const removeMovie = queueStorage.filter(el => el !== id);
    localStorage.setItem('queue', JSON.stringify(removeMovie));
    refs.addQueue.textContent = 'Add to queue';

    if (document.body.id === 'mylibruary') {
      renderQueueGallery();
    }
    return;
  }
  const fromLocal = localStorage.getItem('queue');
  localStorage.setItem(
    'queue',
    JSON.stringify(checkLocaleStorage(fromLocal, 'queue', refs.addQueue))
  );
  if (document.body.id === 'mylibruary') {
    renderQueueGallery();
  }
}

function checkLocaleStorage(data, btn, el) {
  let queueStorage = JSON.parse(data);
  if (queueStorage === null) {
    queueStorage = [];
  }
  let currentLocaleStorage = [...queueStorage];
  // console.log('checkLocaleStorage', currentLocaleStorage); //TODO:
  if (!currentLocaleStorage.includes(id)) {
    currentLocaleStorage = [...currentLocaleStorage, id];
    el.textContent = `Remove from ${btn}`;
  }
  return currentLocaleStorage;
}

export function checkStorageKeys(evt) {
  // console.log('checkStorageKeys evt', evt.target); //TODO:
  id = evt.target.dataset.id;
  // console.log('checkStorageKeys id', id); //TODO:

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
    refs.addWatched.textContent = 'Remove from watched';
  } else {
    refs.addWatched.textContent = 'Add to watched';
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
    refs.addQueue.textContent = 'Remove from queue';
  } else {
    refs.addQueue.textContent = 'Add to queue';
  }
}
