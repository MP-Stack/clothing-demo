import React from 'react';
import Navbar from './pages/navbar/navbar';
import Products from './pages/products/products-page';
import Cart from './pages/myCart/myCart-page';
import Contact from './pages/contact/contactPage';
import Homepage  from './pages/homepage/home-page'
import {Switch,Route} from 'react-router-dom';
import Signup from './pages/Signup/sign-up';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} 
        />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}
