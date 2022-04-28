import { Person } from '../types';

export enum Actions {
  ADD_PERSONS = 'ADD_PERSONS',
}

export interface FetchPersons {
  type: Actions.ADD_PERSONS;
  payload: Person[];
}

export const fetchPersons = () => {
  type: Actions.ADD_PERSONS;
};

export type ActionTypes = FetchPersons;
