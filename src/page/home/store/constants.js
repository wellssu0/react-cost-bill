export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TOGGLE_DATE_MENU = 'toggle_date_menu'
export const CHOOSE_YEAR = 'choose_year'
export const CHOOSE_MONTH = 'choose_month'
export const CLOSE_DATE_MENU = 'close_date_menu'
export const INIT_DATE = 'init_date'
export const LIST_TAB = 'LIST_TAB'
export const CHART_TAB = 'CHART_TAB'
export const OUT_TYPE = 'OUT_TYPE'
export const IN_TYPE = 'IN_TYPE'

export const categories = [
  {"id": 1, "name": "旅行", "type": OUT_TYPE, "iconName": "ios-plane"},
  {"id": 2, "name": "餐饮", "type": OUT_TYPE, "iconName": "ios-restaurant"},
  {"id": 3, "name": "购物", "type": OUT_TYPE, "iconName": "ios-basket"},
  {"id": 4, "name": "数码", "type": OUT_TYPE, "iconName": "ios-tablet-portrait"},
  {"id": 5, "name": "交通", "type": OUT_TYPE, "iconName": "ios-bus"},
  {"id": 6, "name": "娱乐", "type": OUT_TYPE, "iconName": "ios-beer"},
  {"id": 7, "name": "医疗", "type": OUT_TYPE, "iconName": "ios-medkit"},
  {"id": 8, "name": "宠物", "type": OUT_TYPE, "iconName": "ios-paw"},
  {"id": 9, "name": "其他", "type": OUT_TYPE, "iconName": "ios-keypad"},
  {"id": 10, "name": "工资", "type": IN_TYPE, "iconName": "ios-card"},
  {"id": 11, "name": "兼职", "type": IN_TYPE, "iconName": "ios-cash"},
  {"id": 12, "name": "理财", "type": IN_TYPE, "iconName": "logo-yen"},
  {"id": 13, "name": "礼金", "type": IN_TYPE, "iconName": "ios-gift"},
  {"id": 14, "name": "其他", "type": IN_TYPE, "iconName": "ios-keypad"}
]
//getCurrentDate
export const getCurrentDate = (str) => {
  const date = str ? new Date(str) : new Date()
  return {
    year : date.getFullYear(),
    month : date.getMonth() + 1
  }
}

//日期补齐函数
export const padLeft = (num) => {
  return num < 10 ? '0'+num : num
}

//年份数组
export const yearArr = (yearStart,howManyYears) => {
  let arr = []
  for(let i = 0; i < howManyYears; i++){
    arr[i] = yearStart+i-((howManyYears-1)/2)
  }
  return arr
}

//月份数组
export const monthArr = () => {
  let arr = []
  for(let i = 0; i < 12; i++){
    arr[i] = i+1
  }
  return arr
}

//选择高亮
export const chooseActive = (listNum,prop) => {
  return listNum === prop ? "dropdown-item active" : "dropdown-item"
}