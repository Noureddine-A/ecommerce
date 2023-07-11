import React from 'react';

import { useDispatch } from 'react-redux';

import {modalActions} from '../store/redux';

import './ProductThumbnail.css';

const ProductThumbnail = (props) => {
  const dispatch = useDispatch();

  const photoClickedHandler = () => {
    dispatch(modalActions.openOrCloseModal(props.img));
  }

  return (
    <div className="product__thumbnail-container">
        <img onClick={photoClickedHandler} src={props.img} alt={props.img}/>
    </div>
  )
}

export default ProductThumbnail;