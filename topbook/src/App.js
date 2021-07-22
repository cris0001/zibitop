import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'

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
  AllUserBooks,
  UsersReqToAdmin,
} from './pages'
import SearchBook from './pages/SearchBook'
import AddBook from './pages/AddBook'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

function App() {
  return (
    <Router>
      <ReactNotification />
      <Switch>
        {/* <AnonRoute exact path='/searchbook' component={SearchBook} /> */}
        {/* <Route exact path='/searchbook' component={SearchBook} /> */}
        <Route exact path='/' component={Home} />
        <AdminRoute exact path='/admin' component={AdminList} />
        <AdminRoute exact path='/admin/list' component={Admin} />
        <AdminRoute exact path='/admin/request' component={AdminRequest} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/add' component={AddBook} />
        <Route exact path='/reg' component={Reg} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/books' component={Books} />
        <Route path='/books/:id' children={<SingleBook />} />
        <PrivateRoute exact path='/user' component={User} />
        <PrivateRoute exact path='/user/inc' component={UserIncRequests} />
        <PrivateRoute exact path='/user/adminrq' component={UsersReqToAdmin} />
        <PrivateRoute exact path='/user/request' component={UserRequests} />
        <PrivateRoute exact path='/searchbook' component={SearchBook} />

        <PrivateRoute exact path='/searchbook/:isbn' component={AddBook} />
        <Route exact path='/:noticeId' component={AllUserBooks} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}
export default App
