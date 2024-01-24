import * as TYPES from './types';

export type Action =
  | {
      type: typeof TYPES.INCREMENT;
      payload: { quantity: number };
    }
  | {
      type: typeof TYPES.DECREMENT;
      payload: {
        quantity: number;
      };
    };
