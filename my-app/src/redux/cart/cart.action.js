import CartActionTypes from '../../redux/cart/cart.types';

export const toggleCartHidden = () =>{
  return{
    type:CartActionTypes.TOGGLE_CART_HIDDEN
  }
};

export const addItem =(item)=>{
  return{
    type:CartActionTypes.ADD_ITEM,
    payload:item
  }
};

export const removeItem=(item)=>{
  return{
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
  }
};

export const deleteItemFromCart=(item)=>{
  return{
    type:CartActionTypes.DELETE_ITEM_FROM_CART,
    payload:item
  }
};
