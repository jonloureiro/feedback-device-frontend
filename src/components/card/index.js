import React from 'react';

import Style from './style.module.scss';

const Card = ({ children, className }) => (
  <div className={`${Style.card} ${className}`}>
    { children }
  </div>
);

export default Card;
