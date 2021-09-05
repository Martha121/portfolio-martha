import './Home.css';
import React, { Component } from "react";
import profilepic from "../img/portada4.jpg";
import Social from "../Components/Social";
class Home extends Component {
  render() {
    return (
      <div className="rootCont"
        style={{
          backgroundImage: `url(${profilepic})`,
          backgroundRepeat: "no-repeat",
          zIndex: 5
        }} 
        id="home"
      >
        <div class="overlay"></div>
        <div class="content hometittle">I am Martha Gamez</div>
        <Social />
      </div>
    );
  }
}
export default Home;
