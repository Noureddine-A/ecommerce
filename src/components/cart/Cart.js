import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/redux";

import "./Cart.css";

const Cart = () => {
  const cartProductPrice = useSelector((state) => state.productPrice);
  const cartAmountAddedToCart = useSelector(state => state.amountAddedToCart);
  const cartEmpty = useSelector(state => state.addedToCart);

  const dispatch = useDispatch();

  const deleteItemsClicked = () => {
    dispatch(cartActions.deleteItemsInCart());
  }

  return (
    <div className="cart__container">
      <div className="cart__header">
        <h3>Cart</h3>
      </div>
      {cartEmpty ?
        <div className="cart__content">
          <div className="cart__content-description">
            <div className="cart__content-product">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                ${cartProductPrice.toFixed(2)} x {cartAmountAddedToCart}
              </p>
            </div>
            <button onClick={deleteItemsClicked}></button>
          </div>
          <button className="cart__button">Checkout</button>
        </div>
      : <p className="cart__empty">Cart is empty</p>}
    </div>
  );
};

export default Cart;
