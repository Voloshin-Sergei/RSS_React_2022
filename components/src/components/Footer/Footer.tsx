import React from 'react';

import ghLogo from '../../img/gh_logo.png';
import ramLogo from '../../img/ram_logo.png';
import rssLogo from '../../img/rss_logo.png';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/Voloshin-Sergei" className={style.footer__link}>
        <img className={style.ghLogo} src={ghLogo} alt="GitHub logo" />
      </a>
      <img className={style.footer__logo} src={ramLogo} alt="Rick and Morty logo" />
      <a href="https://rs.school/" className={style.footer__link}>
        <img className={style.rssLogo} src={rssLogo} alt="RSS logo" />
      </a>
    </footer>
  );
};
