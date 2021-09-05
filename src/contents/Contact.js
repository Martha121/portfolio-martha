import './Contact.css'
import React, { Component } from 'react';
import Contactcard from '../Components/Contactcard';
import Social from '../Components/Social';
class Contact extends Component {
render() {
return (
  <div className="contact_container">
    <h1 className="subtopic">Contact Me</h1>
    <br></br>
    <br></br>
    <h3>Email : marthagamez211@gmail.com</h3>
    <br></br>
    <h3>Phone: 512 6982297</h3>
    <br></br>
    <h3>Austin,Tx.</h3>
    <Social />
  </div>
);
}
}
export default Contact
