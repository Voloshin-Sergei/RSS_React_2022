import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Title } from '../../components/Title';
import { Error } from '../../components/Error';
import { api } from '../../api/api';
import { Person } from '../../types';

import style from './PersonPage.module.scss';

export const PersonPage = () => {
  const [person, setPerson] = useState<Person>({
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  });
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    const getPerson = async () => {
      const newPerson = await api.getPerson(Number(id));
      setPerson(newPerson.data);
    };

    getPerson();
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
