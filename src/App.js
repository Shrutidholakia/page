import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Navbar from "./Navbar/Navbar.js";
import Home from "./Home/Home.js";
import Resume from "./Resume/resume.js";
import Projects from "./Projects/Projects.js";
import Contact from "./Contact/Contact.js";



class App extends Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Navbar} />
        <Route path='/home' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
      </Router>

    );
  }
}

export default App;
