// render gallery==============work with function async==

// ==============now in the js file =>pop-films-loading !!!
const galleryListEl = document.querySelector('.film__gallery');

export function heightMax() {
  let hScreen = galleryListEl.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });
}
// SCROLL SMOOTH====== AND will work with function async in the form===========
// !!!!!!!!!!!!!!!!!!!!!!!
