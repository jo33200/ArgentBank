import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login as loginAction } from '../../redux/login/login'; // Assure-toi que ce chemin est correct
import Button from '../../components/Button/Button';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Assure-toi que `state.auth` correspond bien au nom utilisé dans `combineReducers`
  const userLogin = useSelector((state) => state.login); 
  const { userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard'); // Redirige vers le tableau de bord si l'utilisateur est connecté
    }
    if (error) {
      setErrorMessage(error); // Affiche l'erreur s'il y en a une
    }
  }, [userInfo, error, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Veuillez remplir l\'email et le mot de passe'); // Correction de l'apostrophe
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