import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext( AuthContext );

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
