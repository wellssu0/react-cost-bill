import React from 'react'
import Ionicon from 'react-ionicons'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as constants from '../constants'

const SwitchViewTab = (props) => {
  const { tabView , handleListTab,handleChartTab} = props
  return (
      <ul className="nav nav-tabs nav-fill my-2 font-weight-bold">
        <li className="nav-item " >
          <a
            href="/"
            className={tabView === constants.LIST_VIEW ? "nav-link active" : "nav-link"}
            onClick={(event)=>handleListTab(event,tabView)}
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
        <li className="nav-item" >
          <a
            href="/"
            className={tabView === constants.CHART_VIEW ? "nav-link active" : "nav-link"}
            onClick={(event)=>handleChartTab(event,tabView)}
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
  handleListTab(event,tabView){
    event.preventDefault()
    if(tabView === constants.CHART_VIEW){
      dispatch(actions.getListTabAction())
    }
  },
  handleChartTab(event,tabView){
    event.preventDefault()
    if(tabView === constants.LIST_VIEW){
      dispatch(actions.getChartTabAction())
    }
  }
})

export default React.memo(connect(mapState,mapDispatch)(SwitchViewTab))