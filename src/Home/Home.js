import React, {Component} from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";
import Image from "../Image/image.JPG";
class Home extends Component {
  render(){
    return(


      <div class="home">
      <Navbar/>
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="col-md-3 col-lg-3 col-sm-3">
              <img class="image" src={Image}/>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9">
              <div>
                <h1>Hello,</h1>
                <div class="circle">
                <h3 class="c1 col-md-4 col-lg-4 col-sm-4">MY RESUME</h3>
                <h3 class="c2 col-md-4 col-lg-4 col-sm-4">MY WORK</h3>
                <h3 class="c3 col-md-4 col-lg-4 col-sm-4">MY SKILLS</h3>
                </div>
                <p class="col-md-12 col-lg-12 col-sm-12">Shruti Dholakia works as a Research Analyst, specializing in management and Finance. She graduated from Webster University  in 2013 with a Masters of Business Administration,Emphasis in Finance.
                She also got a degree in Business Analyst and Studied Web Development from Launch Code.
                For a closer look at the professional work I have done, check out my portfolio or resume.
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default Home ;
