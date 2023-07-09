import React from "react";

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart__container">
      <div className="cart__header">
        <h3>Cart</h3>
      </div>
      <div className="cart__content">
        <div className="cart__content-description">
          <div className="cart__content-product">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x 3 </p>
          </div>
          <button></button>
        </div>
        <button className="cart__button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
