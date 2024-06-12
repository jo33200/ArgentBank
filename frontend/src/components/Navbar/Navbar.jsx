import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.webp'
import React from 'react';

const Navbar = () => { 

    return (
        <nav id="nav">
            <NavLink to="/">
                <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"/>
            </NavLink>
            <div>
                <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;