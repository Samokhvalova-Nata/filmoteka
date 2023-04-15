//OD - class for Genres: methods getSome(idArr) and getAll(idArr) to be used for obtaining genres string for cards

import { fetchGenres } from './fetchFromTheMovieDB';

class Genres {
  #genresAll;

  constructor() {
    this.#genresAll = {};
    this.fill();
  }

  getName(id) {

   // console.log(this.#genresAll);
    return this.#genresAll[id] || `Unknown genre(${id})`;
  }

  getSome(idArr) {
    const len = idArr.length;
    if (len === 0) return '';

    let n =[];
    for (let i = 0; i < Math.min(3, len); i += 1) {
      n.push(genres.getName(idArr[i]));
    }
    if (len > 3) n[2] = 'Other';

    const r = n.join(', ');
    return r.slice(0, r.length - 2);

  }

  getAll(idArr) {
    if (idArr.length === 0) return '';

    const r = idArr.map(e => genres.getName(e)).join(', ');
    return r.slice(0, r.length - 2);
  }

  async fill() {
    try {
      const { genres } = await fetchGenres();
    //  console.log('fill Genres:', genres);
      genres.forEach(element => {
        this.#genresAll[element.id] = element.name;
      });
    } catch (error) {
      //TODO: notification with Notiflix.error
      console.log('ERROR! ', error);
    }
  }
}

export const genres = new Genres();

