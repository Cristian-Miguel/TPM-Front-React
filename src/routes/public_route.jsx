import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext( AuthContext );

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
            // <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            <Navigate to="/" />
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
