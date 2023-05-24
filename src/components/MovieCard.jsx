import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteMovie } from "../store/actions/deleteMovie";
import { favMovie } from "../store/actions/favMovie";
import { isFav } from "../store/actions/isFav";
function MovieCard(props) {
  const movies = useSelector((state) => state.movies.movieList);
  const favorites = useSelector((state) => state.movies.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleId = (id) => {
    const newMovieList = movies.filter((movie) => movie.id !== id);
    dispatch(deleteMovie(newMovieList));
  };
  const isFavorite = favorites.includes(props.id);
  const [fav, setFav] = useState(isFavorite);
  const handleFav = (movie) => {
    const updatedMovie = {
      ...movie,
      favorite: !fav,
    };
    setFav(!fav);
    // const find = movies.find((el) => el.id === movie.id);
    // find.favorite = true;
    // find.children = movie.children;
    dispatch(favMovie(updatedMovie));
    dispatch(isFav(movie.id));
  };
  return (
    <>
      <div>
        {props.children}
        <h1 className="mt-2 text-2xl font-bold">{props.title}</h1>
        <p className="mt-2 text-md">{props.description}</p>
        <i
          onClick={() => handleFav(props)}
          className={
            !fav
              ? "fa-regular fa-heart cursor-pointer"
              : "fa-solid fa-heart cursor-pointer"
          }
        ></i>
        <p className="mt-2 text-sm font-bold rounded-md bg-slate-400 text-white p-1 w-40 m-auto">
          {props.rating}/10
        </p>
        <button
          className="mt-2 text-blue-600 font-semibold"
          onClick={() => navigate(`/${props.id}`)}
        >
          More Info
        </button>
        <button
          className="block text-center m-auto rounded-md bg-slate-400 text-white mt-2 text-sm font-bold p-2 hover:bg-slate-500"
          onClick={() => handleId(props.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.any.isRequired,
  id: PropTypes.any,
  children: PropTypes.any.isRequired,
};
export default MovieCard;
