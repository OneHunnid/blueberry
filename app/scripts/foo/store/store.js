import { createStore, applyMiddleware } from 'redux';
import businessCardApp from './../reducers/index';
import logger from 'redux-logger';
import { changeName, changePosition, changeContact } from './../actions';

const middleware = applyMiddleware(logger());

const store = createStore(
  businessCardApp,
  middleware
);


// test dispatch to make sure things work so far between actions/reducers/store
// store.dispatch(changeName('chris'))
// store.dispatch(changeName('john'))

export default store;
