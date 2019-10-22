import { fromJS } from 'immutable'
import * as constants from '../constants'

const defaultState = fromJS({
  categoriesList: constants.categories,
  errorMsg : '',
  activeTab:constants.OUT_TYPE,
  categorySelect: constants.categories[0],
  validatePass:false,
  editMode:false,
  title:'',
  price:'',
  date:'',
  editItem:null
})

export default (state = defaultState , action) => {
  switch(action.type){
    case constants.OUT_CATEGORIES_TAB:
      return state.set('activeTab',fromJS(constants.OUT_TYPE))
    case constants.IN_CATEGORIES_TAB:
      return state.set('activeTab',fromJS(constants.IN_TYPE))
    case constants.CATEGORY_SELECT:
      return state.set('categorySelect',fromJS(action.item))
    case constants.CHANGE_TITLE:
      return state.set('title',fromJS(action.title))
    case constants.CHANGE_PRICE:
      return state.set('price',fromJS(action.price))
    case constants.CHANGE_DATE:
      return state.set('date',fromJS(action.date))
    case constants.INIT_CATEGORY:
      return state.merge({
        activeTab: fromJS(constants.OUT_TYPE),
        categorySelect: fromJS(constants.categories[0]),
        title:null,
        price:null,
        date:null,
        editMode:false,
        editItem:null,
      })
    case constants.SHOW_EDIT_DATA:
      return state.merge({
        activeTab: fromJS(action.data.category.type),
        categorySelect: fromJS(action.data.category),
        title:fromJS(action.data.title),
        price:fromJS(action.data.price),
        date:fromJS(action.data.date),
        editMode:true,
        editItem:fromJS(action.data),
      })
    default:
      return state
  }
}