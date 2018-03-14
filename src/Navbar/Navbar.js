import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component{
  render(){
    return(
      <HashRouter>
        <nav className="navbar navbar-default">
          <div className= "container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#top">Portfolio</a>
            </div>
            <ul className="nav justify-content-end">
              <li class="nav-link"><NavLink to="/about-me" activeClassName="active">About Me</NavLink></li>
              <li class="nav-link"><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
            </ul>
          </div>
        </nav>
      </HashRouter>
    );
  }
}
export default Navbar;
