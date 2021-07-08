import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Books,
  Error,
  Home,
  Login,
  Reg,
  SingleBook,
  Admin,
  AdminRequest,
  AdminList,
  User,
  UserRequests,
  UserIncRequests,
} from './pages'
import SearchBook from './pages/SearchBook'
import AddBook from './pages/AddBook'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/add' component={AddBook} />
          <Route exact path='/reg' component={Reg} />
          <Route exact path='/books' component={Books} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/list' component={AdminList} />
          <Route exact path='/admin/request' component={AdminRequest} />
          <Route path='/user*' component={User} />
          <Route path='/user/inc' component={UserIncRequests} />
          <Route path='/user/request' component={UserRequests} />
          <Route exact path='/searchbook' component={SearchBook} />
          <Route exact path='/single' component={SingleBook} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
