import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateProfileComponent from './Components/CreateProfileComponent';
import Home from './Components/Home';
import CreateJobComponent from './Components/CreateJobComponent'
import Navbar from './Components/CustomNavBar';
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
      <Switch>
          <div> 
          <Navbar />
            <Route exact path = "/" component = {Home}/>
            <Route path = "/createProfile" component = {CreateProfileComponent}/>
            <Route path = "/createJob" component = {CreateJobComponent}/>
          </div> 
      </Switch>
      </Router>
    );
  }
}

export default App;
