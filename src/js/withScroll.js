import { refs } from './refs';

export function heightMax() {
  let hScreen = refs.gallery.getBoundingClientRect();
  const { height: cardHeight } = hScreen;
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
