import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { fetchData } from './../actions/fetchData'

const middleware = applyMiddleware(logger(), thunk);

const store = createStore(
  combinedReducers,
  middleware
);


// test dispatch to make sure things work so far between actions/reducers/store
// store.dispatch(changeName('chris'))
// store.dispatch(fetchData())

export default store;
