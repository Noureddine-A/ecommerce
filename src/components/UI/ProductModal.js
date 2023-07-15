import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProductModal.css";
import ImageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import ImageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import ImageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import ImageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

import CloseIcon from "../../assets/icons/icon-close.svg";
import CloseIconHovered from "../../assets/icons/icon-close-hovered.svg";
import { modalActions } from "../store/redux";
import ProductThumbnail from "../body/ProductThumbnail";

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

const ProductModal = (props) => {
  const [changeIcon, setChangeIcon] = useState(false);

  const picture = useSelector((state) => state.modal.img);
  const dispatch = useDispatch();

  let icon = CloseIcon;

  if (changeIcon) {
    if (icon === CloseIcon) {
      icon = CloseIconHovered;
    } else {
      icon = CloseIcon;
    }
  }

  const changeIconColor = () => {
    setChangeIcon(true);
  };

  const removeColorIcon = () => {
    setChangeIcon(false);
  };

  const closeClickHandler = () => {
    dispatch(modalActions.openOrCloseModal());
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="close__picture">
          <img
            className="close__button"
            onMouseOver={changeIconColor}
            onMouseOut={removeColorIcon}
            src={icon}
            alt={icon}
            onClick={closeClickHandler}
          />
        </div>
        <div className="product__picture">
          <img src={picture} alt={picture} />
        </div>

        <div className="product__thumbnails">
          {images.map((img) => {
            return <ProductThumbnail img={img.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
