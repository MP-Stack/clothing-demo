import React, { Component } from 'react';
import './SignIn.styles.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button';
import {SignInWithGoogle} from '../../clothing/firebase/firebase.utils';

class SignIn extends Component {
  state={
    email:'',
    password:''
  };

  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({email:'',password:''})
  };

  handleChange =(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I have already an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>

           <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='email' required/>
           {/* <label>Email</label> */}

           <FormInput 
                type='password' 
                name='password'  
                value={this.state.password} 
                handleChange={this.handleChange}
                label='password'
                required/>
           {/* <label>Password</label> */}
      <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
      </div>
        </form>
  

      </div>
    )
  }
}

export default SignIn;
