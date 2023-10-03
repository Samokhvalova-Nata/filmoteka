const genresAll = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

function getSome(idArr) {
 
  const len = idArr.length;
  if (len === 0) return '';

  let n = [];
  for (let i = 0; i < Math.min(2, len); i += 1) {
    n.push(getName(idArr[i]));
  }
  if (len > 2) n.push('Other');

  return n.join(', ');
}

function getName(id) {
  return genresAll[id] || `Unknown genre(${id})`;
}

export { getName, getSome };
