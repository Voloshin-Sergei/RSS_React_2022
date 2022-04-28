import { InitialStateType } from './state';
import { fetchPersons, ActionTypes, Actions } from './actions';

export const appReducer = (state: InitialStateType, action: any) => {
  switch (action.type) {
    case Actions.ADD_PERSONS:
      return { ...state, persons: action.payload.persons };

    default:
      return state;
  }
};
