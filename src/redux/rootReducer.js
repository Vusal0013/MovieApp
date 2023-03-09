import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducers/favoriteReducer";
import movieReducer from "./movieReducers/movieReducer";
const rootReducer = combineReducers({ movieReducer, favoriteReducer });
export default rootReducer;
