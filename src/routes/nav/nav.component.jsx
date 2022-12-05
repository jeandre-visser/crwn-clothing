import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav" >
        <h1>Navbar</h1>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navbar;