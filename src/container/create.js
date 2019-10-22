import React,{useEffect,memo} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import ViewCategoryTab from '../components/ViewCategoryTab'
import PriceForm from "../components/PriceForm";
import CategoriesSelect from "../components/CategoriesSelect";
import Loader from '../components/Loader';

const Create = props => {

  const {showEditData,isLoading} = props
  const { id } = props.match.params

  useEffect (() => {
    if(id !== undefined){
      showEditData(id)
    }
  },[])

  return(
    <div className="container">
      <header className="jumbotron shadow-lg p-3 bg-white rounded">
        {isLoading &&
          <Loader/>
        }
        { !isLoading &&
          <React.Fragment>
            <ViewCategoryTab/>
            <CategoriesSelect/>
            <PriceForm/>
          </React.Fragment>
        }
      </header>
    </div>
  )
}

const mapState = state => ({
  currentItemsAndCategory:state.getIn(['home','currentItemsAndCategory']),
  isLoading:state.getIn(['create','isLoading'])
})

const mapDispatch = dispatch => ({
  showEditData(id){
    dispatch(actions.showEditDataAction(id))
  }
})

export default memo(connect(mapState,mapDispatch)(Create))