import React from 'react';

import Style from './header.module.scss';

const Header = ({ children, className }) => (
  <div className={`${Style.header} ${className || ''}`}>
    { children }
  </div>
);

export default Header;
