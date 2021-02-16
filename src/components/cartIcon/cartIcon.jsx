import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
// import { CartContext } from '../../context/cart-context';
import shoppingCart from '../../assets/bag.svg'
import "./cartIcon.css";

const CartIcon = ({ history }) => {
  //   const { itemCount, cartItems } = useContext(CartContext);
  //   console.log('CartItems:', cartItems);
  return (

      <Link to="/cart" className="nav__cart">
        <div className="cart"><img src={shoppingCart} className="cart__img"/>
          <span className="cart__count">5 </span>
        </div>
      </Link>
  
  );
};

export default withRouter(CartIcon);
