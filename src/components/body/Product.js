import React from "react";

import "./Product.css";

import MainImage from "../../assets/images/image-product-1.jpg";
import ImageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import ImageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import ImageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import ImageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

import ProductThumbnail from "./ProductThumbnail";
import CartIcon from "../../assets/icons/icon-cart-button.svg";
import ProductModal from "../UI/ProductModal";

import { useDispatch, useSelector } from "react-redux";
import { cartActions, modalActions } from "../store/redux";

const images = [
  {
    image: ImageProduct1Thumbnail,
  },
  {
    image: ImageProduct2Thumbnail,
  },
  {
    image: ImageProduct3Thumbnail,
  },
  {
    image: ImageProduct4Thumbnail,
  },
];

export const Product = () => {
  const productAmount = useSelector((state) => state.cart.productAmount);
  const dispatch = useDispatch();

  const addAmountClickHandler = () => {
    dispatch(cartActions.addToAmount());
  };

  const reduceAmountClickhandler = () => {
    dispatch(cartActions.reduceAmount());
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addedToCart());
  };

  const openModal = () => {
    dispatch(modalActions.openOrCloseModal(MainImage));
  }

  return (
    <div className="product__container">
      <div className="product__left">
        <img onClick={openModal} src={MainImage} alt={MainImage} />
        <div className="product__thumbnail-images">
          {images.map((img) => {
            return <ProductThumbnail img={img.image} />;
          })}
        </div>
      </div>
      <div className="product__right">
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="product__price">
          <h2>$125.00</h2>
          <p>50%</p>
        </div>
        <p className="original__price">$250.00</p>
        <div className="product__cart">
          <button className="minus" onClick={reduceAmountClickhandler}></button>
          <p>{productAmount}</p>
          <button className="plus" onClick={addAmountClickHandler}></button>
          <button className="add-to-cart" onClick={addToCartHandler}>
            <img src={CartIcon} alt={CartIcon} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
