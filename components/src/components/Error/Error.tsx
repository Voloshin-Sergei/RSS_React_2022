import React from 'react';

import style from './Error.module.scss';

interface ErrorProps {
  error: string;
}

export const Error = (props: ErrorProps) => {
  const { error } = props;
  return <h1 className={style.error}>{error}</h1>;
};
