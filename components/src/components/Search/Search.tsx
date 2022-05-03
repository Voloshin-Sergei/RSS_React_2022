import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/state';
import {
  getPersonsStarted,
  getPersonsSuccess,
  getPersonsFailure,
  setGenderFilter,
} from '../../store/actions';
import { ErrorType } from '../../types';
import { api } from '../../api/api';
import axios, { AxiosError } from 'axios';
import style from './Search.module.scss';

export const Search = () => {
  const {
    state: { gender, status, species },
    dispatch,
  } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    localStorage.setItem('searchValue', searchInput);
  }, [searchInput]);

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      dispatch(getPersonsStarted());

      const response = await api.getPersons(searchInput, gender);

      dispatch(getPersonsSuccess(response));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        // return error.message;
        console.log(error.response?.data);
        const errorMessage = error.response?.data;
        dispatch(getPersonsFailure(errorMessage as ErrorType));
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    dispatch(setGenderFilter(e.target.name, e.target.value));
  };

  return (
    <div className={style.search}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={style.form__input}
          placeholder="search"
          onChange={inputHandle}
          value={searchInput}
        />
        <button onClick={handleSubmit} className={style.form__btn}>
          Search
        </button>
        <div className={style.filters}>
          <label htmlFor="gender">
            <select onChange={handleSelect} name="gender" value={gender}>
              <option value="">none</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="genderless">genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </label>

          <label htmlFor="species">
            <select onChange={handleSelect} name="species" value={species}>
              <option value="">none</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
              <option value="Humanoid">Humanoid</option>
              <option value="Poopybutthole">Poopybutthole</option>
              <option value="Mythological Creature">Mythological Creature</option>
              <option value="Animal">Animal</option>
              <option value="Robot">Robot</option>
              <option value="Cronenberg">Cronenberg</option>
              <option value="Disease">Disease</option>
              <option value="unknown">unknown</option>
            </select>
          </label>

          <label htmlFor="status">
            <select onChange={handleSelect} name="status" value={status}>
              <option value="">none</option>
              <option value="alive">alive</option>
              <option value="dead">dead</option>
              <option value="unknown">unknown</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};
