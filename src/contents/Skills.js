import './Skills.css';
import React, { Component } from "react";
import  {BsAppIndicator}  from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Languages: ["HTML5", "CSS3", "JavaScript ES6+", "SQL","NoSQL","Bootstarp"],
      applications: [ "Github", "MongoDB","MySQL","VS Code","Git"],
      Tools: [ "React", "Handlebars","GraphQL","Rest APIs","Node js"],
    };
  };
  
  render() {
    return (
      <div className=" cont skills_container ">
        <div classsName="skills_column tittle">
            <h1>Skills</h1>
        </div>
        <div className="row">
          <div className="text-center skills_column">
            <BsCodeSlash size="50px" color="orange" />
            <h1 className="mt-5">Languages</h1>
            {this.state.Languages.map((value) => {
              return <h4>{value}</h4>;
            })}
          </div>
          <div className="text-center skills_column">
            <BsAppIndicator size="50px" color="orange" />
            <h1 className="mt-5">Applications</h1>
            {this.state.applications.map((value) => {
              return <h4>{value}</h4>;
            })}
          </div>
          <div className="text-center skills_column skills_mcolumn">
            <BsTools size="50px" color="orange" />
            <h1 className="mt-5">Tools</h1>
            {this.state.Tools.map((value) => {
              return <h4>{value}</h4>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
