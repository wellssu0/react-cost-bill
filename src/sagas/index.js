import { takeEvery, all, put  } from 'redux-saga/effects'
import axios from 'axios'


function* getInitDate(){
  yield put({ type: 'INCREMENT' })
}

function* ListenerInitDate(){
  yield takeEvery('INCREMENT_ASYNC' ,getInitDate)
}

export default function* rootSagas(){
  yield all([
    ListenerInitDate(),
  ])
}
