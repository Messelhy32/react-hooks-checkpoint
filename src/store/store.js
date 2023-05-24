import { legacy_createStore } from "redux";
import combineReducers from "./reducers/index";

const store = legacy_createStore(combineReducers);

export default store;
