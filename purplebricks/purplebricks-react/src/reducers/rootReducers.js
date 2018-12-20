// import data from "./getSearchResultsReducer";
import data from "./getSearchPageReducer";
import singleData from "./getSingleListReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  data,
  singleData
});

export default rootReducers;
