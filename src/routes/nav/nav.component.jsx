import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <Outlet />
    </div>
  )
}
export default Navbar;