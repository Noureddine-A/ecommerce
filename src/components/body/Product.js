import React from "react";

import "./Product.css";

import MainImage from "../../assets/images/image-product-1.jpg";
import ImageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import ImageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import ImageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import ImageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

import ProductThumbnail from "./ProductThumbnail";
import CartIcon from  '../../assets/icons/icon-cart-button.svg';

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
  return (
    <div className="product__container">
      <div className="product__left">
        <img src={MainImage} alt={MainImage} />
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
            <button className="minus"></button>
            <p>0</p>
            <button className="plus"></button>
            <button className="add-to-cart">
                <img src={CartIcon} alt={CartIcon}/>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
