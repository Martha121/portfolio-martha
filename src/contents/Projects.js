import React, { Component } from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import foto  from "../img/chooseandchill.png";
import foto2 from "../img/labmanager.png";
import foto3 from "../img/confeastador.PNG";
import foto4 from "../img/mostachos1.png";
import foto5 from "../img/karoleal1.png";
import foto6 from "../img/guidetothrive.png";
const Projects =()=> {
  const cardInfo = [
    {
      image: foto,
      title: "Choose and Chill",
      text: "This application helps customers plan an evening with recipes ideas and movie suggestions. Built with JavaScript, HTML, CSS and Materialize languages.",
      link: "https://martha121.github.io/choose-and-chill/",
      url: "https://github.com/Martha121/choose-and-chill",
    },
    {
      image: foto2,
      title: "Lab Manager ",
      text: "Application to help organize results data quickly and efficiently for a clinical molecular laboratory. Built with: Handlebars, CSS, JavaScript, amCharts, Bootstrap, Font awesome, bcrypt, mysql2, Express and Session.",
      link: "http://hidden-sea-70156.herokuapp.com",
      url: "https://github.com/mambru82/lab-manager",
    },
    {
      image: foto3,
      title: "  Confeastador",
      text: "conFEASTador is a web application for users to make and manage restaurant reservations. Built with:React, Node.js, JavaScript, CSS, JWT, Express, MongoDB. ",
      link: "https://confeastador.herokuapp.com/",
      url: "https://github.com/NickolausCarter/confeastador",
    },
    {
      image: foto4,
      title: "Mostachos",
      text: "User-friendly webpage for a pizza restaurant where users check menu,price and promotions. Built with WordPress template , JavaScript and HTML.",
      link: "https://mostachospizza.com/",
    },
    {
      image: foto5,
      title: "karoleal Photography",
      text: "Photography Website created to help display pictures and stay in contact with clients.Built with WordPress template , JavaScript and HTML.",
      link: "https://karoleal.com/",
    },
    {
      image: foto6,
      title: "Guide To Thrive",
      text: "Website created for an Eduactional Consultant bussines. Built with WordPress template , JavaScript and HTML.",
      link: "https://guidetothrive.com/",
    },
  ];

  const renderCard = (card,index) => {
    return (
      <Card
        border="dark"
        style={{ width: "16rem", height:"300px"}}
        key={index}
        className="box boxshadow"
      >
        <Card.Img
          variant="top"
          src="holder.js/100px180"
          src={card.image}
          width="255px"
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text className="description">{card.text}</Card.Text>
          <div className="cardbutton">
            <Button className="button" href={card.link} variant="outline-warning">
            Go to page
          </Button>
          
          <Button className="button button1" href={card.url} variant="outline-warning">
            Repo URL
          </Button>
         </div> 
        </Card.Body>
          <br />
      </Card>
    ); 
  };
    return (
      <div className=" condiv">
        <h1>Projects</h1>
        <div className="grid contact">
          {cardInfo.map(renderCard)}
        </div>
      </div>
    );
  
}
export default Projects;