import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/actions/auth.actions';
import Button from '../../components/Button/Button';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Veuillez remplir l\'email et le mot de passe'); // Initial message

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const { isLoggedIn, error } = user;

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
    if (error) {
      setErrorMessage('Email et/ou mot de passe erroné(s)');
    }
  }, [isLoggedIn, error, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Veuillez remplir l\'email et le mot de passe');
    } else {
      dispatch(logIn({ email, password, rememberMe }));
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
              <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button className="button-sign" type="submit">
              Sign In
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;