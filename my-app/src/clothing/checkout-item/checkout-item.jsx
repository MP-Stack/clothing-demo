import React from 'react';
import './checkout-item.scss';

import {deleteItemFromCart} from '../../redux/cart/cart.action';
import {addItem} from '../../redux/cart/cart.action';
import {removeItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';

const CheckoutItem=({cartItem,deleteItem,addItem,removeItem})=>{
    const {imageUrl,price,quantity,name}=cartItem;
  return(
  <div className="checkout-item">
    <h3>Checkout Item Page</h3>
    <div className="image-container">
      <img src={imageUrl} alt='img' />
      </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
          </span>
        <span className='price'>${price}</span>
        <span className='remove-button'onClick={()=>deleteItem(cartItem)}>&#10006;</span>
  </div>
)}

const mapDispatchToProps=dispatch=>({
  deleteItem:(item)=>dispatch(deleteItemFromCart(item)),
  addItem:(item)=>dispatch(addItem(item)),
  removeItem:(item)=>dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);