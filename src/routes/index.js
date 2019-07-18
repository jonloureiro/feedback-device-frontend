import React from 'react';

import {
  BrowserRouter, Switch,
} from 'react-router-dom';

import LoginRoute from './login.route';
import PrivateRoute from './private.route';

import Home from '../pages/home';
import Login from '../pages/login';


const Routes = ({ user, data }) => (
  <BrowserRouter>
    <Switch>
      <LoginRoute exact path="/login" component={Login} user={user} />
      <PrivateRoute exact path="*" component={Home} user={user} data={data} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
