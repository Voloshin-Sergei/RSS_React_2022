import { InitialStateType, initialState } from './state';
import { AppActionTypes, Actions } from './types';

export const appReducer = (state: InitialStateType, action: AppActionTypes): InitialStateType => {
  switch (action.type) {
    case Actions.GET_PERSONS_STARTED:
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case Actions.GET_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.payload.persons,
        isLoading: action.payload.isLoading,
      };
    case Actions.GET_PERSONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};
