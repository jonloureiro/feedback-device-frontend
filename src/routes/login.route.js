import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const LoginRoute = ({
  component: Component, user: { isAuthenticated, login }, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      !isAuthenticated() ? (
        <Component {...props} login={login} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}
  />
);


export default LoginRoute;
