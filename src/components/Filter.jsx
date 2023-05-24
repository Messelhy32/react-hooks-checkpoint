/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
function Filter() {
  const movies = useSelector((state) => state.movies.movieList);
  const sortedMovies = movies.slice().sort((a, b) => b.rating - a.rating);
  return (
    <div className="grid gap-4 grid-cols-3">
      {sortedMovies.map((movie) => (
        <MovieCard
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
export default Filter;
