import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext( AuthContext );

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
