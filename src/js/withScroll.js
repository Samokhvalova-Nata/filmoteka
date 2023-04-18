const galleryListEl = document.querySelector('.film__gallery');

export function heightMax() {
  let hScreen = galleryListEl.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });
}

