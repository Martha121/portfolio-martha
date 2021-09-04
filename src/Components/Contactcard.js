import React, { Component } from "react";
class Contactcard extends Component {
  render() {
    return (
      <div class="widecard">
        <div>
          <h3>{this.props.email}</h3>
          <h4>{this.props.phone}</h4>
          <h4>{this.props.location}</h4>
        </div>
      </div>
    );
  }
}
export default Contactcard;
