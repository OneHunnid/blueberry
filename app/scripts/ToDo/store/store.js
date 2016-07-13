import { createStore, applyMiddleware } from 'redux';
import todoApp from './../reducers/index';
import createLogger from 'redux-logger';

const logger = createLogger();

const store = createStore(
  todoApp,
  applyMiddleware(logger)
);

export default store;
