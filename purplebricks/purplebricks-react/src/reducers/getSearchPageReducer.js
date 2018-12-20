import {
  GET_SEARCH_PAGE,
  GET_SEARCH_RESULTS,
  RESET_SEARCH_PAGE
} from '../actions/actionTypes';
import _ from 'lodash';


export default (state = [], {
  type,
  payload
}) => {
  switch (type) {

    case GET_SEARCH_PAGE:
      return payload.data.results

    case GET_SEARCH_RESULTS:
      let results = _.filter(payload.data.results, {
        'state': payload.state.toUpperCase()
      })
      
      const errorMessage = 'Sorry, no listings matched your search and filter criteria'
      
      return results.length === 0
      ? [errorMessage]
      : [...results, payload.state]
      // console.log('REDUCER', _.filter(payload.data.results, {
      //   'state': payload.state.toUpperCase()
      // }).length)
      // return results
      // return [...payload.data.results.filter(list=> list.state === payload.state.toUpperCase())]

    case RESET_SEARCH_PAGE:
      return payload.data.results

    default:
      return state
  }
}