import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/actions/auth.actions';
import Button from '../../components/Button/Button';
import './login.scss';

const Login = () => {
  // États pour gérer les champs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [localErrorMessage, setLocalErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialisation du dispatcher pour envoyer des actions Redux
  const dispatch = useDispatch();
  
  // Navigation pour rediriger les utilisateurs
  const navigate = useNavigate();
  
  // Sélection des informations d'authentification du store Redux
  const user = useSelector((state) => state.auth);
  const { isLoggedIn, error } = user;

  // Redirige vers le tableau de bord si l'utilisateur est connecté
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  // Mise à jour du message d'erreur en cas d'échec de l'authentification
  useEffect(() => {
    if (formSubmitted && error) {
      setLocalErrorMessage('Email et/ou mot de passe erroné(s)');
    }
  }, [error, formSubmitted]);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Vérification des champs vides
    if (!email || !password) {
      setLocalErrorMessage('Veuillez remplir tous les champs');
    } else {
      // Envoi de l'action de connexion avec les informations du formulaire
      dispatch(logIn({ email, password, rememberMe }));
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
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {formSubmitted && localErrorMessage && <p className="error-message">{localErrorMessage}</p>}
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