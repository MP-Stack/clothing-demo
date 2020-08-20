import React from 'react';
import './Signup.scss';
import FormInput from '../../clothing/form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button'; 
import axios from 'axios';



class SignUp extends React.Component {
  state = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  handleChange=(event)=>{
    const {name,value}=event.target;
    this.setState ({[name]:value});
  };

  handleSubmit = event =>{
    event.preventDefault();
    const User = {
      displayName:this.state.displayName,
      email:this.state.email,
      password:this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    axios.post(`https://clothing-demo.firebaseio.com/marks.json`,{ User })
    .then(res =>{
      console.log (res);
      console.log(res.data)
    })
  }
 

  render(){
     const {displayName, email , password,confirmPassword} = this.state;
        return(
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
                   <CustomButton>Sign Up</CustomButton>
                    
                  </div>
             </form>
       
     
           </div>
         )
       }
    
  }
export default SignUp;