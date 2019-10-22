import { fromJS } from 'immutable'

import * as constants from '../constants'

const defaultState = fromJS({
  tabView: constants.LIST_VIEW,
  currentDate: null,
  selectYear:null,
  selectMonth:null,
  showDateMenu: false,
  items:[],
  currentItemsAndCategory:[],
})

const homeReducer = (state = defaultState , action) => {
  switch(action.type){
    case constants.TOGGLE_DATE_MENU:
      return state.set('showDateMenu',!state.get('showDateMenu'))
    case constants.CHOOSE_YEAR:
      return state.set('selectYear',fromJS(action.item))
    case constants.CHOOSE_MONTH:
      return state.merge({
        selectMonth:fromJS(action.item),
        showDateMenu:false,
        currentDate:fromJS({ year: state.get('selectYear'), month: action.item})
      })
    case constants.INIT_DATE:
      return state.merge({
        selectMonth:fromJS(action.date.month),
        selectYear:fromJS(action.date.year),
        currentDate:fromJS(action.date)
      })
    case constants.CLOSE_DATE_MENU:
      return state.set('showDateMenu',false)
    case constants.LIST_TAB:
      return state.set('tabView',fromJS(constants.LIST_VIEW))
    case constants.CHART_TAB:
      return state.set('tabView',fromJS(constants.CHART_VIEW))
    case constants.INIT_ITEMS_DATA:
      return state.set('items',state.get('items').concat(
        Array.isArray(action.data) ? fromJS(action.data) : fromJS([action.data]) ))
    case constants.CURRENT_ITEMS_DATA:
      return state.set('currentItemsAndCategory',fromJS(action.data))
    case constants.REMOVE_ITEM:
      return state.set('items',state.get('items').filter(item=>item.get('id') !== action.item.get('id')))
    //Capture the action emitted by create page,and then add the item
    case constants.ADD_ITEM:
      return state.set('items',state.get('items').push(fromJS(action.newItem)))
    case constants.REPLACE_EDIT_DATA:
      return state.set('items',state.get('items').map(item=>(item.get('id')*1 === action.item.id*1) ? fromJS(action.item): item))
    default:
      return state
  }
}

export default homeReducer