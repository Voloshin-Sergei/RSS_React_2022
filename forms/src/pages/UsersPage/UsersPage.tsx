import React from 'react';

import style from './UsersPage.module.scss';

export class UsersPage extends React.Component {
  render() {
    return (
      <div className={style.users}>
        <h1 className={style.users__title}>Users</h1>
        <form action="" className={style.users__form}>
          <label htmlFor="firstName">
            Name:
            <input type="text" name="firstName" />
          </label>

          <label htmlFor="lastName">
            Surname:
            <input type="text" name="lastName" />
          </label>
          <label htmlFor="birthday">
            Birthday:
            <input type="date" name="birthday" />
          </label>
          <div className="group">
            <p>Country</p>
            <select className="input" id="dropdown">
              <option disabled selected>
                Select your country
              </option>
              <option value="russia">Russia</option>
              <option value="belarus">Belarus</option>
              <option value="ukraine">Ukraine</option>
            </select>
          </div>
          <label className={style.switch}>
            male
            <input type="checkbox" />
            female
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
          <label>
            I gree
            <input type="checkbox" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
