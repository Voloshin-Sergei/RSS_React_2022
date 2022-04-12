import React from 'react';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Person } from '../../types';

interface HomePageState {
  persons: Person[];
  isLoader: boolean;
  error: null;
}

interface HomePageProps {
  props?: null;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      persons: [],
      isLoader: false,
      error: null,
    };
  }

  url = 'https://rickandmortyapi.com/api/';

  getCharacters = (name: string) => {
    this.setState({ persons: [] });
    fetch(`${this.url}character?name=${name}`).then(async (response) => {
      this.setState({ isLoader: true });
      const data = await response.json();

      if (response.ok) {
        this.setState({ persons: data.results });
      }

      this.setState({ error: data.error });
      this.setState({ isLoader: false });
    });
  };

  render() {
    return (
      <>
        <Search onClick={this.getCharacters} />
        {this.state.isLoader && <Loader />}
        {this.state.persons.length !== 0 && <ItemList persons={this.state.persons} />}
        {this.state.error && <Error error={this.state.error} />}
      </>
    );
  }
}
