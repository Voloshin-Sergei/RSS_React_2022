import { GetPersonsStarted, GetPersonsSuccess, GetPersonsFailure, Actions } from './types';
import { AxiosResponse, AxiosError } from 'axios';
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
