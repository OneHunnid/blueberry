import { createStore, applyMiddleware } from 'redux';
import businessCardApp from './../reducers/index';
import createLogger from 'redux-logger';
import { changeName, changePosition, changeContact } from './../actions';

const logger = createLogger();

const store = createStore(
  businessCardApp,
  applyMiddleware(logger)
);

// test dispatch to make sure things work so far between actions/reducers/store
// store.dispatch(changeName('chris'))
// store.dispatch(changeName('john'))

export default store;
