import axios from 'axios';

export default class FetchThemoviedbAPI {
    BASE_URL = 'https://api.themoviedb.org/3/';
    API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.idMovie = null;
      }

  async fetchMovie() {
     try {
      
      const url =  (`${this.BASE_URL}`, {
            params: {
                api_key: this.API_KEY,
                q: this.query,
                page: this.page,
                language: 'en-US',
            }
        });
     const response = await axios.get(url);
     return response.data;
    } catch (error) {
      throw new Error(error.message);
      };
    };

    async fetchTrendMovies() {
        try {
          const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
            throw new Error(error.message);
        };
      };


    async fetchMovieDetails(id) {
      try {
        const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
          throw new Error(error.message);
      };
     };


      incrementPage() {
        this.page += 1;
      };

      decrementPage() {
        this.page -= 1;
      };

      resetPage() {
        this.page = 1;
      };
};


