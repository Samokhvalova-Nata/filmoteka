import axios from 'axios';

class FetchTheMovieDbAPI {

  #period = 'week'; 
  #searchQuery = 'Avatar'; 

  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';
  backEndConfig = { test: 0 };
  poster_sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];

  constructor() {
    this.fetchConf(); 
  }
  search = null;
  page = 1;
  async fetchMovie(searchQuery) {

    if (searchQuery) {
      this.#searchQuery = searchQuery;
    }

    try {
      const url = `${this.#BASE_URL}/search/movie?api_key=${
        this.#API_KEY
      }&language=en-US&page=${this.page}&query=${this.#searchQuery}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchPopMovies() {
    try {
      return await axios.get(
        `${this.#BASE_URL}trending/movie/${this.#period}?api_key=${
          this.#API_KEY
        }&page=${this.page}`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchMovieInfo(id) {
    try {
      const url = `${this.#BASE_URL}movie/${id}?api_key=${
        this.#API_KEY
      }&language=en-US`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchGenres() {
    const url = `${this.#BASE_URL}genre/movie/list?api_key=${
      this.#API_KEY
    }&language=en-US`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchConf() {
    const url = `${this.#BASE_URL}configuration?api_key=${this.#API_KEY}`;
    try {
      const r = await axios.get(url);
      this.backEndConfig = r.data; 
      return r.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getPosterSize(widthMin) {
    for (let i = 0; i < this.poster_sizes.length; i += 1) {
      if (widthMin <= Number(this.poster_sizes[i].slice(1))) {
        return this.poster_sizes[i];
      }
    }
    return this.poster_sizes[this.poster_sizes.length - 1];
  }

  togglePeriod() {
    this.#period = this.#period === 'week' ? 'day' : 'week';
    return this.#period;
  }
}

export const api = new FetchTheMovieDbAPI();
