import React, { Component } from 'react';
import Widecard from '../Components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv contact section">
<h1 className="subtopic">My Education</h1>
<Widecard title="Full Stack Web Developer" where="University of Texas" from="June 2021" to="Present"/>
<Widecard title="Electrical Engineering" where="ITESM" from="1991" to="1996"/>
</div>
)
}
}
export default Education