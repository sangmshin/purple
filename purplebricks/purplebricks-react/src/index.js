import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import {store} from './redux-store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    {/* <StrictMode> */}
      <App />
    {/* </StrictMode> */}
  </Provider>
, document.getElementById('root'));

