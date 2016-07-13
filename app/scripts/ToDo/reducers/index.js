import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// Reducer modifies state based on the action.
// combinedReducers allows you to split reducing functions into separate functions
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
