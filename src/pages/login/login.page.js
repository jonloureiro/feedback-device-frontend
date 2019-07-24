import React, { useState } from 'react';

import { PrimaryButton, TextField } from 'office-ui-fabric-react';

import { validateEmail } from '../../helpers';
import Card from '../../components/card';

import Style from './login.module.scss';


const Login = ({ login }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.type]: target.value,
    });
  };

  const handleOnClick = async () => {
    const { email, password } = inputs;
    if (validateEmail(email) && password.length > 0) {
      const { error, response } = await login(email, password);
      if (error) console.log(response);
    }
  };

  return (
    <div className={Style.login}>
      <Card className={Style.login__card}>
        <form className={Style.login__form}>
          <h2 className={Style.login__logo}>AVALIAÇÃO MUSEU</h2>
          <TextField
            type="email"
            placeholder="E-mail"
            iconProps={{ iconName: 'Mail' }}
            underlined
            value={inputs.email}
            onChange={handleOnChange}
          />
          <TextField
            type="password"
            placeholder="Senha"
            iconProps={{ iconName: 'Permissions' }}
            underlined
            value={inputs.password}
            onChange={handleOnChange}
          />
          <PrimaryButton className={Style.login__button} onClick={handleOnClick}>
            Entrar
          </PrimaryButton>
        </form>
      </Card>
    </div>
  );
};


export default Login;
