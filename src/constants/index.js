export const OUT_CATEGORIES_TAB = 'create/OUT_CATEGORIES_TAB'
export const IN_CATEGORIES_TAB = 'create/IN_CATEGORIES_TAB'
export const CATEGORY_SELECT = 'create/CATEGORY_SELECT'
export const CHANGE_TITLE = 'create/CHANGE_TITLE'
export const CHANGE_PRICE = 'create/CHANGE_PRICE'
export const CHANGE_DATE = 'create/CHANGE_DATE'
export const ADD_ITEM = 'create/ADD_ITEM'
export const INIT_CATEGORY = 'create/INIT_CATEGORY'
export const SHOW_EDIT_DATA = 'create/SHOW_EDIT_DATA'
export const SHOW_EDIT_ITEM = 'create/SHOW_EDIT_ITEM'
export const OPEN_REFRESH = 'create/OPEN_REFRESH'
export const REPLACE_EDIT_DATA = 'create/REPLACE_EDIT_DATA'
export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TOGGLE_DATE_MENU = 'toggle_date_menu'
export const CHOOSE_YEAR = 'choose_year'
export const CHOOSE_MONTH = 'choose_month'
export const CLOSE_DATE_MENU = 'close_date_menu'
export const INIT_DATE = 'INIT_DATE'
export const GET_INIT_DATE = 'GET_INIT_DATE'
export const LIST_TAB = 'LIST_TAB'
export const CHART_TAB = 'CHART_TAB'
export const OUT_TYPE = 'OUT_TYPE'
export const IN_TYPE = 'IN_TYPE'
export const INIT_ITEMS_DATA = 'INIT_ITEMS_DATA'
export const INIT_ITEMS = 'INIT_ITEMS'
export const CURRENT_ITEMS_DATA = 'CURRENT_ITEMS_DATA'
export const CURRENT_ITEMS = 'CURRENT_ITEMS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const LOADING = 'LOADING'

export const Colors = {
  blue: '#347eff',
  deepBlue: '#61dafb',
  green: '#28a745',
  red: '#dc3545',
  gray: '#555',
  lightGray: '#efefef',
  white: '#fff',
}

export const categories = [
  {"id": 0, "name": "旅行", "type": OUT_TYPE, "iconName": "ios-plane"},
  {"id": 1, "name": "餐饮", "type": OUT_TYPE, "iconName": "ios-restaurant"},
  {"id": 2, "name": "服饰", "type": OUT_TYPE, "iconName": "md-shirt"},
  {"id": 3, "name": "数码", "type": OUT_TYPE, "iconName": "ios-phone-portrait"},
  {"id": 4, "name": "交通", "type": OUT_TYPE, "iconName": "md-car"},
  {"id": 5, "name": "娱乐", "type": OUT_TYPE, "iconName": "md-microphone"},
  {"id": 6, "name": "医疗", "type": OUT_TYPE, "iconName": "md-medkit"},
  {"id": 7, "name": "宠物", "type": OUT_TYPE, "iconName": "md-paw"},
  {"id": 8, "name": "教育", "type": OUT_TYPE, "iconName": "md-school"},
  {"id": 9, "name": "食品", "type": OUT_TYPE, "iconName": "md-pizza"},
  {"id": 10, "name": "人情", "type": OUT_TYPE, "iconName": "md-people"},
  {"id": 11, "name": "其他", "type": OUT_TYPE, "iconName": "ios-keypad"},
  {"id": 12, "name": "工资", "type": IN_TYPE, "iconName": "ios-card"},
  {"id": 13, "name": "兼职", "type": IN_TYPE, "iconName": "md-filing"},
  {"id": 14, "name": "礼金", "type": IN_TYPE, "iconName": "md-mail"},
  {"id": 15, "name": "理财", "type": IN_TYPE, "iconName": "md-analytics"},
  {"id": 16, "name": "奖金", "type": IN_TYPE, "iconName": "md-trophy"},
  {"id": 17, "name": "其他", "type": IN_TYPE, "iconName": "ios-keypad"}
]
//getCurrentDate
export const getCurrentDate = (str) => {
  const date = str ? new Date(str) : new Date()
  return {
    year : date.getFullYear(),
    month : date.getMonth() + 1
  }
}
//getNowDate
export const getNowDate = () => {
  const date =  new Date()
  return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
}
//initMonthCategory
export const initMonthCategory = (str) => {
  const date = str ? new Date(str) : new Date()
  return date.getFullYear()+"-"+(date.getMonth()+1)
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

//排序
export function compare(property){
  return function(obj1,obj2){
      var value1 = new Date(obj1[property]);
      var value2 = new Date(obj2[property]);
      return value1 - value2;     // 升序
  }
}

//得到饼图数据
export const getPieCategoryData = (items,type = OUT_TYPE) => {
  let pieArr=[]
  if(items.size > 0){
    items.toJS().filter( item => item.category.type === type).forEach(item=>{
      if (pieArr[item.cid]) {
        pieArr[item.cid].value += (item.price)*1
      } else {
        pieArr[item.cid] = {
          "name": item.category.name,
          "value": (item.price)*1
        }
      }
    })
    return pieArr.filter(item => item!==null)
  }else{
    return pieArr
  }
}

//选择高亮
export const chooseCategoryActive = (listNum,prop) => {
  return listNum.get("id") === prop.get("id") ? "col-3 category-item active" : "col-3 category-item"
}

//选择高亮
export const chooseCategoryIconActive = (listNum,prop) => {
  return listNum.get("id") === prop.get("id") ? "rgb(52, 126, 255)" : "rgb(239, 239, 239)"
}

//选择变色
export const chooseCategoryIconColor = (listNum,prop) => {
  return listNum.get("id") === prop.get("id") ? "#fff" : "#555"
}

export const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}


export const checkTitle = (str) => {
  const RegExp = /[`~!@#$%^&*()_+<>?:"{},./;'[\]]/im;
  return !RegExp.test(str)
}
 