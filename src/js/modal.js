import { refs } from './refs';
import { api } from './API.js';

export async function holderOpenModal(event) {
  console.log('holderOpenModal ', event.target.dataset.id, event.target);
  const filmId = event.target.dataset.id;
  if (filmId) {
    refs.modal.classList.remove('visually-hidden');
    refs.body.classList.add('no-scroll');
    try {
      const filmInfo = await api.fetchMovieInfo(filmId);
      refs.filmCard.innerHTML = createModalCards(filmInfo);
    } catch (error) {
      console.log('ERROR! ', error);
    }
  }
}

function createModalCards({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
}) {
  const genresName = [];
  for (const gener of genres) {
    genresName.push(gener.name);
  }
}
const modalTheme = document.querySelector('.modal__movie');

async function holderOpenModal(event) {
    const filmId = event.target.dataset.id;
    if (filmId) {
        refs.modal.classList.remove('visually-hidden');
        refs.body.classList.add('no-scroll')
        try {
            const filmInfo = await api.fetchMovieInfo(filmId);
            refs.filmCard.innerHTML = createModalCards(filmInfo);

            const modalDark = document.body.classList.contains('darkTheme');
            if (modalDark) {
              modalTheme.classList.add('darkModal');
              modalTheme.classList.remove('ligthModal');
            } else {
              modalTheme.classList.remove('darkModal');
              modalTheme.classList.add('ligthModal');
            }
        } catch (error) {
    console.log('ERROR! ', error);
        }
    }
}

function createModalCards({poster_path, original_title, vote_average, vote_count, popularity, genres,
    overview, id }) {
    const genresName = [];
    for (const gener of genres) {
        genresName.push(gener.name);
    }

    return `
            <div class="modal__poster" data-id = ${id}>
                <img class="modal__poster-img" src="https://image.tmdb.org/t/p/w342${poster_path}">
            </div>
            <div class="modal__info-conteiner">
                <h2 class="modal__movie-title">
                    ${original_title}
                </h2>
                <div class="modal__movie-info">
                    <div class="modal__info-name">
                        <ul class="modal__info-name-list list">
                            <li class="modal__info-name-item">
                                Vote / Votes
                            </li>
                            <li class="modal__info-name-item">
                                Popularity
                            </li>
                            <li class="modal__info-name-item">
                                Original Title
                            </li>
                            <li class="modal__info-name-item">
                                Genre
                            </li>
                        </ul>
                    </div>
                    <div class="modal__info-value">
                        <ul class="modal__info-value-list list">
                            <li class="modal__info-value-item">
                                <span class="modal__span-vote">
                                    ${Math.round(vote_average)}
                                </span>
                                /
                                <span class="modal__span-votes">
                                    ${vote_count}
                                </span>
                            </li>
                            <li class="modal__info-value-item">
                                ${popularity}
                            </li>
                            <li class="modal__info-value-item">
                                ${original_title}
                            </li>
                            <li class="modal__info-value-item">
                                ${genresName.join(', ')}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="modal__about">
                    <h3 class="modal__about-title">
                        About
                    </h3>
                    <p class="modal__movie-description">
                        ${overview}
                    </p>
                </div>
            </div>
    `;
}

export function holderCloseModal(event) {
  refs.modal.classList.add('visually-hidden');
  refs.body.classList.remove('no-scroll');
}

export function holderCloseByPressBackdrop(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
  }
}

export function handlerEscPrecc(event) {
  // console.log(event.key)
  if (event.code === 'Escape') {
    refs.modal.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
  }
  document.removeEventListener('keydown', handlerEscPrecc);
}
