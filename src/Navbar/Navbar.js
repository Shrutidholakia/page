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
              <a className="navbar-brand" href="#top">Shruti Dholakia</a>
            </div>
            <ul className="nav justify-content-end">
              <li className="nav-link"><NavLink to="/home" activeClassName="active">Home</NavLink></li>
              <li className="nav-link"><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
              <li className="nav-link"><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
              <li className="nav-link"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </HashRouter>
    );
  }
}
export default Navbar;
