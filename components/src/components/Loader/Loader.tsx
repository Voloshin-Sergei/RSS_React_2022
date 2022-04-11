import React from 'react';
import style from './Loader.module.scss';

export class Loader extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.loader}></div>
      </div>
    );
  }
}
