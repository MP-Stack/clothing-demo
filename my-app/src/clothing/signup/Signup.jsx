import React, { Component } from 'react';
import './Signup.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button';
import {auth} from '../../clothing/firebase/firebase.utils';

class SignUp extends Component {
  state={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  };

  handleSubmit =async event=>
  event.preventDefault();
    // const {displayName, email , password,confirmPassword} = this.state;

    // if(password !== confirmPassword){
    //   alert("password don't match")
    //   return;
    // };

    // try{ 
    //   const {user} = await auth.createUserWithEmailAndPassword(email,password);
     
    //  await createUserProfileDocument(user,{displayName});
    //  this.setState ({
    //    displayName:'',
    //     email:'',
    //     password:'',
    //    confirmPassword:''})

    // }catch(error){
    //   console.error(error);

    // };
  
    handleChange=(event)=>{
      const {name,value}=event.target;
      this.setState ({[name]:value});
    };

  render() {
   const {displayName, email , password,confirmPassword} = this.state;
    return (
       <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
           <span>Sign up with your email and password.</span>

         <form className='sign-up-form' onSubmit={this.handleSubmit}>

           <FormInput type='text' 
                      name='displayName' 
                      value={displayName} 
                      handleChange={this.handleChange} 
                      label='Display Name' required/>
           {/* <label>Email</label> */}

           <FormInput 
                type='email' 
                name='email'  
                value={email} 
                handleChange={this.handleChange}
                label='email'
                required/>

            <FormInput 
                type='password' 
                name='password'  
                value={password} 
                handleChange={this.handleChange}
                label='password'
                required/>

            <FormInput 
                type='password' 
                name='confirmPassword'  
                value={confirmPassword} 
                handleChange={this.handleChange}
                label='Confirm Password'
                required/>

           {/* <label>Password</label> */}
      
            <div className='buttons'>
              <CustomButton onClick={this.SubmitRegister}>Sign Up</CustomButton>
               
             </div>
        </form>
  

      </div>
    )
  }
}

export default SignUp;
