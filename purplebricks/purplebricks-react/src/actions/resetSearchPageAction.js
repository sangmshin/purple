import {
  RESET_SEARCH_PAGE
} from "./actionTypes";
import axios from "axios";


const search_API = "http://localhost:8000/search/";

export function resetSearchPage() {
  return dispatch => {
    return axios
      .get(search_API, {
        headers: {
          'crossDomain': true,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'mode': 'cors'
        }
      })
      .then(res => dispatch(resetSearchPageAction(res.data)))
      .catch(err => console.log("ERROR", err));
  };
}

function resetSearchPageAction(data) {
  return {
    type: RESET_SEARCH_PAGE,
    payload: {
      data
    }
  };
}