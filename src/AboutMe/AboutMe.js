import React, {Component} from "react";
import "./aboutme.css";
import Navbar from "../Navbar/Navbar.js";

class AboutMe extends Component {
  render(){
    return(


      <div>
      <Navbar/>
      <h2>About Me</h2>
      <p>
      I was born and raised in India. After graduating from RP Bhalodia College,India I moved to USA in 2010,I was nervous to move to St Louis ,MO - a brana brand new city where I knew no one.I graduated from Webster University in May of 2013 with a Masters degree in Finance.After earning my degree in finance I decided to learn Web Development. One of my friend told me about Launch Code, where I pursed my Web Developemnt degree.
      </p>
      <h3> Skills</h3>
      <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      </ol>
      </div>
    );
  }
}


export default AboutMe;
