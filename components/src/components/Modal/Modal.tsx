import React from 'react';
import { Person } from '../../types';

import style from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  modalClose: () => void;
  person: Person | null;
}

export class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isOpen && (
          <>
            <div className={style.layout} onClick={this.props.modalClose}></div>
            <div className={style.modal}>
              <button className={style.modal__btn} onClick={this.props.modalClose}>
                &#10006;
              </button>
              <div className={style.person}>
                <img className={style.person__img} src={`${this.props.person?.image}`} />
                <div className={style.person__info}>
                  <h2 className={style.person__name}>{this.props.person?.name}</h2>
                  <p className={style.person__species}>
                    <span className={style.person__type}>species: </span>
                    <span className={style.person__text}>{this.props.person?.species}</span>
                  </p>
                  <p className={style.person__gender}>
                    <span className={style.person__type}>gender: </span>
                    <span className={style.person__text}>{this.props.person?.gender}</span>
                  </p>
                  <p className={style.person__status}>
                    <span className={style.person__type}>status: </span>
                    <span className={style.person__text}>{this.props.person?.status}</span>
                  </p>
                  <p className={style.person__location}>
                    <span className={style.person__type}>location: </span>
                    <span className={style.person__text}>{this.props.person?.location.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
