import React, { Component } from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import foto  from "../img/chooseandchill.png";
import foto2 from "../img/labmanager.png";
import foto3 from "../img/confeastador.PNG";
import foto4 from "../img/mostachos1.png";
import foto5 from "../img/karoleal1.png";
const Projects =()=> {
  const cardInfo = [
    {
      image: foto,
      title: "Choose and Chill",
      text: "Page for a pizza restaurant",
      link: "https://martha121.github.io/choose-and-chill/",
    },
    {
      image: foto2,
      title: "Lab Manager ",
      text: "Page for a Photographer",
      link: "http://hidden-sea-70156.herokuapp.com",
    },
    {
      image: foto3,
      title: "  Confeastador",
      text: "Page for entertain on weekends",
      link: "https://confeastador.herokuapp.com/",
    },
    {
      image: foto4,
      title: "Mostachos",
      text: "Page created to help the functions in a lab",
      link: "https://mostachospizza.com/",
    },
    {
      image: foto5,
      title: "karoleal Photography",
      text: "Page to help a person make reservations ",
      link: "https://karoleal.com/",
    },
  ];

  const renderCard = (card,index) => {
    return (
      <Card
        border="dark"
        style={{ width: "16rem" }}
        key={index}
        className="box boxshadow"
      >
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button href={card.link} variant="outline-warning">
            Go to page
          </Button>
        </Card.Body>
      </Card>
    ); 
  };
    return (
      <div className="condiv contact section">
        <h1>Projects</h1>
        <div className="grid">
          {cardInfo.map(renderCard)}
        </div>
      </div>
    );
  
}
export default Projects;