import React from 'react'
import { connect } from 'react-redux'
import Ionicon from 'react-ionicons'

const DetailList = (props) => {
  const { items } = props
  return (
    <ul className="list-group list-group-flush ">
    {
      items.size === 0 ? (
          <li className="list-group-item border rounded d-flex  font-weight-light"
          >您还没有任何记账记录</li>
        ) :
        items.map((item) =>(
          <li className="list-group-item d-flex justify-content-between
          align-items-center"
            key={item.id}>
            <span className="col-1">
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor:'#007bff',padding:'5px'}}
                color={'#fff'}
                icon="ios-create-outline"
              /></span>
            <span className="col-3">{item.get('title')}</span>
            <span className="col-2 font-weight-bold">
              -
              {item.get('price')}元</span>
            <span className="col-2">{item.get('date')}</span>
            <a href="/" className="col-1">
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor:'#28a745',padding:'5px'}}
                color={'#fff'}
                icon='ios-create-outline'
              />
            </a>
            <a href="/" className="col-1">
              <Ionicon
                className=""
                fontSize="40px"
                color={'#fff'}
                icon='ios-close'
              />
            </a>
          </li>
        ))
    }
  </ul>
  )
}

const mapState = state => ({
  items:state.getIn(['home','items'])
})
const mapDispatch = dispatch => ({

})

export default React.memo(connect(mapState,mapDispatch)(DetailList))