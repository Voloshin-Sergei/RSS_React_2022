import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Title } from '../../components/Title';
import { Error } from '../../components/Error';
import { Person } from '../../types';

import style from './PersonPage.module.scss';

export const PersonPage = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  console.log(person);

  const url = 'https://rickandmortyapi.com/api/character/';

  const getCharacter = (id: number) => {
    setError(null);
    fetch(`${url}${id}`).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        setPerson(data);
      }
      setError(data.error);
    });
  };

  useEffect(() => {
    getCharacter(Number(id));
  }, [id]);

  return (
    <div className={style.person}>
      <button className={style.btn} onClick={goBack}>
        Go Back
      </button>

      {person ? (
        <>
          <Title text={person?.name} />
          <div className={style.info}>
            <img className={style.info__img} src={person?.image} />
            <div className={style.info__description}>
              <p className={style.info__species}>
                <span className={style.info__type}>species: </span>
                <span className={style.info__text}>{person?.species}</span>
              </p>
              <p className={style.info__gender}>
                <span className={style.info__type}>gender: </span>
                <span className={style.info__text}>{person?.gender}</span>
              </p>
              <p className={style.info__status}>
                <span className={style.info__type}>status: </span>
                <span className={style.info__text}>{person?.status}</span>
              </p>
              <p className={style.info__location}>
                <span className={style.info__type}>location: </span>
                <span className={style.info__text}>{person?.location.name}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        error && <Error error={error} />
      )}
    </div>
  );
};
