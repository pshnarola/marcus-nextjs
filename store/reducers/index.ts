import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  search: searchReducer,
  searchbarWidth: generalReducer,
});
