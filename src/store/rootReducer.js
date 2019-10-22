import { combineReducers } from "redux-immutable"
import homeReducer from './homeReducer'
import createReducer from './createReducer'

const rootReducer = combineReducers({
  home : homeReducer,
  create: createReducer
})

export default rootReducer