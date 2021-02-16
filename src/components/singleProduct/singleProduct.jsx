import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../common/layout";
import { ProductsContext } from "./../../context/productsContext";
import { Card, Button, Spinner } from "react-bootstrap";
import "./singleProduct.css";

const SingleProduct = ({ match, history }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((p) => Number(p.id) === Number(id));
    if (!product) return history.replace("/shop");
    setProduct(product);
  }, []);

  let loading = false;
  if (!product) return (loading = true);
  const { title, imageUrl, price, description } = product;

return (
    <Layout>
      {loading && <Spinner animation="border" size="lg" />}
      <div className="row">
        <div className="col-sm-12 col-md-6 product__box">
          <Card.Img className="product__img" variant="top" src={imageUrl} />
          <Card.Body>
          <Card.Title className="product__title"><h2>{title}</h2></Card.Title>
          </Card.Body>
        </div>
        <div className="col-sm-12 col-md-6 product__box">
          <Card.Body>
          <Card.Subtitle className="product__price"><h4>Price: $ {price}</h4></Card.Subtitle>
          <Button className="product__btn" variant="dark">Add to Cart</Button>
          <Button className="product__btn" variant="dark">Proceed To Checkout</Button>
          <Card.Text className="product__description" >{description}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SingleProduct);
