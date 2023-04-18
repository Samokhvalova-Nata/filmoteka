const galleryListEl = document.querySelector('.film__gallery');

export function heightMax() {
  let hScreen = galleryListEl.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });
}
const scrollUo = document.querySelector('.toTopBtn');

scrollUo.addEventListener('scroll', () => {
  window.scrollBy({
    top: 0,
    behavior: 'smooth',
  });
});
