import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function FavMovie() {
  const favMovies = useSelector((state) => state.movies.favorites);
  console.log(favMovies);
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        {favMovies.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.title}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
          >
            {movie.children}
          </MovieCard>
        ))}
      </div>
    </>
  );
}

export default FavMovie;
