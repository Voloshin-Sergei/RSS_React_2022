import React, { ReactNode } from 'react';
import { PersonCard } from './PersonCard';
import { UserCard } from './UserCard';
import { Person, User } from '../../types';

import style from './ItemList.module.scss';

interface ItemListProps {
  persons?: Person[];
  users?: User[];
  children?: ReactNode;
}

export const ItemList = (props: ItemListProps) => {
  const { children, persons, users } = props;

  return (
    <section className={style.itemList}>
      {children}
      <div className={style.itemList__wrapper}>
        {persons?.map((item) => (
          <PersonCard key={item.id} person={item} />
        ))}
        {users?.map((item) => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>
    </section>
  );
};
