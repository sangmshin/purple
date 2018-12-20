import {BACK_TO_SEARCH} from './actionTypes';

export function backToSearchAction(){
  return {
    type: BACK_TO_SEARCH,
    payload: { isBackToSearch: true }
  }
}