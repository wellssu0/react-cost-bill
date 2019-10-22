import React, { memo } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as actions from '../actions'
import * as constants from '../constants'


const PriceForm = props => {
  const {editItem, monthCategory, editMode, title, price, date, categorySelect,handleSubmit,handleTitle,handlePrice,handleDate,handleCencelSubmit } = props
 
  let history = useHistory()
  
  const getNewItem = () =>{
    if(editMode === false){
      const newItem = {
        "id": constants.ID(),
        "title": title,
        "price": price,
        "date": date,
        "monthCategory": monthCategory,
        "timestamp": new Date(date).getTime(),
        "cid" : categorySelect.get('id')
      }
      return newItem
    }else{
      const item = {
        "id": editItem.get('id'),
        "title": title,
        "price": price,
        "date": date,
        "monthCategory": constants.getCurrentDate(date)["year"]+"-"+constants.getCurrentDate(date)["month"],
        "timestamp": new Date(date).getTime(),
        "cid" : categorySelect.get('id')
      }
      return item
    }
  }
 


  return(
    <div className='px-3 pl-3 row justify-content-between'>
        <label htmlFor="input-title" >备注:</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">T</span>
          </div>
          <input type="text" className="form-control" id="input-title"  value={title} placeholder='写备注 ...' onChange={event=>handleTitle(event)}/>
        </div>
        <label htmlFor="input-price">金额:</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" className="form-control" id='input-price' value={price} placeholder='写金额 ...' onChange={event=>handlePrice(event)}/>
        </div>
        <label htmlFor="input-date">日期:</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">D</span>
          </div>
          <input type="date" className="form-control" id='input-date' value={date}  onChange={event=>handleDate(event)}/>
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
  monthCategory:state.getIn(['home','monthCategory']),
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
  handleSubmit(item,history,editMode){
    if(editMode){
      dispatch(actions.getReplaceItemAction(item))
      dispatch(actions.getInitCategoryAction())
      history.push('/')
    }else{
      dispatch(actions.getAddItemAction(item))
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