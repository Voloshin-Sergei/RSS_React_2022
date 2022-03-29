import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import bg from '../../img/header_bg.png';

import style from './Header.module.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.header__container}>
          <div className={style.header__wrapper}>
            <Link to="/">
              <img className={style.header__logo} src={logo} />
            </Link>
            <nav className={style.nav}>
              <ul className={style.nav__list}>
                <li className={style.nav__item}>
                  <Link className={style.nav__link} to="/">
                    Home
                  </Link>
                </li>
                <li className={style.nav__item}>
                  <Link className={style.nav__link} to="/about">
                    About us
                  </Link>
                </li>
                <li className={style.nav__item}>
                  <Link className={style.nav__link} to="/users">
                    Users
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <img className={style.header__bg} src={bg} />
        </div>
      </header>
    );
  }
}
