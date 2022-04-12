import React from 'react';

import style from './Error.module.scss';

interface ErrorProps {
  error: string;
}

export class Error extends React.Component<ErrorProps> {
  render() {
    return <h1 className={style.error}>{this.props.error}</h1>;
  }
}
