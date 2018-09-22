import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca24jfdslfajslf42331423",
    title: "Terminator",
    genre: { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331424",
    title: "Die Hand",
    genre: { _id: "5b21ca24jfdslfajslf42331314", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331425",
    title: "Trip to Italy",
    genre: { _id: "5b21ca24jfdslfajslf42331315", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.filter(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = movie.genre;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
  movieInDb.publishDate = movie.publishDate;

  if (!movieInDb._id) {
    movies.push(movieInDb);
  }
}
