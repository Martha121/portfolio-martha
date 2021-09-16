import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import Resume from "../img/MarthaResume2021.pdf";
class Social extends Component {
  render() {
    return (
      <div className="social icon">
        <a
          href="https://github.com/Martha121"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <AiFillGithub size="40px" color="orange" />
        </a>
        <a
          className="icons icon"
          href="https://www.linkedin.com/in/martha-gamez-60a5764a/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <AiFillLinkedin size="40px" color="orange" />
        </a>
        <a
          className="icons icon"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
        >
          <ImProfile size="40px" color="orange" />
        </a>
      </div>
    );
  }
}
export default Social;
