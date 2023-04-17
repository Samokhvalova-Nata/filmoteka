const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';
// localStorage.removeItem('queue');
// localStorage.removeItem('watched');
const id = 603692;

// 638974;
// 736790;
// 830896;
// 816904;
// 493529;
// 603692;

const addWatchedEl = document.querySelector('.modal__button-watched');
const addQueueEl = document.querySelector('.modal__button-queue');
const galleryCard = document.querySelector('.film__gallery');

addWatchedEl.addEventListener('click', toggleFilmToWatchedStorage);
addQueueEl.addEventListener('click', toggleFilmToQueueStorage);
galleryCard.addEventListener('click', checkStorageKeys);

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

// =================================

// library-galleryCard.html

{
  /* <section class="library-gallery-section">
  <div class="container">
    <!-- <div class="library-gallery"> -->
    <ul class="film__gallery" data-movies-list></ul>
    <!-- </div> -->
  </div>
</section> */
}

// library-Headers.html

{
  /* <div class="collection">
        <!-- <ul class=" collection__list list">
                    <li><a href="./index.html" class=" collection__link link">Watched</a></li>
                    <li><a href="./index.html" class=" collection__link link">Queue</a></li>
                </ul> -->
        <ul class="collection__list list">
          <li>
            <button type="button" class="collection__link link" data-watched>
              Watched
            </button>
          </li>
          <li>
            <button type="button" class="collection__link link" data-queue>
              Queue
            </button>
          </li>
        </ul>
      </div> */
}

// library-Headers.scss

// .wrap {
//    display: flex;
//    width: 100%;
//    flex-direction: row;
//    justify-content: space-between;
// }

// @media screen and (max-width: 767px) {
//    .wrap {
//       height: 100%;
//       flex-direction: column;
//       justify-content: space-between;
//       align-items: center;
//    }
// }

// @media screen and (min-width: 768px) {
//    .wrap {
//       flex-direction: row;
//    }
// }

// @media screen and (min-width: 1280px) {
//    .wrap {
//       flex-direction: row;
//       justify-content: space-between;
//    }
// }

// @media screen and (max-width: 767px) {
//    .collection {
//       padding-right: 44px;
//       padding-bottom: 24px;
//       padding-left: 44px;
//    }
// }

// @media screen and (min-width: 768px) {
//    .collection {
//       padding-right: 16px;
//       padding-top: 16px;
//    }
// }

// @media screen and (min-width: 1280px) {
//    .collection {
//       padding-right: 32px;
//       padding-top: 16px;
//    }
// }

// .collection__list {
//    display: flex;
//    flex-direction: row;

//    gap: 10px;
//    font-style: normal;
//    font-weight: 500;
//    font-size: 12px;
//    line-height: 1.17;
// }

// .collection__link {
//    display: flex;
//    align-items: center;
//    text-align: center;
//    text-transform: uppercase;
//    border-radius: 100px;
//    padding: 14px 32px;
//    background-color: var(--primary-white-color);
//    color: var(--accent-color);
//    height: 34px;

//    // ====================
//    border: none;
//    outline: none;
//    // ===============

//    &:hover,
//    &:focus {
//       background-color: var(--accent-color);
//       color: var(--primary-white-color);
//       transition: var(--transition);
//    }
// }

// @media screen and (min-width: 768px) {
//    .collection__link {
//       height: 38px;
//    }
// }

// @media screen and (min-width: 1280px) {
//    .collection__link {
//       height: 42px;
//    }
// }

// .collection__link--accent {
//    background-color: var(--accent-color);
//    color: var(--primary-white-color);
// }

// @media screen and (max-width: 767px) {
//    .header-logo--library {
//       padding-bottom: 74px;
//       padding-left: 0;
//       padding-bottom: 0;
//       position: absolute;
//       bottom: 148px;
//       align-self: center;
//    }
// }

// // ======================================
// .active {
//    background-color: var(--accent-color);
//    color: var(--primary-white-color);
//    transition: var(--transition);
// }
