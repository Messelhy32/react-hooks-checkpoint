import movieList from "../constants/movieList";
import { ADD_MOVIE, FAV_MOVIE, IS_FAV } from "../constants/actionTypes";
import { DELETE_MOVIE } from "../constants/actionTypes";

const init = { movieList, favorites: [] };
const moviesReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movieList: [...movieList, action.payload] };
    case DELETE_MOVIE:
      return { ...state, movieList: action.payload };
    case FAV_MOVIE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case IS_FAV:
      // eslint-disable-next-line no-case-declarations
      const updatedMovieList = state.movieList.map((movie) => {
        if (movie.id === action.payload) {
          return { ...movie, favorite: true };
        }
        return movie;
      });
      return { ...state, movieList: updatedMovieList };
    default:
      return state;
  }
};

export default moviesReducer;
