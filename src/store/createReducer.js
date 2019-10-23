import { fromJS } from 'immutable'
import * as constants from '../constants'

const defaultState = fromJS({
  categoriesList: constants.categories,
  errorMsg : '',
  activeTab:constants.OUT_TYPE,
  categorySelect: constants.categories[0],
  validatePass:false,
  monthCategory:constants.initMonthCategory(),
  editMode:false,
  title:null,
  price:null,
  date: constants.getNowDate(),
  editItem:null,
  isLoading:false,
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
      return state.merge({
        date:fromJS(action.date),
        monthCategory:fromJS(constants.initMonthCategory(action.date))
      })
    case constants.INIT_CATEGORY:
      return state.merge({
        activeTab: fromJS(constants.OUT_TYPE),
        categorySelect: fromJS(constants.categories[0]),
        title:null,
        price:null,
        monthCategory:fromJS(constants.initMonthCategory()),
        date:fromJS(constants.getNowDate()),
        editMode:false,
        editItem:null,
      })
    case constants.OPEN_REFRESH:
      return state.set('isLoading',true)
    case constants.SHOW_EDIT_ITEM:
      return state.merge({
        activeTab: fromJS(action.item.category.type),
        categorySelect: fromJS(action.item.category),
        title:fromJS(action.item.title),
        price:fromJS(action.item.price),
        date:fromJS(action.item.date),
        editMode:true,
        editItem:fromJS(action.item),
        isLoading:false,
      })
    default:
      return state
  }
}