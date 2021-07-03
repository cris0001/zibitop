import React from 'react'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Books, Error, Home, Login, Reg, SingleBook, Admin } from './pages'

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
        <Route exact path='/reg'>
          <Reg />
        </Route>
        <Route exact path='/books'>
          <Books />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/book/:id'>
          <Books />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
