import React from 'react';
import { PersonCard } from './PersonCard';
import { UserCard } from './UserCard';
import { Person, User } from '../../types';

import style from './ItemList.module.scss';

interface ItemListProps {
  persons?: Person[];
  users?: User[];
}

export class ItemList extends React.Component<ItemListProps> {
  constructor(props: ItemListProps) {
    super(props);
  }

  render() {
    return (
      <section className={style.itemList}>
        <h1 className={style.itemList__title}>{this.props.persons ? 'Persons' : 'Users'}</h1>

        <div className={style.itemList__wrapper}>
          {this.props.persons?.map((item) => (
            <PersonCard key={item.id} person={item} />
          ))}
          {this.props.users?.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </div>
      </section>
    );
  }
}
