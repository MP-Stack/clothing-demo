import React, { useEffect } from 'react';
import './App.css'
import HomePage from './clothing/homepage/HomePage';
import {Route,Switch, Redirect} from "react-router-dom";
import SignInAndSignUpPage from './clothing/Sign-In-and-Sign-Up/sign-in-and-sign-up';
import Header from './clothing/Header/Header';
import ShopPage from './clothing/shoppage/ShopPage';
import {connect} from 'react-redux';
import CheckOut from './clothing/checkout-page/checkout';
import { selectCurrentUser } from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.action';
// import {selectCollectionForPreview} from './redux/shop/shop.selectors';
// import {addCollectionAndDocuments} from './clothing/firebase/firebase.utils';

const App =({checkUserSession,currentUser}) =>{
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  // componentDidMount() {
  //   checkUserSession();
  //   const {collectionsArray} = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth=>{
  //     if(userAuth){
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapshot=>{
  //         this.setState({
  //           currentUser:{
  //             id:snapshot.id,
  //             ...snapshot.data()
  //           }
  //         },()=>
  //         console.log(this.state))
  //       })
  //     }else{
  //       alert('User Signed Out')
  //     };
  //     setCurrentUser(userAuth);
  //     addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
  //   })};

      return (
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/checkout" component={CheckOut} /> 
              <Route exact path='/signin' 
                render={()=>
                      currentUser?
                      (<Redirect to='/' />) : 
                      (<SignInAndSignUpPage />) }
               />
            </Switch>
      </div>
    )}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray:selectCollectionForPreview
})

const mapDispatchToProps=(dispatch) =>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
