import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const isAuthenticated = () => false;

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )
  }
  />
);


export default LoginRoute;
