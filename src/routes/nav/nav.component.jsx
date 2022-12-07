import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import './nav.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

const Navbar = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  

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
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
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