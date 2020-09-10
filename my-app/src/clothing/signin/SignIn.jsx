import React, { useState } from 'react';
import './SignIn.styles.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button';
import { googleSigninStart,emailSigninStart } from '../../redux/user/user.action';
import {connect} from 'react-redux';

const SignIn =({emailSigninStart,googleSigninStart}) =>{
  const [userCredentials,setUserCredentials] = useState({email:'',password:''})
 
  const handleChange =(event)=>{
    const {name,value}=event.target;
    setUserCredentials({...userCredentials,[name]:value});
  };

  
  const {email,password} =userCredentials;

  const handleSubmit = async event =>{
    event.preventDefault();

    emailSigninStart(email,password);
}

    return (
      <div className='sign-in'>
        <h2>I have already an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={handleSubmit}>

           <FormInput type='email' name='email' value={email} handleChange={handleChange} label='email' required/>
           {/* <label>Email</label> */}

           <FormInput 
                type='password' 
                name='password'  
                value={password} 
                handleChange={handleChange}
                label='password'
                required/>
           {/* <label>Password</label> */}
      <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button'
           onClick={googleSigninStart} 
           isGoogleSignIn >Sign In With Google</CustomButton>
      </div>
        </form>
   </div>
    )
  }

const mapDispatchToProps = dispatch =>({
  googleSigninStart:()=>dispatch(googleSigninStart()),
  emailSigninStart:(email,password) =>dispatch(emailSigninStart({email,password}))
}) 

export default connect(null,mapDispatchToProps)(SignIn);
