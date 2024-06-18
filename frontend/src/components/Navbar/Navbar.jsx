import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/argentBankLogo.webp';
import { logoutSuccess } from '../../redux/logout/logoutReducer';

const Navbar = () => {
  const user = useSelector((state) => state.userLogin.user);
  const isLoggedIn = useSelector((state) => state.userLogin.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess()); // Utilisation de l'action logoutSuccess pour mettre à jour le store
    navigate('/login');
  };

  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </NavLink>
      {isLoggedIn ? (
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
