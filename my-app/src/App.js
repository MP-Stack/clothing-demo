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
import CheckOut from './clothing/checkout-page/checkout';

class App extends Component{
  
  unsubscribeFromAuth=null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged (user=>{
    this.props.setCurrentUser(user);
    // console.log(user);
  })
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){
    // console.log(this.props)
      return (
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} /> 
              <Route path="/checkout" component={CheckOut} /> 
            </Switch>
        </div>
    )}};


const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
 

export default connect(null,mapDispatchToProps)(App);
