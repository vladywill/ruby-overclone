// import everything from util file
import * as SessionAPIUtil from "../util/session_api_util";
// create const for action type
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
};

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  }
}

// Thunk action creators
export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
};

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
};

export const getUsers = (data) => dispatch => {
  return SessionAPIUtil.getUsers(data).then(users => (
    dispatch(receiveUsers(users))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
};