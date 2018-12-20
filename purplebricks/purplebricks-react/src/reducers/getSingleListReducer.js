import {GET_SINGLE_LIST} from '../actions/actionTypes';

export default (state={}, {type, payload}) => type === GET_SINGLE_LIST ? payload.data : state