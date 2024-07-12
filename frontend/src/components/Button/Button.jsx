import React from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ to, onClick, children }) => {

  const Navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) Navigate(to);
  }

  return (
    <button id='button' onClick={handleClick} >
      {children}
    </button>
  );
};

export default Button;