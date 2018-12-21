import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import {store} from './redux-store/store';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
, document.getElementById('root'));

