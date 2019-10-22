import { takeEvery, all, put ,call } from 'redux-saga/effects'
import axios from 'axios'
import * as constants from '../constants'
import * as actions from '../actions'

//初始化下拉框日期
function* initDate(action) {
  try {
      const response = yield constants.getCurrentDate()
      // console.log(response)
      yield put(actions.InitDateAction(response))
  } catch(e) {
      console.log(e)
  }
}
//获取当月列表
function* getCurrentItems(action) {
  const api = `/items?monthCategory=${action.year}-${action.month}&_sort=timestamp`
  try {
      yield put(actions.openLoading())
      const response = yield call(axios.get, api)
      const itemsArr = response.data.map( item => {
        item.category = constants.categories[item.cid]  
        return item
      })
      yield put(actions.currentItemsAction(itemsArr))
  } catch(e) {
      console.log(e)
  }
}
//修改item
function* editItem(action) {
  try {
      yield axios.put(`/items/${action.item.id}`, action.item)
  } catch(e) {
      console.log(e)
  }
}
//添加item
function* addItem(action) {
  try {
    yield call(axios.post,'/items',{...action.item})
  } catch(e) {
      console.log(e)
  }
}
//删除item
function* removeItem (action) {
  try {
    const id = action.item.get("id")
    yield call(axios.delete,`/items/${id}`)
  } catch(e) {
      console.log(e)
  }
}
//获取editItem
function* showEditItem (action) {
  try {
    yield put(actions.openRefresh())
    const response = yield call(axios.get,`/items/${action.id}`)
    response.data.category = constants.categories[response.data.cid]  
    yield put(actions.showEditData(response.data))
  } catch(e) {
      console.log(e)
  }
}


function* watchCurrentItems(){
  yield takeEvery( constants.CURRENT_ITEMS_DATA , getCurrentItems)
}
function* watchInitDate(){
  yield takeEvery( constants.GET_INIT_DATE , initDate)
}
function* watchEditItem(){
  yield takeEvery( constants.REPLACE_EDIT_DATA , editItem)
}
function* watchAddItem(){
  yield takeEvery( constants.ADD_ITEM , addItem)
}
function* watchRemoveItem(){
  yield takeEvery( constants.REMOVE_ITEM , removeItem)
}
function* watchShowEditItem(){
  yield takeEvery( constants.SHOW_EDIT_DATA , showEditItem)
}

export default function* rootSagas(){
  yield all([
    watchInitDate(),
    watchCurrentItems(),
    watchEditItem(),
    watchAddItem(),
    watchRemoveItem(),
    watchShowEditItem(),
  ])
}
