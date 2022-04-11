import React from 'react';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Loader } from '../../components/Loader';
import { Person } from '../../types';

interface HomePageState {
  persons: Person[];
  isLoader: boolean;
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

        {this.state.isLoader && <Loader />}

        {this.state.persons.length && <ItemList persons={this.state.persons} />}
      </>
    );
  }
}
