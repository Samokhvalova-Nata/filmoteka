//******************* API.js DOCUMENTATION *******************
/*
  EXPORTED:  instance of class FetchTheMovieDbAPI
  METODS:
    *** async fetchMovie(page, searchQuery)
      - fetches movies by page and searchQuery parameters
      - searchQuery is optional, if absent the value from previous search will be used)
    *** async fetchPopMovies(page)
      - fetches weekly trending movies by page number
      - NB! period('week' or 'day') can be changed by
    *** async fetchMovieInfo(id)
      - fetches movie details by movie id
    *** async fetchGenres()
      - returns data with ids and names of genres
    *** async fetchConf()
      - returns data with backend configuration,
        such as set of widths of posters, and other
      NB! the poster_sizes are obtained from fetchConf run@development
        and stored in poster_sizes property created in constructor
    *** getPosterSize(widthMin)
      - returns first size which is equal or larger then widthMin
    *** togglePeriod()
      - changes value of period property used in fetchPopMovies method
      - returns the new value
    TODO: offer to implement a button for toggle 'week' and 'day'
  TESTCASES: ALL OK (pls see here below)
*/
//************************** TESTCASES *************************
//FOR TESTING, YOU SHOULD COPY ALL BELOW
//THIS LINE TO THE TOP OF ANY UNIT USED ON TEST BED
import { api } from './API';
console.log('***** UNIT TESTING API.js *****');
//* 1 - TEST fetchMovie(page, searchQuery): OK
(async () => {
  try {
    const r = await api.fetchMovie(1, 'Avatar');
    console.log('***TEST-1 fetchMovie(to be used in ???.js TODO:):');
    console.log('TEST api.fetchMovie(1, "Avatar"):', r);
  } catch (err) {
    console.log('ERROR! ', err);
  }
})();
//* 2 - TEST fetchPopMovies: OK
(async () => {
  try {
    const r = await api.fetchPopMovies(2);
    console.log(
      '***TEST-2 fetchPopMovies(to be used in pop-films-loading.js):'
    );
    console.log('TEST api.fetchPopMovies(2):', r);
  } catch (err) {
    console.log('ERROR! ', err);
  }
})();
//* 3 - TEST fetchMovieInfo: OK
(async () => {
  try {
    const r = await api.fetchMovieInfo(5);
    console.log('***TEST-3 fetchMovieInfo (to be used TODO:):');
    console.log(
      'TEST api.fetchMovieInfo(5):',
      r.title,
      r.title === 'Four Rooms'
    );
  } catch (err) {
    console.log('ERROR! ', err);
  }
})();
//* 4 - TEST fetchGenres: OK
(async () => {
  try {
    const r = await api.fetchGenres();
    console.log('***TEST-4 fetchGenres (used in genres.js):');
    console.log('TEST api.fetchGenres:', r.genres);
  } catch (err) {
    console.log('ERROR! ', err);
  }
})();
//* 5 - TEST fetchConf: OK
(async () => {
  try {
    const configu = await api.fetchConf();
    console.log('***TEST-5 fetchConf (used in api.js):');
    console.log('TEST api.fetchConf:', configu);
  } catch (err) {
    console.log('ERROR! ', err);
  }
})();
//* 6 - TEST togglePeriod: OK
console.log('***TEST-6 togglePeriod(for future use):');
let r = api.togglePeriod();
console.log('day=', r, r === 'day');
r = api.togglePeriod();
console.log('week=', r, r === 'week');
r = api.togglePeriod();
console.log('day=', r, r === 'day');
r = api.togglePeriod();
console.log('day=', r, r === 'week');
//* 7 - TEST getPosterSize: OK
('***TEST-7 getPosterSize(to be used in pop-films-loading.js):');
const sizes = [
  90,
  150,
  180,
  340,
  500,
  750, //test data
  800, //'original'
  1200,
];
poster_sizes = [
  //test data
  'w92',
  'w154',
  'w185',
  'w342',
  'w500',
  'w780',
  'original',
  'original',
];
console.log('***TEST-7 getPosterSize:');
for (let i = 0; i < sizes.length; i += 1) {
  r = api.getPosterSize(sizes[i]);
  console.log(
    api.poster_sizes[i] || 'none',
    'param=' + sizes[i],
    'resp=',
    r,
    r === poster_sizes[i]
  );
}
