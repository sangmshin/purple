import {GET_SINGLE_LIST, CLEAR_SINGLE_DATA} from '../actions/actionTypes';

export default (state={}, {type, payload}) => type === GET_SINGLE_LIST ? payload.data : type === CLEAR_SINGLE_DATA ? payload.data : state