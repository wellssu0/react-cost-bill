import React from 'react'
import Ionicon from 'react-ionicons'
import { connect } from 'react-redux'
import * as constants from '../page/home/store/constants'
import * as actionCreators from '../page/home/store/actionCreators'

const SwitchViewTab = (props) => {
  const { tabView , handleListTab,handleChartTab} = props
 
  return (
      <ul class="nav nav-tabs nav-fill my-2 font-weight-bold">
        <li class="nav-item " >
          <a
            href="/"
            className={tabView === constants.LIST_VIEW ? "nav-link active" : "nav-link"}
            onClick={(event)=>handleListTab(event)}
          >
          <Ionicon
            className="rounded-circle mr-z"
            fontSize="22px"
            color={'#6c757d'}
            icon='ios-list-box'
          />
          列表模式
          </a>
        </li>
        <li class="nav-item" >
          <a
            href="/"
            className={tabView === constants.CHART_VIEW ? "nav-link active" : "nav-link"}
            onClick={(event)=>handleChartTab(event)}
          >
          <Ionicon
            className="rounded-circle mr-z"
            fontSize="22px"
            color={'#6c757d'}
            icon='ios-pie'
          />
          图表模式
          </a>
          
        </li>
      </ul>
    
  )
}

const mapState = state => ({
  tabView: state.getIn(['home','tabView']),
})
const mapDispatch = dispatch => ({
  handleListTab(event){
    event.preventDefault()
    dispatch(actionCreators.getListTabAction())
  },
  handleChartTab(event){
    event.preventDefault()
    dispatch(actionCreators.getChartTabAction())
  }
})

export default React.memo(connect(mapState,mapDispatch)(SwitchViewTab))