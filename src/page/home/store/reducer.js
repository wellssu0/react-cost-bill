import { fromJS } from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
  tabView: constants.LIST_VIEW,
  currentDate: null,
  selectYear:null,
  selectMonth:null,
  showDateMenu: false,
  items:[
    {
      "id": 1 ,
      "title": "去日本旅游",
      "price": 200,
      "date": "2019-08-10",
      "cid" : 1
    }
  ]
})

const reducer = (state = defaultState , action) => {
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
    default:
      return state
  }
}

export default reducer