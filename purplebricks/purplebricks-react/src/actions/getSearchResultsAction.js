import { GET_SEARCH_RESULTS } from "./actionTypes";
import axios from "axios";


const search_API = "http://localhost:8000/search/";
const search_API_prod = 'http://purplebricks.us-east-1.elasticbeanstalk.com/search'


export function getResults(state) {
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
      .then(res => dispatch(getSearchResultsAction(res.data, state)))
      .catch(err => console.log("ERROR", err));
  };
}

export function getSearchResultsAction(data, state) {
  return {
    type: GET_SEARCH_RESULTS,
    payload: { data, state }
  };
}
