import {
  GET_SINGLE_LIST
} from './actionTypes';
import Axios from 'axios';


export function getSingleList(id) {
  return dispatch => {
    return Axios.get(`https://api.purplebricks.com/listing-details/api/v2/listing/${id}`, {
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
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