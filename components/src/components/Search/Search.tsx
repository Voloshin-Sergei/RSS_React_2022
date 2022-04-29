import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/state';
import { getPersonsStarted, getPersonsSuccess, getPersonsFailure } from '../../store/actions';
import { ErrorType } from '../../types';
import { api } from '../../api/api';
import axios, { AxiosError } from 'axios';
import style from './Search.module.scss';

export const Search = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    localStorage.setItem('searchValue', searchInput);
  }, [searchInput]);

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      dispatch(getPersonsStarted());

      const response = await api.getPersons(searchInput);

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
      </form>
    </div>
  );
};
