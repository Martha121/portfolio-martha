import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/Martha121"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="40px" color="orange" />
        </a>
        <a
          href="https://www.linkedin.com/in/martha-gamez-60a5764a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="40px" color="orange" />
        </a>
      </div>
    );
  }
}
export default Social;
