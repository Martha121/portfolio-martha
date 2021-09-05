import './About.css'
import React, { Component } from "react";
import aboutPic from "../img/about1.jpg";
class About extends Component {
  render() {
    return (
      <div className="about_div">
        <img className="resize_fit_center" src={aboutPic} alt="Martha Gamez"className="photo"></img>
        <br /><br />
        <h1>I'm Martha Gamez</h1>
        
        <br /><br />
        <p>
          I am an Electrical Engineer and a Full Stack Web Developer. 
          I started my journey in the world of web development by Pursuing 
          my Full Stack Web Development Certificate at The University of Texas 
          in Austin.I like creating Interactive UI components for better UX
          and share those desgin and codes to the world through Github.
        </p>
      </div>
    );
  }
}
export default About;
