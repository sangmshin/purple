// import data from "./getSearchResultsReducer";
import data from "./getSearchPageReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  data,
  // fullData,
});

export default rootReducers;
