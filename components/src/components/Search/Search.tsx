import React from 'react';

import style from './Search.module.scss';

interface SearchProps {
  onClick: (name: string) => void;
}

interface SearchState {
  searchValue: string;
}
export class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;

    this.setState({ searchValue: newValue });
  };

  componentDidMount() {
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

  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    this.props.onClick(this.state.searchValue);
  };

  render() {
    return (
      <div className={style.search}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <input
            className={style.form__input}
            placeholder="search"
            onChange={this.inputHandle}
            value={this.state.searchValue}
          />
          <button onClick={this.handleSubmit} className={style.form__btn}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
