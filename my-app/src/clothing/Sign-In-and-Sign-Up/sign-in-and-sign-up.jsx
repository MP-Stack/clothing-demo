import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../signin/SignIn';
import SignUp from '../signup/Signup';
const SignInAndSignUpPage =() =>(
  <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
  </div>

)

export default SignInAndSignUpPage;