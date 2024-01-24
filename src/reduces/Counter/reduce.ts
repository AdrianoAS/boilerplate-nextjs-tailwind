import { Action } from './actions';
import * as TYPES from './types';

type State = {
  quantity: number;
};

export const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case TYPES.INCREMENT: {
      return {
        ...state,
        quantity: action.payload.quantity
      };
    }

    case TYPES.DECREMENT: {
      return {
        ...state,
        quantity: action.payload.quantity
      };
    }

    default: {
      return state;
    }
  }
};
