import React, { memo } from 'react'
import { connect } from 'react-redux'

import * as constants from '../constants'
import * as actions from '../actions'

const ViewCategroyTab = props => {
  const { activeTab, handleOutCategoriesTab, handleInCategoriesTab } = props
  return(
    <ul className="nav nav-tabs nav-fill my-4 font-weight-bold">
      <li className="nav-item">
        <a href='/'
          className={activeTab===constants.OUT_TYPE ? "nav-link active " : "nav-link"}
          onClick={(event)=>handleOutCategoriesTab(event,activeTab)}
        >
          支出
        </a>
      </li>
      <li className="nav-item">
        <a href='/'
          className={activeTab===constants.IN_TYPE ? "nav-link active" : "nav-link"}
          onClick={(event)=>handleInCategoriesTab(event,activeTab)}
        >
          收入
        </a>
      </li>
    </ul>
  )
}

const mapState = state => ({
  activeTab:state.getIn(['create','activeTab'])
})
const mapDispatch = dispatch => ({
  handleOutCategoriesTab(event,activeTab){
    event.preventDefault()
    if(activeTab !== constants.OUT_TYPE){
      dispatch(actions.getOutCategoriesTabAction())
    }
  },
  handleInCategoriesTab(event,activeTab){
    event.preventDefault()
    if(activeTab !== constants.IN_TYPE){
      dispatch(actions.getInCategoriesTabAction())
    }
  }
})
export default memo(connect(mapState,mapDispatch)(ViewCategroyTab))