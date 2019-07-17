import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
  component: Component, user, data, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      user.isAuthenticated ? (
        <Component {...props} user={user} data={data} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )
  }
  />
);


export default PrivateRoute;
