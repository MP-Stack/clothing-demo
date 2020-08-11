import UserActionTypes from '../../redux/user/user.types';

const iState={
  name:'manas',
  currentUser:null
}

const userReducer=(state=iState, action)=>{
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return{ 
        ...state,
          currentUser:action.payload};
        default:
         return state;
  }}


export default userReducer;