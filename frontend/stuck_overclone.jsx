import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/root';
import { configureStore } from './store/store';
import { signup, login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Debugging and Redux Cycle Test functions
  // window.store = store;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.getState = store.getState;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

