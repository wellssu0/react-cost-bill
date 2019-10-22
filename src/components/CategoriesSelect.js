import React, { memo } from 'react'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

import * as constants from '../constants'
import * as actions from '../actions'

const CategoriesSelect = props => {
  const {categoriesList,activeTab,categorySelect,handleCategorySelect} = props
  let list = []
  if(activeTab===constants.OUT_TYPE){
    list = categoriesList.filter(item => item.get("type")===constants.OUT_TYPE)
  }else if(activeTab===constants.IN_TYPE){
    list = categoriesList.filter(item => item.get("type") === constants.IN_TYPE)
  }

  return(
    <div className="category-select-component">
        <div className='row'>
          {
            list.map(item => (
              <div 
                className={constants.chooseCategoryActive(item,categorySelect)} 
                style={{textAlign: "center"}} key={item.get('id')}
                role="button" 
                onClick={(event)=>handleCategorySelect(event,item)}
              >
                <Ionicon
                  className="rounded-circle"
                  fontSize="50px"
                  style={{backgroundColor:`${constants.chooseCategoryIconActive(item,categorySelect)}`,padding:'5px'}}
                  color={constants.chooseCategoryIconColor(item,categorySelect)}
                  icon={item.get("iconName")}
                />
                <p>{item.get("name")}</p>
              </div>
            ))
          }
        </div>
      </div>
  )
}
const mapState = state => ({
  categoriesList: state.getIn(['create','categoriesList']),
  categorySelect: state.getIn(['create','categorySelect']),
  activeTab: state.getIn(['create','activeTab'])
})
const mapDispatch = dispatch => ({
  handleCategorySelect(event,item){
    event.preventDefault()
    dispatch(actions.getCategorySelectAction(item))
  }
})
export default memo(connect(mapState,mapDispatch)(CategoriesSelect))