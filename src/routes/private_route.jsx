import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/auth_context';

const PrivateRoute = ({ children }) => {
  const { logged } = useContext( AuthContext );

  return logged ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
