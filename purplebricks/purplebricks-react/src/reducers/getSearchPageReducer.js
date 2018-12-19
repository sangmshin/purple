import {
  GET_SEARCH_PAGE,
  GET_SEARCH_RESULTS,
  RESET_SEARCH_PAGE
} from '../actions/actionTypes';
import _ from 'lodash';
// export default (state={}, {type, payload}) => type === GET_SEARCH_PAGE ? payload.data : state

export default (state = [], {
  type,
  payload
}) => {
  switch (type) {

    case GET_SEARCH_PAGE:
      return payload.data.results

    case GET_SEARCH_RESULTS:
      return _.filter(payload.data.results, {
        'state': payload.state.toUpperCase()
      })
      // return [...payload.data.results.filter(list=> list.state === payload.state.toUpperCase())]

    case RESET_SEARCH_PAGE:
      return payload.data.results

    default:
      return state
  }
}