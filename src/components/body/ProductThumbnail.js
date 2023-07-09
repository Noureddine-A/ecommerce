import React from 'react';

import './ProductThumbnail.css';

const ProductThumbnail = (props) => {
  return (
    <div className="product__thumbnail-container">
        <img src={props.img} alt={props.img}/>
    </div>
  )
}

export default ProductThumbnail;