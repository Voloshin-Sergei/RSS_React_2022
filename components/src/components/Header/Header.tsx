import React from 'react';
import logo from '../../img/logo.png';
import bg from '../../img/header_bg.png';

import style from './Header.module.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header__container}>
          <div className={style.header__wrapper}>
            <a href="/">
              <img className={style.header__logo} src={logo} />
            </a>
            <nav className={style.nav}>
              <ul className={style.nav__list}>
                <li className={style.nav__item}>Home</li>
                <li className={style.nav__item}>About us</li>
              </ul>
            </nav>
          </div>
          <img className={style.header__bg} src={bg} />
        </div>
      </header>
    );
  }
}
