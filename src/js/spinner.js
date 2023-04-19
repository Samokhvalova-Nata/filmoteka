import { refs } from './refs';
import { Spinner } from 'spin.js';

// window.onload = function () {
//   const preloaderWebsite = document.querySelector('.spinner');
//   setTimeout(function () {
//     preloaderWebsite.classList.add('is-closed');
//   }, 2000);
// };


/* OD:
const gallery = document.querySelector('.film__gallery');
gallery.innerHTML = `<div class="spinner-backdrop"></div>`;*/
//TODO: I suspect it is a problem - Dynamic HTML used for playing
//- and it is creating in the static part of code. It is for sure
//will be overwritten and spinner will not be working.
//TODO:Change is needed => move to static code


const options = {
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

//OD: let target = document.getElementById('spinContainer');
/* OD: moved inside
const backdrop = document.querySelector('.spinner-backdrop'); */
const spinner = new Spinner(options);

function playSpinner() {
  const backdrop = document.querySelector( //TODO:
    'play .spinner-backdrop', refs.gallery,
    refs.gallery.innerHTML
  );
  console.log('spinner-backdrop=', backdrop);
   if (backdrop) backdrop.classList.remove('is-closed');
  spinner.spin(refs.targetSpinner);
}

function stopSpinner() {
  //TODO:
  const backdrop = document.querySelector('.spinner-backdrop');
  console.log('stop spinner-backdrop=', backdrop);
  if (backdrop) backdrop.classList.add('is-closed');
  spinner.stop();
}

export { playSpinner, stopSpinner };
