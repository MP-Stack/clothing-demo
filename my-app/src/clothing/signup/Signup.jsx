import React,{useState} from 'react';
import './Signup.scss';
import FormInput from '../../clothing/form-input/form-input';
import CustomButton from '../../clothing/custom-button/custom.button'; 
import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
// import firebase from 'firebase/app';

const SignUp = ({signUpStart}) => {
 const [userCredentials,setUserCredentials] = useState({
   displayName:'',
  email:'',
  password:'',
  confirmPassword:''
})

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUserCredentials ({...userCredentials,[name]:value});
  };

  const {displayName,email,password,confirmPassword} = userCredentials;

  const handleSubmit = async event =>{
    event.preventDefault();
      if(password!==confirmPassword){
        alert("password don't match");
        return;
      }
    
   signUpStart(email,password,displayName);
        // try{
        //   const {user} = await auth.createUserWithEmailAndPassword(email,password);

        //   await createUserProfileDocument(user,{displayName})
        //   alert('New User Successfully')
        //   this.setState({
        //     displayName:'',
        //     email:'',
        //     password:'',
        //     confirmPassword:''
        //   })
        // }catch(error){
        //   alert ('SignUp Failed')
        // } 
  }
 
     return(
            <div className='sign-up'>
                 <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password.</span>
     
              <form className='sign-up-form' onSubmit={handleSubmit}>
     
                <FormInput type='text' 
                           name='displayName' 
                           value={displayName} 
                           handleChange={handleChange} 
                           label='Display Name' required/>
                {/* <label>Email</label> */}
     
                <FormInput 
                     type='email' 
                     name='email'  
                     value={email} 
                     handleChange={handleChange}
                     label='email'
                     required/>
     
                 <FormInput 
                     type='password' 
                     name='password'  
                     value={password} 
                     handleChange={handleChange}
                     label='password'
                     required/>
     
                 <FormInput 
                     type='password' 
                     name='confirmPassword'  
                     value={confirmPassword} 
                     handleChange={handleChange}
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

  const mapDispatchToProps=(dispatch) =>({
    signUpStart:(email,password,displayName)=>dispatch(signUpStart({email,password,displayName}))
  })
export default connect(null,mapDispatchToProps)(SignUp);