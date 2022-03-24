import React from 'react';

import style from './Search.module.scss';

export class Search extends React.Component {
  render() {
    return (
      <div className={style.search}>
        <form className={style.form}>
          <input className={style.form__input} placeholder="search" />
          <button className={style.form__btn}>Search</button>
        </form>
      </div>
    );
  }
}
