import React, { createContext, Dispatch } from 'react';
import { Person, ErrorType } from './../types';
import { AppActionTypes } from './types';

export interface InitialStateType {
  persons: Person[];
  isLoading: boolean;
  error: null | ErrorType;
  gender: string;
  status: string;
  species: string;
}

export const initialState: InitialStateType = {
  persons: [],
  isLoading: false,
  error: null,
  gender: '',
  status: '',
  species: '',
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppActionTypes>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
