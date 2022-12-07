import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import './nav.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';

const Navbar = () => {

  const { currentUser } = useContext(UserContext);
  

  return ( 
    <Fragment>
      <div className="nav" >
        <Link to='/' className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link to='/auth' className="nav-link">
              SIGN IN
            </Link>
          )}
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navbar;