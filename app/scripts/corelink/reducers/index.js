import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import firebaseTools from './../utils/firebaseWrapper'
import data from './../data/data'

const retrieveData = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        fetching: true,
        data: data
      }
    default:
      return state
  }
}


const combinedReducers = combineReducers({
    retrieveData,
    routing: routerReducer
  })

export default combinedReducers;
