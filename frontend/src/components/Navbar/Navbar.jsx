import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.webp'

const Navbar = () => { 

    return (
        <nav id="nav">
            <NavLink to="/">
                <img src={Logo} className="main-nav-logo-image" alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
                </a>
            </div>
        </nav>
    );
};

export default Navbar;