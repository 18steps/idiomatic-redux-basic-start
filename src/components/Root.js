import React from 'react';
import App from './App';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


import { Provider } from 'react-redux';
import app from '../reducers';


const store = createStore(
  app,
  composeWithDevTools(
    applyMiddleware(...[]),
  ),
);

const starWars = {
  people: [],
};

const Root = () => (
  <Provider store={store}>
    <App
      starWars={starWars}
    />
  </Provider>
);

export default Root;