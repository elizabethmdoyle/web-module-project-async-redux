import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux"
import thunk from 'redux-thunk';

import reducer from './reducers'

import App from './App';
import './index.css';

const store = createStore(applyMiddleware(reducer, thunk))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
