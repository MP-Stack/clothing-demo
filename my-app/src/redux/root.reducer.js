import {combineReducers} from "redux";
import userReducer from '../redux/user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';

const allReducer = combineReducers({
  user:userReducer,
  cart:cartReducer
});
export default allReducer;