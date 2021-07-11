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
          <PrivateRoute exact path='/add' component={AddBook} />
          <Route exact path='/reg' component={Reg} />
          <Route exact path='/books' component={Books} />
          <PrivateRoute exact path='/admin' component={Admin} />
          <PrivateRoute exact path='/admin/list' component={AdminList} />
          <PrivateRoute exact path='/admin/request' component={AdminRequest} />
          <Route path='/books/:id' children={<SingleBook />} />
          <PrivateRoute path='/user' component={User} />
          <PrivateRoute path='/user/inc' component={UserIncRequests} />
          <PrivateRoute path='/user/request' component={UserRequests} />
          <PrivateRoute exact path='/searchbook' component={SearchBook} />
          <Route exact path='/single' component={SingleBook} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
