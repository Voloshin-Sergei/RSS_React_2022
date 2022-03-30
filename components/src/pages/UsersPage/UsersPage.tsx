import React from 'react';

import style from './UsersPage.module.scss';

export class UsersPage extends React.Component {
  render() {
    return (
      <div className={style.usersPage}>
        <h1 className={style.usersPage__title}>Users</h1>
        <form className={style.form}>
          <h2 className={style.form__title}>Add new user</h2>
          <div className={style.form__group}>
            <label htmlFor="firstName">
              <p className={style.form__text}>Name:</p>
              <input className={style.form__input} type="text" name="firstName" />
            </label>
          </div>

          <div className={style.form__group}>
            <label htmlFor="lastName">
              <p className={style.form__text}>Surname:</p>
              <input className={style.form__input} type="text" name="lastName" />
            </label>
          </div>
          <div className={style.form__group}>
            <label htmlFor="birthday">
              <p className={style.form__text}>Birthday:</p>
              <input className={style.form__input} type="date" name="birthday" />
            </label>
          </div>

          <div className={style.form__group}>
            <p className={style.form__text}>Country</p>
            <select className={style.form__input}>
              <option disabled selected>
                Select your country
              </option>
              <option value="russia">Russia</option>
              <option value="belarus">Belarus</option>
              <option value="ukraine">Ukraine</option>
            </select>
          </div>

          <div className={`${style.form__group} ${style.form__group_switch}`}>
            <p className={style.form__text}>Male</p>
            <label className={style.switch}>
              <input type="checkbox" className={style.switch__input} />
              <span className={style.switch__slider}></span>
            </label>
            <p className={style.form__text}>Female</p>
          </div>

          <div className={`${style.form__group} ${style.file}`}>
            <p className={`${style.form__text} ${style.file__text}`}>Choose a profile picture:</p>
            <input
              name="avatar"
              type="file"
              id="avatar"
              className={style.file__input}
              accept="image/png, image/jpeg"
            />
            <label htmlFor="avatar" className={style.form__btn}>
              Add file
            </label>
          </div>

          <div className={style.form__group}>
            <label className={style.check}>
              <p className={style.form__text}>I gree</p>
              <input className={style.check__input} type="checkbox" />
              <span className={style.check__box}></span>
            </label>
          </div>

          <div className={style.form__group}>
            <button className={style.form__btn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
