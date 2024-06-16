import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/auth_context';

const PublicRoute = ({ children }) => {
  const { logged } = useContext( AuthContext );

  return !logged ? children : <Navigate to="/" />;
};

export default PublicRoute;
