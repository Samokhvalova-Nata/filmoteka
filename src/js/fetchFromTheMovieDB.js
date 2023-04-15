//OD: tools for fetching info from TheMovieDB

import axios from 'axios';

const API_KEY = '7fc57a32bb8b4747bafc97bb7301e33f';
const BASE_URL = 'https://api.themoviedb.org';

//fetches popular movies for a week period by page number
export const fetchPopMovies = async page => {
  const { data } = await axios.get(
    `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
 // console.log('fetchMovies-data:', data); //TODO: remove
  return data;
};

export const fetchGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return data;
}

const getConf = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/3/configuration?api_key=${API_KEY}`
  );
  console.log('config=', data)
  return data;
}

export const conf = getConf();

//result of configuration fetch
export const poster_sizes = [
  'w92',
  'w154',
  'w185',
  'w342',
  'w500',
  'w780',
  'original',
];

