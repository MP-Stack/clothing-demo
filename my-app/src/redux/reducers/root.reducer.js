import {combineReducers} from "redux";
import userReducer from '../../redux/reducers/user.reducer';

const allReducer = combineReducers({
  user:userReducer
});
export default allReducer;