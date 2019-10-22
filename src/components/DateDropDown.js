import React,{useEffect} from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as constants from '../constants'

const node = React.createRef()

const DateDropDown = (props) => { 
  const { selectYear, selectMonth, currentDate , showDateMenu, handleClick,handleToggleShowDateMenu, handleChooseYear, handleChooseMonth} = props
  
  useEffect(()=>{
    if(showDateMenu){
      document.addEventListener("click",handleClick,false)
    }
    return ()=>{
      document.removeEventListener('click',handleClick,false)
    }
  })
  
  return (
    <div className='dropdown ' ref={node}>
      <label htmlFor="btn-dropdown" className="text-secondary font-weight-light">选择日期：</label>
      {/*下拉菜单按钮*/}
      <button 
        className="btn btn-secondary dropdown-toggle" id="btn-dropdown"
        onClick={handleToggleShowDateMenu}
      >
        {`${selectYear}年${constants.padLeft(selectMonth)}月`}
      </button>

      {/*下拉菜单*/}
      { showDateMenu &&
        <div className="dropdown-menu shadow p-3 mb-5" style={{display:"block"}}>
          <div className="row">
            {/*年菜单*/}
            <div className="col border-right">
              {
                constants.yearArr(currentDate.get('year'),13).map(item=>(
                  <a 
                    href="/" key={item} 
                    className={constants.chooseActive(item,selectYear)}
                    onClick={(event)=>handleChooseYear(event,item)}
                  >
                    {`${item}年`}
                  </a>
                ))
              }
            </div>
            
            {/*月菜单*/}
            <div className="col">
              {
                constants.monthArr().map(item=>(
                  <a 
                    href="/" key={item} 
                    className={constants.chooseActive(item,selectMonth)}
                    onClick={(event)=>handleChooseMonth(event,item)}
                  >
                    {`${constants.padLeft(item)}月`}
                  </a>
                ))
              }
            </div>

          </div>
        </div>
      }
    </div>
  )
}
const mapState = state => ({
  selectYear:state.getIn(['home','selectYear']),
  selectMonth:state.getIn(['home','selectMonth']),
  currentDate:state.getIn(['home','currentDate']),
  showDateMenu:state.getIn(['home','showDateMenu']),
})

const mapDispatch = dispatch => ({
  handleToggleShowDateMenu(){
    dispatch(actions.getToggleShowDateMenuAction())
  },
  handleChooseYear(event,item){
    event.preventDefault()
    dispatch(actions.getChooseYearAction(item))
  },
  handleChooseMonth(event,item){
    event.preventDefault()
    dispatch(actions.getChooseMonthAction(item))
  },
  handleClick(e){
    if(node.current.contains(e.target)){
      return
    }else{
      dispatch(actions.getCloseDateMenuAction())
    }
  }
})

export default React.memo(connect(mapState,mapDispatch)(DateDropDown))