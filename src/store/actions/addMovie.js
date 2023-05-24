import { ADD_MOVIE } from "../constants/actionTypes";

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
