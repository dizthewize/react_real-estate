import { FETCH_HOMES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HOMES:
      return [ action.payload, ...state ];
    default:
      return state;
  }
}
