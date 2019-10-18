import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DateDropDown from '../../components/DateDropDown'
import TotalPrice from '../../components/TotalPrice'
import SwitchViewTab from '../../components/SwitchViewTab'
import DetailList from '../../components/DetailList'
import DetailFigure from '../../components/DetailFigure'
import * as constants from './store/constants'
import * as actionCreators from './store/actionCreators'

const Home =(props) =>{
  const { tabView, items, selectYear, getCurrentDate, getInitItems } = props
  useEffect(()=>{
    if(selectYear == null){
      getCurrentDate()
    }
  },[])
  useEffect(()=>{
    if(items.length === 0){
      getInitItems()
    }
  },[])

  
  return(
    <div className="container">
      <header className="jumbotron shadow-lg p-3 bg-white rounded">
        <h2 className="display-4">COST-BILL</h2><hr class="my-4"></hr>
        
        <div className="row">
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
          <DetailFigure />
        }
      </div>
    </div>
  )
}
const mapState = state => ({
  tabView: state.getIn(['home','tabView']),
  items: state.getIn(['home','items']),
  selectYear: state.getIn(['home','selectYear'])
})

const mapDispatch = dispatch => ({
  getCurrentDate(){
    dispatch(actionCreators.getInitDateAction())
  }
  getInitItems(){
    dispatch(actionCreators.getInitItemsAction())
  }
})

export default React.memo(connect(mapState,mapDispatch)(Home))