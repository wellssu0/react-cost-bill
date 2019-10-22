import React,{useEffect,memo} from 'react'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'

import * as actions from '../actions'

import ViewCategoryTab from '../components/ViewCategoryTab'
import PriceForm from "../components/PriceForm";
import CategoriesSelect from "../components/CategoriesSelect";

const Create = props => {

  const { currentItemsAndCategory,showEditData} = props
  let history = useHistory()
  const { id } = props.match.params

  useEffect (() => {
    if(id !== undefined){
      const currentItems = currentItemsAndCategory.toJS()
      const editItemData = currentItems.filter(item => item.id*1 === id*1)
      showEditData(editItemData[0],history)
    }
  })

  return(
    <div className="container">
      <header className="jumbotron shadow-lg p-3 bg-white rounded">
        <ViewCategoryTab/>
        <CategoriesSelect/>
        <PriceForm/>
      </header>
    </div>
  )
}

const mapState = state => ({
  currentItemsAndCategory:state.getIn(['home','currentItemsAndCategory'])
})

const mapDispatch = dispatch => ({
  showEditData(data,history){
    //判断create页面刷新，内存清空了所以重定向到home页
    if(data === undefined){
      history.push('/')
    }else{
      dispatch(actions.showEditDataAction(data))
    }
  }
})

export default memo(connect(mapState,mapDispatch)(Create))