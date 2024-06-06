import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.webp'

const Navbar = () => { 

    return (
        <nav id="nav">
            <NavLink to="/">
                <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"/>
            </NavLink>
            <div>
                <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;