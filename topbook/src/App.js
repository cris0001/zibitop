
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Books, Error,Home, Login, Reg,SingleBook} from './pages'

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
          <Route exact path='/book/:id' children={<SingleBook />}>
            <Books />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
         
    </Switch>
  </Router>
  );
}

export default App;
