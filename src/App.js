import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import QuoteBody from './components/QuoteBody';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
            <Navbar/>
            <QuoteBody quote="This is a Quote" />
          <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          </Switch>
            <Testimonials />
            <Footer />
        </Router>
      </>
    )
  }
}

export default App
