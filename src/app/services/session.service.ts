// Services just serve data, they serve as Angular's equivalent to store

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  user: {
    username: string
  } = {
      username: ''
    };

    // subject to hold isLoggedIn value (default being false)
    private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Check if user is in localStorage
    // localStorage *only* holds strings
    let userString = window.localStorage.getItem('user');
    try {
      if (userString) { this.user = JSON.parse(userString); }
      else { console.log('user not found'); }

      // update _isLoggedInSubject on construction
      // first event being emitted
      this._isLoggedInSubject.next(!!userString);
    }
    catch (err) {
      console.log('could not parse user');
    }
  }

  getSession() {
    return this.user;
  }

  // parallel to logging in the user to the application
  setSession(username = '') {
    // saves to memory
    this.user.username = username;

    // saves to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);

    // update subject
    this._isLoggedInSubject.next(true)
  }

  // parallel to logging out the user from the application
  clearSession() {
    this.user.username = '';
    window.localStorage.removeItem('user');

    // update subject
    this._isLoggedInSubject.next(false)
  }

  isLoggedInAsAnObservable() {
    return this._isLoggedInSubject.asObservable();
  }
}