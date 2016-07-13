import { combineReducers } from 'redux';

const info = (state={}, action) => {
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


const businessCardApp = combineReducers({ info })

export default businessCardApp;
