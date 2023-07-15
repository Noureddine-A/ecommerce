import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { modalActions } from "../store/redux";

import "./ProductThumbnail.css";

const ProductThumbnail = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const modalOpen = useSelector((state) => state.modal.close);

  useEffect(() => {
    if (!modalOpen) {
      setSelected(false);
    }
  }, [modalOpen]);

  const photoClickedHandler = () => {
    if (modalOpen) {
      dispatch(modalActions.changePictureInModal(props.img));
    } else {
      dispatch(modalActions.openOrCloseModal(props.img));
      setSelected(true);
    }
  };

  return (
    <div className="product__thumbnail-container">
      {selected ? (
        <img
          className="thumbnail-img-selected"
          onClick={photoClickedHandler}
          src={props.img}
          alt={props.img}
        />
      ) : (
        <img
          className="thumbnail-img"
          onClick={photoClickedHandler}
          src={props.img}
          alt={props.img}
        />
      )}
    </div>
  );
};

export default ProductThumbnail;
