import React, {useState,useEffect}from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {Button} from '../../components/Button/Button';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    // showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <nav className='navbar'>
      <div className='navbar-container container'>
        <Link to='/' className='navbar-logo'>
          <MdFingerprint className='navbar-icon' />
          JARVIS
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links'onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-btn'>
            {button ? (
              <Link to='/signup' className='btn-link'>
                <Button buttonStyle='btn--outline'>SIGN UP</Button>
              </Link>
            ) : (
              <Link to='/signup' className='btn-link'>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  onClick={closeMobileMenu}
                >
                  SIGN UP / SIGN IN
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </IconContext.Provider>
</>
);
}
export default Navbar;