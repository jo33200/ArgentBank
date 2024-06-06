import React from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ to, children }) => {

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate(to);
  }

  return (
    <button className='button' onClick={handleClick} >
      {children}
    </button>
  );
};

export default Button;