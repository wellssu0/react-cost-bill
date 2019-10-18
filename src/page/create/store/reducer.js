import { fromJS } from 'immutable'

const defaultState = fromJS({
  activeTab:"IN_TYPE",
})

export default (state = defaultState , action) => {
  switch(action.type){
    
    default:
      return state
  }
}