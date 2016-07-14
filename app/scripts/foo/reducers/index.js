import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const info = (state={
    user: {
      name: null,
      position: null,
      contact: null,
    }
  }, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        name: action.name,
      }
    case 'CHANGE_POSITION':
      return {
        position: action.position,
      }
    case 'CHANGE_CONTACT':
      return {
        contact: action.contact,
      }
    default:
      return state
  }
}


const businessCardApp = combineReducers({
    ...info,
    routing: routerReducer
  })

export default businessCardApp;
