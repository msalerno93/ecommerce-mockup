import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
// import Logo  from '../../assets/ruby.png'

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          {/* <Logo className='logo' /> */}
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT US
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
