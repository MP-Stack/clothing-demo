import UserActionTypes from '../../redux/user/user.types';

const iState={
  currentUser:null,
  error:null
}

const userReducer=(state=iState, action)=>{
  switch(action.type){
    case UserActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case UserActionTypes.EMAIL_SIGNIN_SUCCESS:
      return{ 
        ...state,
          currentUser: action.payload
        };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return{
        ...state,
        currentUser:null,
        error:null
      }
    case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
    case UserActionTypes.EMAIL_SIGNIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return{
        ...state,
        error:action.payload
      }
        default:
         return state;
  }}


export default userReducer;