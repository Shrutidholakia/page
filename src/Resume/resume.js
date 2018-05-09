import React, {Component} from "react";
import "./resume.css";
import Navbar from "../Navbar/Navbar.js";

class Resume extends Component {
  render(){
    return(
      <div class="Resume">
      <Navbar/>
     <div class="d-flex justify-content-center">RESUME</div>
      <h2>WORK EXPERIENCE</h2>
          <h3 class= "work"> Research Analyst (Jan 2017- Present)- Bank Of America</h3>
          <ul>
<li>Investigatesdailyincomingdeceasedcustomersinquiries,flagprofile,creatingcaseinPROPS,informing agency about the event.</li>
<li>View depository accounts to determine if Federal Benefits need to be returned to the federal Agency, putting stops on future incoming benefits from federal agency.</li>
<li>Returnpayment/ACHFederalBenefitsusinganon-linefinancialsystem.</li>
<li>UtilizemultiplebanksystemsincludingBOSS,Fast,Image-view,Synergy,File.net,Ap-Secure,Contain-Navigator.</li>
         </ul>
            <h3 class= "work"> Relationship Banker(June2015-Dec2016)- Bank Of America</h3><br/>
          <ul>
<li>Engage customers in the lobby to assist, educate and train customers on how to conduct simple transactions through self-service technologies.</li>
<li>Connecting Customers to the appropriate teammate to help them achieve their financial goals.</li>
<li>Work with retail customers to build and deepen relationships by uncovering financial needs and recommending
the best products, services and solutions to meet those needs.</li>
           </ul>

      <h2>EDUCATION</h2>
          <ul>
          <li>R P BHALODIA COLLEGE - Bachelor in Business Administration (2010)</li>
          <li>WEBSTER UNIVERSITY - Masters of Business Administration (Emphasis in Finance) (2013)</li>
          <li>Business Analyst Certification Course (2016)</li>
          <li>LaunchCode(Web-Development) (2017)</li>
          </ul>

      <h2>TECHNICAL SKILLS</h2>
          <ul>
          <li>Web Technologies:	HTML 4/5, JSON, CSS 3, JavaScript</li>
          <li>Database: Oracle, SQL</li>
          <li>Development Tools: GitHub Atom, Visual Code, MS Office Suite</li>
          <li>Development Tools: GitHub Atom, Visual Code, MS Office Suite</li>
          <li>Operating Systems: Windows 7/10, MAC</li>
          </ul>

      </div>
    );
  }
}


export default Resume ;
