import { combineReducers } from "redux-immutable"
import { reducer as homeReducer} from '../page/home/store'
import { reducer as createReducer} from '../page/create/store'

const reducer = combineReducers({
  home : homeReducer,
  create: createReducer
})

export default reducer