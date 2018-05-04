import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService implements OnInit {

  constructor(private http: HttpClient) {
    if (localStorage.getItem('authToken')) {
      this.authToken = localStorage.getItem('authToken');
    }
  }

  authToken = '';

  ngOnInit() {
  }

  login(data) {
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data);
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.authToken = '';
  }

  register(data) {
    return this.http.post('http://smktesting.herokuapp.com/api/register/', data);
  }

  authorized(token) {
    localStorage.setItem('authToken', token);
    this.authToken = token;
  }

  getToken() {
    return this.authToken;
  }
}
