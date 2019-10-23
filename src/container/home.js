import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as constants from '../constants'
import * as actions from '../actions'
import DateDropDown from '../components/DateDropDown'
import TotalPrice from '../components/TotalPrice'
import SwitchViewTab from '../components/SwitchViewTab'
import DetailList from '../components/DetailList'
import DetailFigure from '../components/DetailFigure'
import Loader from '../components/Loader'

const Home = props =>{
  const { tabView, isLoading, selectYear, selectMonth,getCurrentDate, getCurrentItems,currentItemsAndCategory } = props

  //用componentDidMount来初始化Date
  useEffect(()=>{
    selectYear === null && getCurrentDate()
  },[])

  //用componentDidMount获取当前选中年月的items
  useEffect(()=>{
    selectYear !== null && getCurrentItems(selectYear,selectMonth)
  },[selectYear,selectMonth])

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
          添加新的记账记录
        </Link>
        <SwitchViewTab />
        { isLoading &&
          <Loader/>
        }
        { !isLoading &&
          <React.Fragment>
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
          </React.Fragment>
        }
      </div>
     
    </div>
  )
}
const mapState = state => ({
  tabView: state.getIn(['home','tabView']),
  isLoading: state.getIn(['home','isLoading']),
  currentItemsAndCategory: state.getIn(['home','currentItemsAndCategory']),
  selectYear: state.getIn(['home','selectYear']),
  selectMonth: state.getIn(['home','selectMonth']),
})

const mapDispatch = dispatch => ({
  getCurrentDate(){
    dispatch(actions.getInitDateAction())
  },
  getCurrentItems(selectYear,selectMonth){
    dispatch(actions.getCurrentItemsAction(selectYear,selectMonth))
  }
})

export default React.memo(connect(mapState,mapDispatch)(Home))