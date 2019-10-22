import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fromJS } from 'immutable'
import axios from 'axios'

import * as constants from '../constants'
import * as actions from '../actions'

import DateDropDown from '../components/DateDropDown'
import TotalPrice from '../components/TotalPrice'
import SwitchViewTab from '../components/SwitchViewTab'
import DetailList from '../components/DetailList'
import DetailFigure from '../components/DetailFigure'

const Home = props =>{
  const { tabView, items, selectYear, selectMonth,getCurrentDate, getInitItems, getCurrentItems,currentItemsAndCategory } = props

  //用componentDidMount来初始化Date
  useEffect(()=>{
    selectYear === null && getCurrentDate()
  },[])

  //用componentDidMount获取state中的初始items
  useEffect(()=>{
      //immutable类型的items看size，为空数组时才获取
      items.size === 0 && getInitItems()
  },[])

  //用componentDidMount获取当前选中年月的items
  useEffect(()=>{
    getCurrentItems(selectYear,selectMonth,items)
  },[items,selectYear,selectMonth])

  return(
    <div className="container">
      <header className="jumbotron shadow-lg p-3 bg-white rounded">
        <h2 className="display-4">COST-BILL</h2><hr className="my-4"></hr>
        <div className="row ">
          <div className="col-sm " >
            <DateDropDown />
          </div>
          <div className="col-sm" >
            <TotalPrice />
          </div>
        </div>
      </header>
      <div className="jumbotron shadow-lg p-3 mb-5 bg-white rounded">
        <Link 
          to='create' 
          className="btn btn-secondary btn-lg btn-block font-weight-light"
        >
          创建新的记账记录
        </Link>
        <SwitchViewTab />
        {tabView === constants.LIST_VIEW &&
          <DetailList />
        }
        {tabView === constants.CHART_VIEW &&
          <React.Fragment>
            <DetailFigure title={'本月支出'} categoryData={
              constants.getPieCategoryData(currentItemsAndCategory,constants.OUT_TYPE)
            }/>
            <DetailFigure title={'本月收入'} categoryData={
              constants.getPieCategoryData(currentItemsAndCategory,constants.IN_TYPE)
            }/>
          </React.Fragment>
        }
      </div>
    </div>
  )
}
const mapState = state => ({
  tabView: state.getIn(['home','tabView']),
  items: state.getIn(['home','items']),
  currentItemsAndCategory: state.getIn(['home','currentItemsAndCategory']),
  selectYear: state.getIn(['home','selectYear']),
  selectMonth: state.getIn(['home','selectMonth']),
})

const mapDispatch = dispatch => ({
  getCurrentDate(){
    dispatch(actions.getInitDateAction())
  },
  getInitItems(){
    axios.post('./postItemsData').then(res=>{
      const data = res.data.items
      // console.log(data.length)
      if(data.length !== 0 ){
        dispatch(actions.getInitItemsAction(data))
      }
    }).catch(error=>{
      console.log(error)
    })
  },
  getCurrentItems(selectYear,selectMonth,items){
    // console.log(items.size)
    //拿到items先过滤出符合currentDate的item，再添加category属性，再按升序排序
    if(items.size !== 0 ){
      const selectYearAndMonth = selectYear+"-"+constants.padLeft(selectMonth)
      const currentMonthItems = items.toJS()
        .filter(item => item.date.includes(selectYearAndMonth))
        .map(item=>{
          item.category = constants.categories[item.cid]
          return item})
        .sort(constants.compare('date'))
      dispatch(actions.getCurrentItemsAction(fromJS(currentMonthItems)))
    }
  }
})

export default React.memo(connect(mapState,mapDispatch)(Home))