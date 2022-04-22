import React from 'react';
import { Title } from '../../components/Title';
import notFound from '../../img/404.png';

import style from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
      <Title text="404" />
      <p className={style.notFoundPage__text}>Sorry, page not found :(</p>
      <img className={style.notFoundPage__img} src={notFound} alt="page not found" />
    </div>
  );
};
