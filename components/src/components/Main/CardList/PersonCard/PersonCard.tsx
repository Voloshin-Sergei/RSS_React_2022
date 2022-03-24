import React from 'react';

import style from './PersonCard.module.scss';

export class PersonCard extends React.Component {
  render() {
    return (
      <div className={style.person}>
        <img
          className={style.person__img}
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
        <div className={style.person__info}>
          <h2 className={style.person__name}>Rick Sanchez</h2>
          <p className={style.person__species}>
            <span className={style.person__type}>species: </span>
            <span className={style.person__info}>Human</span>
          </p>
          <p className={style.person__gender}>
            <span className={style.person__type}>gender: </span>
            <span className={style.person__info}>Male</span>
          </p>
          <p className={style.person__status}>
            <span className={style.person__type}>status: </span>
            <span className={style.person__info}>Alive</span>
          </p>
          <p className={style.person__location}>
            <span className={style.person__type}>location: </span>
            <span className={style.person__info}>Citadel of Ricks</span>
          </p>
        </div>
      </div>
    );
  }
}
