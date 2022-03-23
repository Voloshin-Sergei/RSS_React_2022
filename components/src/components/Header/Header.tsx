import React from 'react';
import logo from '../../img/logo.png';

import style from './Header.module.css';

export class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <img className={style.logo} src={logo} width="200" />
        <nav className={style.nav}>
          <ul className={style.nav_list}>
            <li className={style.nav_item}>Home</li>
            <li className={style.nav_item}>About us</li>
          </ul>
        </nav>
      </header>
    );
  }
}
