import UserActionTypes from '../../redux/user/user.types';

export const googleSigninStart = () =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_START,
  }
};

export const googleSigninSuccess = (user) =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload:user
  }
};
export const googleSigninFailure = (error) =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload:error
  }
};

export const emailSigninStart = (emailAndPassword) =>{
  return{
    type:UserActionTypes.EMAIL_SIGNIN_START,
    payload:emailAndPassword
  }
};

export const emailSigninSuccess = (user) =>{
  return{
    type:UserActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload:user
  }
};
export const emailSigninFailure = (error) =>{
  return{
    type:UserActionTypes.EMAIL_SIGNIN_FAILURE,
    payload:error
  }
};

export const signoutStart = () =>{
  return{
    type:UserActionTypes.SIGN_OUT_START
  }
};
export const signoutSuccess = () =>{
  return{
    type:UserActionTypes.SIGN_OUT_SUCCESS
  }
};
export const signoutFailure = (error) =>{
  return{
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
  }
};

export const checkUserSession=() =>{
  return{
    type:UserActionTypes.CHECK_USER_SESSION
  }
}

export const signUpStart = (userCredentials) =>{
  return{
    type:UserActionTypes.SIGN_UP_START,
    payload:userCredentials
  }
};
export const signUpSuccess = ({user,additionalData}) =>{
  return{
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
  }
};
export const signUpFailure = (error) =>{
  return{
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:error
  }
};
