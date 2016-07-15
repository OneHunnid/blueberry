import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const retrieveData = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        fetching: true,
        data: data
      }
      case 'FETCH_DATA_REJECTED':
        return {
          ...state,
          fetching: false,
          error: action.payload,
        }
      case 'FETCH_DATA':
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload,
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
