import {createStore, compose , applyMiddleware} from "redux"
import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga'
import mySaga from '../page/home/store/sagas'


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(mySaga)

export default store