import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav" >
        <Link to='/' className="logo-container">
          <div>Logo</div>
        </Link>
        <div className="links-container">
          <Link to='/shop' className="nav-links-container">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navbar;