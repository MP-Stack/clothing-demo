import React, { Component } from 'react';
import './App.css'
import HomePage from './clothing/homepage/HomePage';
import {Route,Switch} from "react-router-dom";
import SignInAndSignUpPage from './clothing/Sign-In-and-Sign-Up/sign-in-and-sign-up';
import Header from './clothing/Header/Header';
import ShopPage from './clothing/shoppage/ShopPage';
import {auth} from './clothing/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';



const HatsPage=() =>(
  <div>
    <h1> Hats Page </h1>
  </div>
);
const Jackets=() =>(
  <div>
    <h1> Jackets Page </h1>
  </div>
);
const Snekers=() =>(
  <div>
    <h1> Snekers Page </h1>
  </div>
);
const Womens=() =>(
  <div>
    <h1> Women Page </h1>
  </div>
);
const Mens=() =>(
  <div>
    <h1> Mens Page </h1>
  </div>
);

class App extends Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
        console.log(user)
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  };

  

  render(){
    console.log(this.props)
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/jackets" component={Jackets} />
          <Route path="/snekers" component={Snekers} />
          <Route path="/womens" component={Womens} />
          <Route path="/mens" component={Mens} />
          <Route path="/shop" component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />  
        </Switch>
    </div>
)}};


const mapDispatchToProps=(dispatch)=>({
      setCurrentUser:(user)=>dispatch(setCurrentUser(user()))
    
});
 

export default connect(null,mapDispatchToProps)(App);
