import { createStore, combineReducers } from 'redux';

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.payload}
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
})

const Store = createStore(reducers);

Store.subscribe(() => {
  console.log("store changed", Store.getState())
})

Store.dispatch({type: "CHANGE_NAME", payload: "Adam"})
Store.dispatch({type: "CHANGE_AGE", payload: 35})
Store.dispatch({type: "CHANGE_AGE", payload: 36})

export default Store;
