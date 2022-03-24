import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

import './App.module.scss';

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
