import React from 'react';

import ghLogo from '../../img/gh_logo.png';
import ramLogo from '../../img/ram_logo.png';
import rssLogo from '../../img/rss_logo.png';

import style from './Footer.module.scss';

export class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <a href="https://github.com/Voloshin-Sergei" className="footer__link">
          <img className={style.ghLogo} src={ghLogo} alt="GitHub logo" />
        </a>
        <img src={ramLogo} alt="Rick and Morty logo" />
        <a href="https://rs.school/" className="footer__link">
          <img className={style.rssLogo} src={rssLogo} alt="RSS logo" />
        </a>
      </footer>
    );
  }
}
