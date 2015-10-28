import { LOAD_DICTIONARIES, SUCCESS } from '../actions';

export default function tags(state = {}, action) {
  switch (action.type) {
  case LOAD_DICTIONARIES:
    switch (action.status) {
    case SUCCESS:
      return { ...action.tags }
    }
  default:
    return state;
  }
}