import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import style from './PageLayout.module.scss';

export class PageLayout extends React.Component {
  render() {
    return (
      <div className={style.pageWrapper}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}
