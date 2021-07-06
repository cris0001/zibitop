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
} from './pages'
import SearchBook from './pages/SearchBook'
import AddBook from './pages/AddBook'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/add'>
          <AddBook />
        </Route>
        <Route exact path='/reg'>
          <Reg />
        </Route>
        <Route exact path='/books'>
          <Books />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/admin/list'>
          <AdminList />
        </Route>
        <Route exact path='/admin/request'>
          <AdminRequest />
        </Route>
        <Route exact path='/searchbook'>
          <SearchBook />
        </Route>
        <Route exact path='/book/:id'>
          <Books />
        </Route>
        <Route exact path='/single'>
          <SingleBook />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
