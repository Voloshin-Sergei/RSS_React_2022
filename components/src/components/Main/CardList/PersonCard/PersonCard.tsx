import React from 'react';
import { Person } from '../../../../types';

import style from './PersonCard.module.scss';

interface PersonCardProps {
  person: Person;
}
export class PersonCard extends React.Component<PersonCardProps> {
  constructor(props: PersonCardProps) {
    super(props);
  }

  render() {
    const { image, name, species, gender, status, location } = this.props.person;
    return (
      <div className={style.person}>
        <img className={style.person__img} src={`${image}`} />
        <div className={style.person__info}>
          <h2 className={style.person__name}>{name}</h2>
          <p className={style.person__species}>
            <span className={style.person__type}>species: </span>
            <span className={style.person__text}>{species}</span>
          </p>
          <p className={style.person__gender}>
            <span className={style.person__type}>gender: </span>
            <span className={style.person__text}>{gender}</span>
          </p>
          <p className={style.person__status}>
            <span className={style.person__type}>status: </span>
            <span className={style.person__text}>{status}</span>
          </p>
          <p className={style.person__location}>
            <span className={style.person__type}>location: </span>
            <span className={style.person__text}>{location.name}</span>
          </p>
        </div>
      </div>
    );
  }
}
