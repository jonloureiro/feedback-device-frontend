import React from 'react';

import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
  component: Component, user: { isAuthenticated, logout }, data: { getData, refreshData }, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        <Component {...props} logout={logout} data={getData()} refresh={refreshData} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )
  }
  />
);


export default PrivateRoute;
