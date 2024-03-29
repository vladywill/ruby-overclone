import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
}

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
}

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
}


// Thunk Action Creators
export const signup = (user) => dispatch => {
  // debugger
  return SessionAPIUtil.signup(user)
    .then(user => {
      // debugger
      return dispatch(receiveCurrentUser(user));
    }, 
    errors => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ));
};


export const login = (user) => dispatch => {
  // debugger
  return SessionAPIUtil.login(user)
    .then(user => {
      // debugger
      return dispatch(receiveCurrentUser(user));
    }, 
    errors => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ));
};


export const logout = () => dispatch => {
  // debugger
  return SessionAPIUtil.logout()
    .then(() => {
      // debugger
      return dispatch(logoutCurrentUser());
    }, 
    errors => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ));
};


export const fetchUser = (user) => dispatch => {
  // debugger
  return SessionAPIUtil.fetchUser(user)
    .then(user => {
      // debugger
      return dispatch(receiveCurrentUser(user));
    }, 
    errors => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ));
};

