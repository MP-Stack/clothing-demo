import SHOP_DATA from '../../clothing/shop.data';
import ShopActionTypes from './shop.types';
const iState ={
  collections:SHOP_DATA
};

const shopReducer = (state=iState,action) =>{
  switch(action.type){
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return{
        ...state,
        collections:action.payload
      };
    default:
      return state;
  };
}

export default shopReducer;