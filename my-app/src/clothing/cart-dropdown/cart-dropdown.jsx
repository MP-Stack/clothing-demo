import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../../clothing/custom-button/custom.button';

const CartDropDown =()=>(
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropDown;