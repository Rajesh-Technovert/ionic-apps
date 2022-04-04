/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userAuthenticated = false;

  constructor() { }

  get isUserAuthenticated() {
    return this._userAuthenticated;
  }

  login(){
    this._userAuthenticated = true;
  }
  logout(){
    this._userAuthenticated = false;
  }
}
