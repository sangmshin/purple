// import data from "./getSearchResultsReducer";
import data from "./getSearchPageReducer";
import singleData from "./getSingleListReducer";
import isBackToSearch from "./backToSearchReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  data,
  singleData,
  isBackToSearch
});

export default rootReducers;
