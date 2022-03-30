import React from 'react';
import { User } from '../../../types';

import style from './UserCard.module.scss';

interface UserCardProps {
  user: User;
}
export class UserCard extends React.Component<UserCardProps> {
  constructor(props: UserCardProps) {
    super(props);
  }

  render() {
    const { avatar, name, surname, gender, birthday, country } = this.props.user;
    return (
      <div className={style.user}>
        <img className={style.user__img} src={`${avatar}`} />
        <div className={style.user__info}>
          <h2 className={style.user__name}>
            {name} {surname}
          </h2>
          <p className={style.user__birthday}>
            <span className={style.user__type}>birthday: </span>
            <span className={style.user__text}>{birthday}</span>
          </p>
          <p className={style.user__location}>
            <span className={style.user__type}>country: </span>
            <span className={style.user__text}>{country}</span>
          </p>
          <p className={style.user__gender}>
            <span className={style.user__type}>gender: </span>
            <span className={style.user__text}>{gender}</span>
          </p>
        </div>
      </div>
    );
  }
}
