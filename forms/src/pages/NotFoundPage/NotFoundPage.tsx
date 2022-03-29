import React from 'react';
import notFound from '../../img/404.png';

import style from './NotFoundPage.module.scss';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={style.notFoundPage}>
        <h1 className={style.notFoundPage__title}>404</h1>
        <p className={style.notFoundPage__text}>Sorry, page not found :(</p>
        <img className={style.notFoundPage__img} src={notFound} alt="page not found" />
      </div>
    );
  }
}
