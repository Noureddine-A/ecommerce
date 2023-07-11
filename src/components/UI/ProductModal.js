import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProductModal.css";

import Image from "../../assets/images/image-product-1.jpg";
import CloseIcon from "../../assets/icons/icon-close.svg";
import CloseIconHovered from "../../assets/icons/icon-close-hovered.svg";
import { modalActions } from "../store/redux";

const ProductModal = (props) => {
  const [changeIcon, setChangeIcon] = useState(false);

  const modalClosed = useSelector(state => state.modal.close);
  const picture = useSelector(state => state.modal.img);
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
  }

  const closeClickHandler = () => {
    dispatch(modalActions.openOrCloseModal());
  }

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
        <img className="product__picture" src={picture} alt={picture} />
      </div>
    </div>
  );
};

export default ProductModal;
