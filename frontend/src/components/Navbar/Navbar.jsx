import React from 'react';
import './Navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/argentBankLogo.webp';
import { logOut } from '../../redux/actions/auth.actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut()); 
    navigate('/');
  };

  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </NavLink>
      {isLoggedIn ? (
        <div className='logout'>
          <NavLink to='/dashboard'>
            <i className='fa fa-user-circle main-nav-item'></i>
            {user?.userName}
          </NavLink>
          <NavLink to='/' onClick={handleLogout}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div className='sign-in'>
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
