import React from 'react';
import { PersonCard } from './PersonCard';
import { Person } from '../../types';

import style from './ItemList.module.scss';

interface ItemListProps {
  persons?: Person[];
}

export class ItemList extends React.Component<ItemListProps> {
  constructor(props: ItemListProps) {
    super(props);
  }

  render() {
    return (
      <section className={style.itemList}>
        <h1 className={style.itemList__title}>Persons</h1>
        <div className={style.itemList__wrapper}>
          {this.props.persons?.map((item) => (
            <PersonCard key={item.id} person={item} />
          ))}
        </div>
      </section>
    );
  }
}
