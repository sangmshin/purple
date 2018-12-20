import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { persistState } from "redux-devtools";
import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducers";

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}
const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  persistState(getDebugSessionKey())
);

const initialState = {
  isBackToSearch: false
};

// INITIALIZE STORE
export const store = createStore(rootReducers, initialState, enhancer);
