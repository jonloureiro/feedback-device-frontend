import React from 'react';

import Style from './style.module.scss';

const Card = ({ children }) => (
  <div className={Style.card}>
    { children }
  </div>
);

export default Card;
