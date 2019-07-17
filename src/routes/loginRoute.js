import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const LoginRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !user.isAuthenticated ? (
        <Component {...props} user={user} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )}
  />
);


export default LoginRoute;
