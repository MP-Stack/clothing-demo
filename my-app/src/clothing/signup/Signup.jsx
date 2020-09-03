import React from 'react';
import './Signup.scss';
import FormInput from '../../clothing/form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button'; 
import {auth, createUserProfileDocument} from '../../clothing/firebase/firebase.utils';
// import firebase from 'firebase/app';



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

  handleSubmit = async event =>{
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
      if(password!==confirmPassword){
        alert("password don't match");
        return;
      }

        try{
          const {user} = await auth.createUserWithEmailAndPassword(email,password);

          await createUserProfileDocument(user,{displayName})
          alert('New User Successfully')
          this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
          })
        }catch(error){
          alert ('SignUp Failed')
        }
    
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