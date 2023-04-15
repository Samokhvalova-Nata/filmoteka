import axios from 'axios';

export class FetchThemoviedbAPI {
    BASE_URL = 'https://api.themoviedb.org/3/';
    API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.idMovie = null;
      }

  async fetchMovie() {
     try {
      
      return await axios.get(`${this.BASE_URL}`, {
            params: {
                api_key: this.API_KEY,
                q: this.query,
                page: this.page,
                language: 'en-US',
            }
        });
    } catch (error) {
      throw new Error(error.message);
      };
    };
};
