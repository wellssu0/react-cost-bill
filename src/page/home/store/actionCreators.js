import * as constants from './constants'

export const getToggleShowDateMenuAction = () => ({
  type: constants.TOGGLE_DATE_MENU
})

export const getChooseYearAction = (item) => ({
  type: constants.CHOOSE_YEAR,
  item
})
export const getChooseMonthAction = (item) => ({
  type: constants.CHOOSE_MONTH,
  item
})
export const getCloseDateMenuAction = () => ({
  type: constants.CLOSE_DATE_MENU,
})
export const getInitDateAction = () => ({
  type: constants.INIT_DATE,
  date: constants.getCurrentDate()
})
export const getListTabAction = () => ({
  type: constants.LIST_TAB,
})
export const getChartTabAction = () => ({
  type: constants.CHART_TAB,
})
export const getInitItemsAction = () => ({
  type: constants.CHART_TAB,
})