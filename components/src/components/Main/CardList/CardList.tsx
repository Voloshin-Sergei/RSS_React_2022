import React from 'react';
import { PersonCard } from './PersonCard';

import style from './CardList.module.scss';

export class CardList extends React.Component {
  render() {
    return (
      <section className={style.cardList}>
        <h1 className={style.cardList__title}>Persons</h1>
        <div className={style.cardList__wrapper}>
          <PersonCard />
        </div>
      </section>
    );
  }
}
