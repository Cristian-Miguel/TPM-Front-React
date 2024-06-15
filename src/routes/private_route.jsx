import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext( AuthContext );

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          // <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
          <Navigate to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
