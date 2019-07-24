import React from 'react';

import { ActionButton } from 'office-ui-fabric-react';

import Header from '../../components/header';
import Card from '../../components/card';
import PieChart from '../../components/pie-chart';

import Style from './home.module.scss';


const Home = ({ logout, data, refresh }) => (
  <div className={Style.home}>
    <Header className={Style.home__header}>
      <ActionButton
        onClick={refresh}
        iconProps={{ iconName: 'Sync' }}
      />
      <ActionButton onClick={logout}>
        Sair
      </ActionButton>
    </Header>
    <div className={Style.home__wrapper}>
      <Card className={Style.home__card}>
        <PieChart id="today" label="Hoje" data={data.today} className={Style.home__chart} />
        <PieChart id="week" label="Últimos 7 dias" data={data.week} className={Style.home__chart} />
        <PieChart id="month" label="Últimos 30 dias" data={data.month} className={Style.home__chart} />
      </Card>
    </div>
  </div>
);


export default Home;
