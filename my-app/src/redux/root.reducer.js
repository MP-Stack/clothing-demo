import {combineReducers} from "redux";
import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import directoryReducer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/shop/shop.reducer';

const allReducer = combineReducers({
  user:userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});
export default allReducer;