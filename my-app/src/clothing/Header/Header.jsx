import React from 'react';
import './Header.styles.scss';
import CartIcon from '../../clothing/cart-icon/cart-icon';
import CartDropDown from '../../clothing/cart-dropdown/cart-dropdown';
import {ReactComponent as HomeIcon} from '../../assets/crown.svg'; 

import {Link} from "react-router-dom";

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { signoutStart } from '../../redux/user/user.action';


const Header =({currentUser,hidden,signoutStart}) =>{
  return(
  <div className="header"> 
   
      <Link to='/' className='head' >
          <HomeIcon />
        </Link>
    
        <div className="options" >
          <Link to='/shop'  className="option">
            SHOP
          </Link>
          <Link to='/contact' className="option">
            CONTACT
          </Link>
      {
        currentUser?
         <div className="option" onClick={signoutStart}>SIGN OUT</div> 
          :   
        <Link to='/signin' className="option"> SIGN IN </Link>
      }

           <CartIcon />    
      </div>
            { hidden? null : <CartDropDown/> }


    </div>
  
)}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

const mapDispatchToprops = dispatch =>({
  signoutStart:()=>dispatch(signoutStart())
})

export default connect(mapStateToProps,mapDispatchToprops)(Header);