import React from 'react';
import { PersonCard } from './PersonCard';
import { Person } from '../../../types';

import style from './CardList.module.scss';

interface CardListProps {
  persons?: Person[];
}

export class CardList extends React.Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    return (
      <section className={style.cardList}>
        <h1 className={style.cardList__title}>Persons</h1>
        <div className={style.cardList__wrapper}>
          {this.props.persons?.map((item) => (
            <PersonCard key={item.id} person={item} />
          ))}
        </div>
      </section>
    );
  }
}
