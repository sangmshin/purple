import {CLEAR_SINGLE_DATA} from './actionTypes';


export function clearSingleDataAction( data = {} ){
  return {
    type: CLEAR_SINGLE_DATA,
    payload: { data }
  }
}