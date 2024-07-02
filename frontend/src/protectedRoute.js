import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, isProtected }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isProtected && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!isProtected && isLoggedIn) {
    return <Navigate to="/Dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;