// import CartActionTypes from '../../redux/cart/cart.types';

const iState={
  hidden:true
}

const cartReducer =(state=iState,action) =>{
  console.log(action)
  switch(action.type){
    case 'TOGGLE_CART_HIDDEN':
      return{
        ...state,
        hidden:!state.hidden
      };
      default:
        return state;
  }
}
export default cartReducer;