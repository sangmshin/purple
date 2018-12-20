import {BACK_TO_SEARCH} from '../actions/actionTypes';

export default (state={}, {type, payload}) => type === BACK_TO_SEARCH ? payload.isBackToSearch : state