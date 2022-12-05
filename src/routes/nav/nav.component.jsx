import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './nav.styles.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navbar = () => {
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
          <Link to='/sign-in' className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navbar;