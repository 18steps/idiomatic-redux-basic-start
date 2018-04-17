import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers';
import thunk from 'redux-thunk';

const middlewares = [
  thunk,
];

const store = createStore(
  app,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export default store;