import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <Jumbotron fluid className="hero hero__img">
      <p className="hero__text">Bags Reimagined for Modern Life.</p>
      <Button className="btn btn-dark hero__btn">Shop Now</Button>
    </Jumbotron>
  );
};

export default Hero;
