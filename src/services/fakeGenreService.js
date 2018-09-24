export const genres = [
  { _id: "5b21ca24jfdslfajslf42331313", name: "Action" },
  { _id: "5b21ca24jfdslfajslf42331314", name: "Comedy" },
  { _id: "5b21ca24jfdslfajslf42331315", name: "Thriller" }
];

export function getGenres() {
  return genres.filter(g => g);
}
