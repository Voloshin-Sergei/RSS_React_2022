import React from 'react';
import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div data-testid="loader" className={style.container}>
      <div className={style.loader}></div>
    </div>
  );
};
