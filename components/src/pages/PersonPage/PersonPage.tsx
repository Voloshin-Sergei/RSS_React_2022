import { Title } from '../../components/Title';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import style from './PersonPage.module.scss';

export const PersonPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  console.log(location);

  return (
    <div className={style.person}>
      <button className={style.btn} onClick={goBack}>
        Go Back
      </button>
      <Title text="Rick Sanchez" />
      <div className={style.info}>
        <img
          className={style.info__img}
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
        <div className={style.info__description}>
          <p className={style.info__species}>
            <span className={style.info__type}>species: </span>
            <span className={style.info__text}>Human</span>
          </p>
          <p className={style.info__gender}>
            <span className={style.info__type}>gender: </span>
            <span className={style.info__text}>Male</span>
          </p>
          <p className={style.info__status}>
            <span className={style.info__type}>status: </span>
            <span className={style.info__text}>Alive</span>
          </p>
          <p className={style.info__location}>
            <span className={style.info__type}>location: </span>
            <span className={style.info__text}>Citadel of Ricks</span>
          </p>
        </div>
      </div>
    </div>
  );
};
