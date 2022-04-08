import React from 'react';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Person } from '../../types';

interface HomePageState {
  persons: Person[];
}

interface HomePageProps {
  props?: null;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  url = 'https://rickandmortyapi.com/api/';

  getCharacters = (name: string) => {
    fetch(`${this.url}character?name=${name}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ persons: response.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Search onClick={this.getCharacters} />
        <ItemList persons={this.state.persons} />
      </>
    );
  }
}
