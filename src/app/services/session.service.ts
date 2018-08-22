// Services just serve data, they serve as Angular's equivalent to store

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user: {
    loggedIn: boolean,
    username: string
  } = {
      loggedIn: false,
      username: ''
    };

  constructor() {
    // Check if user is in localStorage
    // localStorage *only* holds strings
    let userString = window.localStorage.getItem('user');
    try {
      if (userString) { this.user = JSON.parse(userString); }
      else { console.log('user not found'); }
    }
    catch (err) {
      console.log('could not parse user');
    }
  }

  getSession() {
    return this.user;
  }

  // parallel to logging in the user to the application
  setSession(username) {
    // saves to memory
    this.user.username = username;
    this.user.loggedIn = true;

    // saves to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);
  }

  // parallel to logging out the user from the application
  clearSession() {
    this.user.loggedIn = false;
    this.user.username = '';
    window.localStorage.removeItem('user');
  }

  isLoggedIn() {
    return this.user.loggedIn;
  }
}