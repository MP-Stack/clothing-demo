import React from 'react';
import './checkout-item.scss';

const CheckoutItem=({cartItem:{imageUrl,price,quantity,name}})=>(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt='img' />
      </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove'></span>

    

  </div>
)

export default CheckoutItem;