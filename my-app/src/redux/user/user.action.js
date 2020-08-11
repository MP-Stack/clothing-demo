import UserActionTypes from '../../redux/user/user.types';

export const setCurrentUser = (user) =>{
  return{
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
  }
};
