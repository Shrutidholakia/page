import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Navbar from "./Navbar/Navbar.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Blog from "./Blog/Blog.js";


class App extends Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Navbar} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/blog' component={Blog} />
      </Router>
    );
  }
}

export default App;
