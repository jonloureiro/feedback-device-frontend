import React from 'react';

import { ActionButton } from 'office-ui-fabric-react';

import Header from '../../components/header';
import Card from '../../components/card';

import Style from './home.module.scss';

const Home = ({ logout }) => (
  <div className={Style.home}>
    <Header className={Style.home__header}>
      <ActionButton onClick={logout}>
        Sair
      </ActionButton>
    </Header>
    <div className={Style.home__wrapper}>
      <Card className={Style.home__card}>
        <h3>Só de teste!</h3>
      </Card>
    </div>
  </div>
);


export default Home;
