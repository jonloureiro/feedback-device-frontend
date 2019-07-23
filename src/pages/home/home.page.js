import React from 'react';

import { ActionButton } from 'office-ui-fabric-react';

import Header from '../../components/header';
import Card from '../../components/card';
import PieChart from '../../components/pie-chart';

import Style from './home.module.scss';

const Home = ({ logout, data }) => (
  <div className={Style.home}>
    <Header className={Style.home__header}>
      <ActionButton onClick={logout}>
        Sair
      </ActionButton>
    </Header>
    <div className={Style.home__wrapper}>
      <Card className={Style.home__card}>
        <PieChart label="Hoje" data={data.today} />
        <PieChart label="Semana" data={data.week} />
        <PieChart label="Mês" data={data.month} />
      </Card>
    </div>
  </div>
);


export default Home;
