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
  type: constants.GET_INIT_DATE,
})
export const InitDateAction = (date) => ({
  type: constants.INIT_DATE,
  date
})
export const getListTabAction = () => ({
  type: constants.LIST_TAB,
})
export const getChartTabAction = () => ({
  type: constants.CHART_TAB,
})
export const getCurrentItemsAction = (year,month) => ({
  type: constants.CURRENT_ITEMS_DATA,
  year,month
})
export const currentItemsAction = (data) => ({
  type: constants.CURRENT_ITEMS,
  data
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
export const getAddItemAction = (item) => ({
  type:constants.ADD_ITEM,
  item
})
export const getInitCategoryAction = () => ({
  type:constants.INIT_CATEGORY,
})
export const showEditDataAction = (id) => ({
  type:constants.SHOW_EDIT_DATA,
  id
})
export const openRefresh = () => ({
  type:constants.OPEN_REFRESH,
})
export const showEditData = (item) => ({
  type:constants.SHOW_EDIT_ITEM,
  item
})
export const getReplaceItemAction = (item) => ({
  type:constants.REPLACE_EDIT_DATA,
  item
})
export const openLoading = () => ({
  type:constants.LOADING
})