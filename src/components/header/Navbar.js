import React from "react";

import "./Navbar.css";

import Logo from "../../assets/icons/logo.svg";
import CartIcon from "../../assets/icons/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Cart from "../cart/Cart";

import { useState } from "react";

const Navbar = () => {
  const [cartShown, setCartShown] = useState(false);

  const showCart = () => {
    setCartShown(true);
  };

  const dontShowCart = () => {
    setTimeout(setCartShown, 100, false);
  };

  const showCartOnCartHover = () => {
    setTimeout(setCartShown, 100, true);
  }

  return (
    <div className="navbar__container">
      <div className="navbar__left">
        <img src={Logo} alt={Logo} />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img className="cart" src={CartIcon} alt={CartIcon} />
        <img
          className="avatar"
          src={Avatar}
          alt={Avatar}
          onMouseOver={showCart}
          onMouseOut={dontShowCart}
        />
        {cartShown && (
          <div className="show__cart" onMouseOver={showCartOnCartHover} onMouseOut={dontShowCart}>
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
