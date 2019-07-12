import React from 'react';

import { PrimaryButton, TextField } from 'office-ui-fabric-react';

import Card from '../../components/card';

import Style from './style.module.scss';


const Login = () => (
  <div className={Style.login}>
    <Card className={Style.login__card}>
      <h2 className={Style.login__logo}>AVALIAÇÃO MUSEU</h2>
      <TextField type="email" placeholder="E-mail" iconProps={{ iconName: 'Contact' }} underlined />
      <TextField type="password" placeholder="Senha" iconProps={{ iconName: 'Encryption' }} underlined />
      <PrimaryButton className={Style.login__button}>Entrar</PrimaryButton>
    </Card>
  </div>
);


export default Login;
