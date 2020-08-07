import React from 'react';
import './checkout.scss';

import {connect} from 'react-redux';
import {selectCartTotal, selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../clothing/checkout-item/checkout-item';

const CheckOut =({cartItems,total})=>(
  <div className='checkout-page'>
       <div className='checkout-header'>
          <div className='header-block'>
            <span>Products</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div> 

        {
          cartItems.map(cartItem=> 
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
      
      <div className='total'>
       Total= ${total}
      </div>   
  </div>
)

const mapStateToProps =createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);