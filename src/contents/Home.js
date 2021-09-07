import './Home.css';
import React, { Component } from "react";
import profilepic from "../img/portada4.jpg";
import Social from "../Components/Social";
class Home extends Component {
  render() {
    return (
      <div
        className="home_rootCont parent home_content"
        style={{
          backgroundImage: `url(${profilepic})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="home_overlay"></div>
        <div className="home_content">
          <br />
          <br />
          I am Martha Gamez
          <Social />
        </div>
      </div>
    );
  }
}
export default Home;
