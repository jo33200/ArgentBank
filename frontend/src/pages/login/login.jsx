import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Login as loginAction} from '../../redux/login/login';
import Button from '../../components/Button/Button';
import './login.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard'); // Redirigez vers le tableau de bord ou une autre page
    }
    if (error) {
      setErrorMessage(error); // Affichez l'erreur si elle existe
    }
  }, [userInfo, error, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('veuillez remplir l&apos;email et le mot de passe');
    } else {
      dispatch(loginAction({ email, password }));
      setErrorMessage('');
    }
  };

  return (
    <main className="main bg-dark">
      <div className="container-sign-in">
        <section className="sign-in-content">
          <i className="fa fa-user-circle "></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            { errorMessage && <p className="error-message">{errorMessage}</p> }
            <Button className="button-sign" type="submit" onClick={handleSubmit} >
              Sign In
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;