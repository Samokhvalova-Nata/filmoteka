import { Spinner } from 'spin.js';
//======== new preloader RANDOM-SET
window.onload = function () {
  const preloaderWebsite = document.querySelector('.spinner');
  setTimeout(function () {
    preloaderWebsite.classList.add('is-closed');
  }, 2000);
};
const divOfGift = document.querySelector('.tenor-gif-embed');

function randomChangingGifts(arrOfGifts) {
  const randomIndex = Math.random() * 4;
  console.log(Math.floor(randomIndex));
  divOfGift.dataset.postid = arrOfGifts[Math.ceil(randomIndex)];
}
randomChangingGifts([10244466, 14744773, 16742947, 16075618, 5323471]);

//=======================spinner async only for form-search!!!

// const gallery = document.querySelector('.film__gallery');
// console.log(gallery);
// gallery.innerHTML = `<div class="spinner-backdrop"></div>`;

const opts = {
  lines: 12, // The number of lines to draw
  length: 25, // The length of each line
  width: 19, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1.2, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fe5b5b', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '500px', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

let target = document.getElementById('spinContainer');
const backdrop = document.querySelector('.spinner-backdrop');
const spinner = new Spinner(opts);
function playSpinner() {
  backdrop.classList.remove('is-closed');
  spinner.spin(target);
}
function stopSpinner() {
  backdrop.classList.add('is-closed');
  spinner.stop();
}
export { playSpinner, stopSpinner };
