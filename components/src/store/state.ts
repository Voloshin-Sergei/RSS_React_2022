import React, { createContext } from 'react';
import { Person } from './../types';

export interface InitialStateType {
  persons: Person[];
  isLoaded: boolean;
}

export const initialState = {
  persons: [],
  isLoaded: false,
};

export const AppContext = createContext<InitialStateType>(initialState);
