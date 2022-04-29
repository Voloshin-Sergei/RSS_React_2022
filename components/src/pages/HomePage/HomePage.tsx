import React, { useContext } from 'react';
import { AppContext } from '../../store/state';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Title } from '../../components/Title';

export const HomePage = () => {
  const {
    state: { error, persons, isLoading },
  } = useContext(AppContext);

  const renderItemList = () => {
    if (error) {
      return <Error error={error.error} />;
    }
    if (isLoading) {
      return <Loader />;
    }

    if (persons.length !== 0) {
      return <ItemList persons={persons}>{<Title text="Persons" />}</ItemList>;
    }
  };

  return (
    <>
      <Search />
      {renderItemList()}
    </>
  );
};
