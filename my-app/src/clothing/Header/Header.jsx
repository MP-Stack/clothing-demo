import React, { Component } from 'react';
import './Header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as HomeIcon} from '../../assets/crown.svg'; 
import {auth} from '../../clothing/firebase/firebase.utils';
import {connect} from 'react-redux';
import CartItem from '../../clothing/cart-item/cart-item';
import CartDropDown from '../../clothing/cart-dropdown/cart-dropdown';


class Header extends Component{
  render(){
    console.log(this.props)

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
        this.props.currentUser?
         <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
         :   
        <Link to='/signin' className="option"> SIGN IN </Link>
      }

        <CartItem />    
      </div>
      <CartDropDown/>
  </div>)
  }
}

const mapStateToProps=(state)=>{
  return{
    currentUser:state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);