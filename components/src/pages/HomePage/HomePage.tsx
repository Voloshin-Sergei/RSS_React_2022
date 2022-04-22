import React, { useState } from 'react';
import { Search } from '../../components/Search';
import { ItemList } from '../../components/ItemList';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Title } from '../../components/Title';
import { Person } from '../../types';

interface HomePageState {
  persons: Person[];
  isLoader: boolean;
  error: null;
}

export const HomePage = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://rickandmortyapi.com/api/';

  const getCharacters = (name: string) => {
    setPersons([]);
    fetch(`${url}character?name=${name}`).then(async (response) => {
      setIsLoader(true);
      const data = await response.json();

      if (response.ok) {
        setPersons(data.results);
      }

      setError(data.error);
      setIsLoader(false);
    });
  };

  return (
    <>
      <Search onClick={getCharacters} />
      {isLoader && <Loader />}
      {persons.length !== 0 && <ItemList persons={persons}>{<Title text="Persons" />}</ItemList>}
      {error && <Error error={error} />}
    </>
  );
};
