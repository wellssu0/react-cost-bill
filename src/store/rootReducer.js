import { combineReducers } from "redux-immutable"
import homeReducer from './homeReducer'
import createReducer from './createReducer'

const appReducer = combineReducers({
  home : homeReducer,
  create: createReducer
})

export default appReducer