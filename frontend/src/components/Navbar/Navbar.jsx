import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/argentBankLogo.webp';
import { logOut } from '../../redux/actions/auth.actions';
import UserModal from '../userModal/UserModal'; 

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut()); 
    navigate('/');
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo" />
      </NavLink>
      {isLoggedIn ? (
        <div className='logout'>
          <span onClick={handleModalOpen} className='main-nav-item' style={{ cursor: 'pointer' }}>
            <i className='fa fa-user-circle'></i>
            {user?.userName}
          </span>
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
      <UserModal isOpen={isModalOpen} onClose={handleModalClose} />
    </nav>
  );
};

export default Navbar;