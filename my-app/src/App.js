import React, { Component } from 'react';
import './App.css'
import HomePage from './clothing/homepage/HomePage';
import {Route,Switch, Redirect} from "react-router-dom";
import SignInAndSignUpPage from './clothing/Sign-In-and-Sign-Up/sign-in-and-sign-up';
import Header from './clothing/Header/Header';
import ShopPage from './clothing/shoppage/ShopPage';
import {auth,createUserProfileDocument} from './clothing/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import CheckOut from './clothing/checkout-page/checkout';
import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
// import {selectCollectionForPreview} from './redux/shop/shop.selectors';
// import {addCollectionAndDocuments} from './clothing/firebase/firebase.utils';

class App extends Component{
  unsubscribeFromAuth=null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    // const {collectionsArray} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>
          console.log(this.state))
        })
      }else{
        alert('User Signed Out')
      };
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
    }) 
  };

componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(this.props.currentUser)
      return (
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/checkout" component={CheckOut} /> 
              <Route exact path='/signin' 
                render={()=>
                      this.props.currentUser?
                      (<Redirect to='/' />) : 
                      (<SignInAndSignUpPage />) }
               />
            </Switch>
      </div>
    )}};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray:selectCollectionForPreview
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
 

export default connect(mapStateToProps,mapDispatchToProps)(App);
