import SHOP_DATA from '../../clothing/shop.data'

const iState ={
  collections:SHOP_DATA
};

const shopReducer = (state=iState,action) =>{
  switch(action.type){
    default:
      return state;
  }
}

export default shopReducer;