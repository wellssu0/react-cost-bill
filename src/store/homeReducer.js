import { fromJS } from 'immutable'
import * as constants from '../constants'

const defaultState = fromJS({
  tabView: constants.LIST_VIEW,
  currentDate: null,
  monthCategory:null,
  selectYear:null,
  selectMonth:null,
  isLoading:false,
  showDateMenu: false,
  currentItemsAndCategory:[],
})

const homeReducer = (state = defaultState , action) => {
  switch(action.type){
    case constants.INIT_DATE:
      return state.merge({
        isLoading:true,
        selectMonth:fromJS(action.date.month),
        selectYear:fromJS(action.date.year),
        currentDate:fromJS(action.date),
        monthCategory:fromJS(action.date.year+"-"+action.date.month)
      })
    case constants.TOGGLE_DATE_MENU:
      return state.set('showDateMenu',!state.get('showDateMenu'))
    case constants.LOADING:
      return state.set('isLoading',true)
    case constants.CHOOSE_YEAR:
      return state.merge({
        selectYear:fromJS(action.item),
        monthCategory:fromJS(action.item + "-" + state.get('selectMonth'))
      })
    case constants.CHOOSE_MONTH:
      return state.merge({
        selectMonth:fromJS(action.item),
        showDateMenu:false,
        currentDate:fromJS({ year: state.get('selectYear'), month: action.item}),
        monthCategory:fromJS(state.get('selectYear')+ "-" + action.item)
      })
    case constants.CLOSE_DATE_MENU:
      return state.set('showDateMenu',false)
    case constants.LIST_TAB:
      return state.set('tabView',fromJS(constants.LIST_VIEW))
    case constants.CHART_TAB:
      return state.set('tabView',fromJS(constants.CHART_VIEW))
    case constants.CURRENT_ITEMS:
      return state.set('isLoading',false).set('currentItemsAndCategory',fromJS(action.data))
    default:
      return state
  }
}

export default homeReducer