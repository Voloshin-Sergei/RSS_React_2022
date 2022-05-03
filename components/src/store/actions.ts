import {
  GetPersonsStarted,
  GetPersonsSuccess,
  GetPersonsFailure,
  SetGenderFilter,
  Actions,
} from './types';
import { PersonsResponse, ErrorType } from '../types';

export const getPersonsStarted = (): GetPersonsStarted => ({
  type: Actions.GET_PERSONS_STARTED,
  payload: true,
});

export const getPersonsSuccess = (response: PersonsResponse): GetPersonsSuccess => ({
  type: Actions.GET_PERSONS_SUCCESS,
  payload: { persons: response.results, isLoading: false },
});

export const getPersonsFailure = (error: ErrorType): GetPersonsFailure => ({
  type: Actions.GET_PERSONS_FAILURE,
  payload: { error: error, isLoading: false },
});

export const setGenderFilter = (filter: string, value: string): SetGenderFilter => ({
  type: Actions.SET_GENDER_FILTER,
  payload: { filter: filter, value: value },
});
