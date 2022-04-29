import { Person, ErrorType } from './../types';

export enum Actions {
  GET_PERSONS_STARTED = 'GET_PERSONS_STARTED',
  GET_PERSONS_SUCCESS = 'GET_PERSONS_SUCCESS',
  GET_PERSONS_FAILURE = 'GET_PERSONS_FAILURE',
}

export interface GetPersonsStarted {
  type: Actions.GET_PERSONS_STARTED;
  payload: boolean;
}

export interface GetPersonsSuccess {
  type: Actions.GET_PERSONS_SUCCESS;
  payload: { persons: Person[]; isLoading: boolean };
}

export interface GetPersonsFailure {
  type: Actions.GET_PERSONS_FAILURE;
  payload: { error: null | ErrorType; isLoading: boolean };
}

export type AppActionTypes = GetPersonsStarted | GetPersonsSuccess | GetPersonsFailure;
