import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Ionicon from 'react-ionicons'

import * as actions from '../actions'
import * as constants from '../constants'

const DetailList = (props) => {
  let history = useHistory()
  const { currentItemsAndCategory, handleModifyItem, handleRemoveItem } = props
  return (
    <ul className="list-group ">
    {
      currentItemsAndCategory.size === 0 ? (
          <h3 className="font-weight-light"
            style={{textAlign: 'center'}}
          >您本月还没有任何记账记录</h3>
        ) :
        currentItemsAndCategory.map((item) =>(
          <li className="list-group-item list-group-item-striped d-flex justify-content-between
          align-items-center"
            key={item.get('id')}>
            <span className="col-1">
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor:'#007bff',padding:'5px'}}
                color={'#fff'}
                icon={item.getIn(['category','iconName'])}
              /></span>
            <span className="col-3">{item.get('title')}</span>
            <span className="col-2 font-weight-bold">
              {item.getIn(['category','type'])=== constants.OUT_TYPE ? "-" : "+"}
              {item.get('price')}元</span>
            <span className="col-2">{item.get('date')}</span>
            <a href='/' className="col-1"
              onClick={(event)=>handleModifyItem(event,item,history)}
            >
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor:'#28a745',padding:'5px'}}
                color={'#fff'}
                icon='ios-create-outline'
              />
            </a>
            <a href="/" className="col-1"
              onClick={(event)=>handleRemoveItem(event,item)}
            >
              <Ionicon
                className="rounded-circle"
                fontSize="40px"
                color={'red'}
                icon='md-trash'
              />
            </a>
          </li>
        ))
    }
  </ul>
  )
}

const mapState = state => ({
  items:state.getIn(['home','items']),
  currentItemsAndCategory:state.getIn(['home','currentItemsAndCategory']),
  selectYear:state.getIn(['home','selectYear']),
  selectMonth:state.getIn(['home','selectMonth'])
})
const mapDispatch = dispatch => ({
  handleRemoveItem(event,item){
    event.preventDefault()
    dispatch(actions.getRemoveItemAction(item))
  },
  handleModifyItem(event,item,history){
    event.preventDefault()
    history.push(`/edit/${item.get("id")}`)
  }
})

export default React.memo(connect(mapState,mapDispatch)(DetailList))