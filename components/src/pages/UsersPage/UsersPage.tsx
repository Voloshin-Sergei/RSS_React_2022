import React, { useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { Form } from '../../components/Form';
import { User } from '../../types';
import style from './UsersPage.module.scss';

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (data: User): void => {
    const id = users.length + 1;
    const user = { ...data, id };
    setUsers([...users, user]);
  };

  return (
    <div className={style.usersPage}>
      {/* <h1 className={style.usersPage__title}>Users</h1> */}
      <Form addUser={addUser} />
      <ItemList users={users} />
    </div>
  );
};
