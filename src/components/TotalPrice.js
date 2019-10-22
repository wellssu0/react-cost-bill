import React from 'react'
import { connect } from 'react-redux'

import * as constants from '../constants'

const TotalPrice = (props) => {
  const { currentItemsAndCategory } = props
  const currentItems = currentItemsAndCategory.toJS()
  let incomePrice = 0, outcomePrice = 0
  for(let i =0 ; i<currentItems.length; i++){
    if(currentItems[i].category.type === constants.IN_TYPE){
      incomePrice += currentItems[i].price
    }else{
      outcomePrice += currentItems[i].price
    }
  }
  return (
    <div className="row">
      <div className="col">
        <h5 className="income text-secondary">收入：<span>{incomePrice}元</span></h5>
      </div>
      <div className="col">
        <h5 className="outcome text-secondary">支出：<span>{outcomePrice}元</span></h5>
      </div>
    </div>
  )
}

const mapState = state => ({
  currentItemsAndCategory:state.getIn(['home','currentItemsAndCategory'])
})

export default React.memo(connect(mapState,null)(TotalPrice))