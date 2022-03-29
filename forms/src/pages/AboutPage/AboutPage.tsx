import React from 'react';
import style from './AboutPage.module.scss';

export class AboutPage extends React.Component {
  render() {
    return (
      <div className={style.aboutPage}>
        <h1 className={style.aboutPage__title}>About</h1>
        <p className={style.aboutPage__text}>
          Rick and Morty is an American animated television series created by Dan Harmon and Justin
          Roiland that premiered on December 2, 2013 on Cartoon Network&apos;s Adult Swim
          programming block. In Canada, it premiered on January 10, 2016 on the Canadian version of
          Cartoon Network&apos;s Adult Swim programming block.
        </p>
        <p className={style.aboutPage__text}>
          The show&apos;s first season consists of 11 twenty-two minute episodes. After airing the
          first six episodes, [adult swim] renewed the show for a second season, consisting of 10
          twenty-two minute episodes. The show was renewed for a third season, consisting of 10
          twenty-two minute episodes that aired in the summer of 2017. As of Fall of 2019 Rick and
          Morty came back with a fourth season airing ten episodes with the first half of the season
          being air in 2019 and the second half after new years.
        </p>
        <p className={style.aboutPage__text}>
          The show was based on a series of crudely animated short films for Channel 101 based on a
          Back to the Future parody The Real Animated Adventures of Doc and Mharti by Justin
          Roiland.
        </p>
      </div>
    );
  }
}
