import React from 'react';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Person } from '../../types';

interface HomePageProps {
  persons?: Person[];
}

export class HomePage extends React.Component<HomePageProps> {
  constructor(props: HomePageProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Search />
        <ItemList persons={this.props.persons} />
      </>
    );
  }
}
