import React from 'react';

import {
  BrowserRouter, Switch,
} from 'react-router-dom';

import LoginRoute from './loginRoute';
import PrivateRoute from './privateRoute';

import Home from '../pages/home';
import Login from '../pages/login';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <LoginRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
