import React, { createContext, Dispatch } from 'react';
import { Person, ErrorType } from './../types';
import { AppActionTypes } from './types';

export interface InitialStateType {
  persons: Person[];
  isLoading: boolean;
  error: null | ErrorType;
}

export const initialState: InitialStateType = {
  persons: [],
  isLoading: false,
  error: null,
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppActionTypes>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
