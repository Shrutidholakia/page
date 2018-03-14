import React, {Component} from "react";
import "./Blog.css";
import Navbar from "../Navbar/Navbar.js";

class Blog extends Component{
  render(){
    return(
      <div>
      <Navbar/>

      <h2>Blog</h2>
      <ol>
      <li><a href= "https://www.htmlgoodies.com/primers/html/">Link to HTML</a></li>
      <li><a href= "https://www.makeuseof.com/tag/simple-css-code-examples/">Link to CSS</a></li>
      <li><a href= "https://www.quackit.com/javascript/examples/">Link to JavaScript</a></li>
      </ol>
      </div>
    );
  }
}
export default Blog;
