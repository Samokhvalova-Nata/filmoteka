// render gallery==============work with function async==

// ==============now in the js file =>pop-films-loading !!!

function heightMax() {
  let hScreen = elements.newBtn.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });
}

