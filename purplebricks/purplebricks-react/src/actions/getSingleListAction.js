import {
  GET_SINGLE_LIST
} from './actionTypes';
import axios from 'axios';

const listing_API = "http://localhost:8000/listing/";
const listing_API_prod = "http://purplebricks.us-east-1.elasticbeanstalk.com/listing/";

export function getSingleList(id) {
  return dispatch => {
    return axios.get( listing_API + id, {
        headers: {
          'crossDomain': true,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'mode': 'cors'
        }
      })
      .then(res => dispatch(getSingleListAction(res.data)))
      .catch(err => console.log("ERROR: ", err))
  }
}

function getSingleListAction(data){
  return {
    type: GET_SINGLE_LIST,
    payload: { data }
  }
}