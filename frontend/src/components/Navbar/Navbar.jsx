import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/argentBankLogo.webp';
import { Logout as logoutAction } from '../../redux/logout/logout';

const Navbar = () => {
  const dispatch = useDispatch();

  // Sélection de l'état d'authentification depuis le store Redux
  const { userInfo } = useSelector((state) => state.login); // Assurez-vous que le nom du slice est correct
  const isLoggedIn = !!userInfo;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/profile">
            <i className='fa fa-user-circle main-nav-item'></i>
            {userInfo.username} {/* Assurez-vous que userInfo contient le nom d'utilisateur */}
          </NavLink>
          <NavLink to="/" onClick={handleLogout}>
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