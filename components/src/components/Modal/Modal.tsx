import React from 'react';
import { Person } from '../../types';

import style from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  modalClose: () => void;
  person: Person | null;
}

export const Modal = (props: ModalProps) => {
  const { modalClose, person, isOpen } = props;

  return (
    <>
      {isOpen && (
        <>
          <div className={style.layout} onClick={modalClose}></div>
          <div className={style.modal}>
            <button className={style.modal__btn} onClick={modalClose}>
              &#10006;
            </button>
            <div className={style.person}>
              <img className={style.person__img} src={`${person?.image}`} />
              <div className={style.person__info}>
                <h2 className={style.person__name}>{person?.name}</h2>
                <p className={style.person__species}>
                  <span className={style.person__type}>species: </span>
                  <span className={style.person__text}>{person?.species}</span>
                </p>
                <p className={style.person__gender}>
                  <span className={style.person__type}>gender: </span>
                  <span className={style.person__text}>{person?.gender}</span>
                </p>
                <p className={style.person__status}>
                  <span className={style.person__type}>status: </span>
                  <span className={style.person__text}>{person?.status}</span>
                </p>
                <p className={style.person__location}>
                  <span className={style.person__type}>location: </span>
                  <span className={style.person__text}>{person?.location.name}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
