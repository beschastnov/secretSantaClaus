import { LOGOUT, SET_AUTH } from '../types';

export default function userReducer(action, state = {}) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
