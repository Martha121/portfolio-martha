import './About.css'
import React, { Component } from "react";
import aboutPic from "../img/about1.jpg";
class About extends Component {
  render() {
    return (
      <div className="about_div">
        <img
          className="resize_fit_center"
          src={aboutPic}
          alt="Martha Gamez"
          className="photo"
        ></img>
        <br />
        <h1>I'm Martha Gamez</h1>
        <br />
        <p>
          I am an Electrical Engineer and a Full Stack Web Developer. I started
          my journey in the world of web development by pursuing my Full Stack
          Web Development Certificate at The University of Texas in Austin. I
          like creating Interactive UI components for better UX and share those
          desgins and code to the world through Github. I am skilled in JavaScript, 
          React.js, Express, responsive web design, and
          databases such as MySQL and MongoDB.
        </p>
      </div>
    );
  }
}
export default About;
