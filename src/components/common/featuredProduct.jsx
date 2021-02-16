import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./featuredProduct.css";

const FeaturedProduct = (props) => {
    const {history} = props;
    const {id, title, imageUrl, price} = props.product;
    const button = !props.btn ? "Shop Now" : "Add to Cart";
    const buttonColor = !props.btn ? "warning" : "danger";


    return (<div className="featuredproduct__card d-flex align-items-stretch col-sx-12 col-sm-6 col-md-4 col-lg-3">
    <Card className="card__main" onClick={()=> {history.push(`/shop/product/${id}`)}}>
    <Card.Img className="card__img" variant="top" src={imageUrl} />
    <Card.Body className="card__body">
      <Card.Title className="card__title">{title}</Card.Title>
      <Card.Subtitle  className="card__price" >$ {price}</Card.Subtitle>
    </Card.Body>
    <Button className="card__btn" variant={buttonColor}>{button}</Button>
  </Card></div>  );
}
 
export default withRouter(FeaturedProduct);