import './App.css';

import React
// ,{ Component }
  from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage'
import Details from './pages/Details';


function App() {
  return (
    <div>
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/details">
              <Details/>
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App