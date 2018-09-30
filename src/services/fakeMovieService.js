import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca24jfdslfajslf42331423",
    title: "Terminator",
    genre: { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca24jfdslfajslf42331424",
    title: "Die Hand",
    genre: { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331425",
    title: "Trip to Italy",
    genre: { _id: "5b21ca24jfdslfajslf42331314", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331426",
    title: "Bad Day",
    genre: { _id: "5b21ca24jfdslfajslf42331315", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca24jfdslfajslf42331427",
    title: "Happy Family",
    genre: { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331428",
    title: "What a day",
    genre: { _id: "5b21ca24jfdslfajslf42331314", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331429",
    title: "Last Night",
    genre: { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331430",
    title: "Gone with the Wind",
    genre: { _id: "5b21ca24jfdslfajslf42331315", name: "Thriller" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca24jfdslfajslf42331431",
    title: "Pop up",
    genre: { _id: "5b21ca24jfdslfajslf42331314", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  const movieArray = movies.filter(m => m._id === id);
  return movieArray.length === 0 ? null : movieArray[0];
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
  movieInDb.publishDate = movie.publishDate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
