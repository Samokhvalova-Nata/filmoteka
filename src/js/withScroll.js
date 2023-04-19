import { refs } from './refs';

export function heightMax() {
  let hScreen = refs.gallery.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight * 4,
    behavior: 'smooth',
  });
}
/* moved to common script
const scrollUo = document.querySelector('.toTopBtn');

scrollUo.addEventListe ner('click', () => {
  window.scrollBy({
    top: 0,
    behavior: 'smooth',
  });
}); */
