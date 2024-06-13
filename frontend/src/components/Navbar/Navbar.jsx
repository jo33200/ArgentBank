import './Navbar.scss';
import { NavLink, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/argentBankLogo.webp';
import React from 'react';
import { Logout } from '../../redux/logout/logout';

const Navbar = () => {
  const user = useSelector((state) => state.userLogin.user);
  const dispatch = useDispatch();
  const authentification = useSelector((state) => state.auth.authentification);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(Logout());
    Navigate('/login');

  };

  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </NavLink>
      {authentification ? (
          <>
            <NavLink to='/profile'>
                <i className='fa fa-user-circle main-nav-item'></i>
                {user?.userName}
            </NavLink>
            <NavLink to='/' onClick={handleLogout}>
                <i className='fa fa-sign-out'></i>
                Sign Out
            </NavLink>
          </>
      ) : (
        <div>
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