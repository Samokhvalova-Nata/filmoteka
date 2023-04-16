localStorage.removeItem('queue');
localStorage.removeItem('watched');
const id = 55;

addWatchedEl = document.querySelector('.modal__button-watched');
addQueueEl = document.querySelector('.modal__button-queue');

addWatchedEl.addEventListener('click', addFilmToWatchedStorage);
addQueueEl.addEventListener('click', addFilmToQueueStorage);

function addFilmToWatchedStorage() {
  //   let watchedStorage = JSON.parse(localStorage.getItem('watched'));
  localStorage.setItem('watched', id);
}

function addFilmToQueueStorage() {
  const fromLocal = localStorage.getItem('queue');
  let queueStorage = JSON.parse(fromLocal);
  if (queueStorage === null) {
    queueStorage = [];
  }
  let numb2 = [...queueStorage];
  if (!numb2.includes(id)) {
    numb2 = [...numb2, id];
  }
  localStorage.setItem('queue', JSON.stringify(numb2));
  //   const fromLocal = localStorage.getItem('queue');
  //   const queueStorage = JSON.parse(fromLocal);
  console.log(numb2);
}
