import {
  GET_SEARCH_PAGE
} from "./actionTypes";
import axios from "axios";


const search_API = "http://localhost:8000/search/";

export function searchPage() {
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
      .then(res => dispatch(getSearchPageAction(res.data)))
      .catch(err => console.log("ERROR", err));
  };
}

function getSearchPageAction(data) {
  return {
    type: GET_SEARCH_PAGE,
    payload: {
      data
    }
  };
}