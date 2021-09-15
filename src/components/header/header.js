import React from 'react';

import classes from './header.module.scss';
import aviasalesLogo from '../../pictures/aviasales-logo.png';

const Header = () => (
  <header className={classes.header}>
    <img src={aviasalesLogo} alt="logo-aviasales" />
  </header>
);

export default Header;
