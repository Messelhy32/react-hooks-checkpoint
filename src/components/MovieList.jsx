import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
function MovieList() {
  const movies = useSelector((state) => state.movies.movieList);
  console.log(movies);
  return (
    <div className="grid gap-4 grid-cols-3">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.title}
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
        >
          <img
            className="w-[350px] m-auto h-[500px]"
            src={movie.posterURL}
            alt={movie.title}
          />
        </MovieCard>
      ))}
    </div>
  );
}
MovieList.propTypes = {
  movies: PropTypes.any,
};

export default MovieList;
