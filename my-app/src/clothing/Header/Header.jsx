import React from 'react';
import './Header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as HomeIcon} from '../../assets/crown.svg'; 
import {auth} from '../../clothing/firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../../clothing/cart-icon/cart-icon';
import CartDropDown from '../../clothing/cart-dropdown/cart-dropdown';


const Header =({currentUser,hidden}) =>(
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
         <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
          :   
        <Link to='/signin' className="option"> SIGN IN </Link>
      }

        <CartIcon />    
      </div>
      {
        hidden? null : <CartDropDown/>
      }
  </div>
  
)

const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>{
  return{
    currentUser,
    hidden
    }
}

export default connect(mapStateToProps)(Header);