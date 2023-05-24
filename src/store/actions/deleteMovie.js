import { DELETE_MOVIE } from "../constants/actionTypes";

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload,
});
