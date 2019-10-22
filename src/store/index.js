import {createStore, compose , applyMiddleware} from "redux"
import rootReducer from "./rootReducer"
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSagas)

export default store