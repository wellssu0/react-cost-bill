import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import store from "./store"
import Home from './container/home'
import Create from './container/create'

import './components/mockItemsData'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/create' exact component={Create}></Route>
        <Route path='/edit/:id' exact component={Create}></Route>
      </Router>
    </Provider>
  )
}

export default React.memo(App)
