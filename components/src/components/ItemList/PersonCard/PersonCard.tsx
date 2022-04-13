import React from 'react';
import { Person } from '../../../types';

import style from './PersonCard.module.scss';

interface PersonCardProps {
  person: Person;
  onClick?: () => void;
}
export class PersonCard extends React.Component<PersonCardProps> {
  constructor(props: PersonCardProps) {
    super(props);
  }

  render() {
    const { image, name } = this.props.person;
    return (
      <div className={style.person} onClick={this.props.onClick}>
        <img className={style.person__img} src={`${image}`} />
        <div className={style.person__info}>
          <h2 className={style.person__name}>{name}</h2>
        </div>
      </div>
    );
  }
}
