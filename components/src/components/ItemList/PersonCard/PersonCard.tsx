import React from 'react';
import { Person } from '../../../types';

import style from './PersonCard.module.scss';

interface PersonCardProps {
  person: Person;
  onClick?: () => void;
}
export const PersonCard = (props: PersonCardProps) => {
  const {
    person: { image, name },
    onClick,
  } = props;

  return (
    <div className={style.person} onClick={onClick}>
      <img className={style.person__img} src={`${image}`} />
      <div className={style.person__info}>
        <h2 className={style.person__name}>{name}</h2>
      </div>
    </div>
  );
};
