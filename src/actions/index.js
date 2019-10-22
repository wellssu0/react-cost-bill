import * as constants from '../constants'

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
export const getInitItemsAction = (data) => ({
  type: constants.INIT_ITEMS_DATA,
  data,
})
export const getCurrentItemsAction = (data) => ({
  type: constants.CURRENT_ITEMS_DATA,
  data,
})
export const getRemoveItemAction = (item) => ({
  type: constants.REMOVE_ITEM,
  item,
})

export const getOutCategoriesTabAction = () => ({
  type:constants.OUT_CATEGORIES_TAB
})
export const getInCategoriesTabAction = () => ({
  type:constants.IN_CATEGORIES_TAB
})
export const getCategorySelectAction = (item) => ({
  type:constants.CATEGORY_SELECT,
  item
})
export const getChangeTitleAction = (title) => ({
  type:constants.CHANGE_TITLE,
  title
})
export const getChangePriceAction = (price) => ({
  type:constants.CHANGE_PRICE,
  price
})
export const getChangeDateAction = (date) => ({
  type:constants.CHANGE_DATE,
  date
})
export const getAddItemAction = (newItem) => ({
  type:constants.ADD_ITEM,
  newItem
})
export const getInitCategoryAction = () => ({
  type:constants.INIT_CATEGORY,
})
export const showEditDataAction = (data) => ({
  type:constants.SHOW_EDIT_DATA,
  data
})
export const getReplaceItemAction = (item) => ({
  type:constants.REPLACE_EDIT_DATA,
  item
})