import React from 'react';

import style from './Search.module.scss';

export class Search extends React.Component {
  state = {
    searchValue: '',
  };

  inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;

    this.setState({ searchValue: newValue });
  };

  UNSAFE_componentWillMount() {
    const searchValue = localStorage.getItem('searchValue');

    if (searchValue) {
      this.setState({ searchValue: searchValue });
    }
  }

  componentWillUnmount() {
    if (this.state.searchValue) {
      localStorage.setItem('searchValue', this.state.searchValue);
    }
  }

  render() {
    return (
      <div className={style.search}>
        <form className={style.form}>
          <input
            className={style.form__input}
            placeholder="search"
            onChange={this.inputHandle}
            value={this.state.searchValue}
          />
          <button className={style.form__btn}>Search</button>
        </form>
      </div>
    );
  }
}
