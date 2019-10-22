import React, { memo } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as actions from '../actions'


const PriceForm = props => {
  const {items,editItem, editMode, title, price, date, categorySelect,handleSubmit,handleTitle,handlePrice,handleDate,handleCencelSubmit } = props
  let history = useHistory()

  const getNewItem = () =>{
    if(editMode === false){
      const newItem = {
        "id": items.size===0 ? 0 :items.toJS()[(items.toJS().length)-1]['id'] + 1,
        "title": title,
        "price": price,
        "date": date,
        "cid" : categorySelect.get('id')
      }
      return newItem
    }else{
      const item = {
        "id": editItem.get('id'),
        "title": title,
        "price": price,
        "date": date,
        "cid" : categorySelect.get('id')
      }
      return item
    }
  }
 


  return(
    <div className='px-3 pl-3 row justify-content-between'>
        <label htmlFor="input-title" >标题*</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">T</span>
          </div>
          <input type="text" className="form-control" id="input-title"  value={title} placeholder='请输入标题' onChange={event=>handleTitle(event)}/>
        </div>
        <label htmlFor="input-price">金额*</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">￥</span>
          </div>
          <input type="number" className="form-control" id='input-price' value={price} placeholder='请输入金额' onChange={event=>handlePrice(event)}/>
        </div>
        <label htmlFor="input-date">日期*</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">D</span>
          </div>
          <input type="date" className="form-control" id='input-date' value={date} placeholder='请选择日期' onChange={event=>handleDate(event)}/>
        </div>
        <button type="button" className="btn btn-lg btn-primary col-5" onClick={()=>handleSubmit(getNewItem(),history,editMode)}>提交</button>
        <button type="button" className="btn btn-lg btn-secondary col-5" onClick={()=>handleCencelSubmit(history)}>取消</button>
      </div>
  )
}
const mapState = state => ({
  errorMsg:state.getIn(['create','errorMsg']),
  editMode:state.getIn(['create','editMode']),
  items:state.getIn(['home','items']),
  title:state.getIn(['create','title']),
  price:state.getIn(['create','price']),
  date:state.getIn(['create','date']),
  editItem:state.getIn(['create','editItem']),
  categorySelect:state.getIn(['create','categorySelect'])
})
const mapDispatch = dispatch => ({
  handleTitle(event){
    dispatch(actions.getChangeTitleAction(event.target.value.trim()))
  },
  handlePrice(event){
    dispatch(actions.getChangePriceAction(event.target.value.trim()*1))
  },
  handleDate(event){
    dispatch(actions.getChangeDateAction(event.target.value.trim()))
  },
  handleSubmit(newItem,history,editMode){
    if(editMode){
      dispatch(actions.getReplaceItemAction(newItem))
      dispatch(actions.getInitCategoryAction())
      history.push('/')
    }else{
      dispatch(actions.getAddItemAction(newItem))
      dispatch(actions.getInitCategoryAction())
      history.push('/')
    }
  },
  handleCencelSubmit(history){
    dispatch(actions.getInitCategoryAction())
    history.push('/')
  }
})

export default memo(connect(mapState,mapDispatch)(PriceForm))