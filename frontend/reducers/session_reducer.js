import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullSession = Object.freeze({
  currentUser: null,
});

export const sessionReducer = (prevState = _nullSession, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return prevState;
  }
};
