import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService implements OnInit {

  constructor(private http: HttpClient) {
    if (localStorage.getItem('authToken')) {
      this.authToken = localStorage.getItem('authToken');
    }
    console.log(this.authToken);
  }

  authToken;

  ngOnInit() {
  }

  login(data) {
    console.log({'auth service login' : data});
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data)
      .map((response: Response) => {
        return response;
      });
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.authToken = false;
  }

  register(data) {
    console.log({'auth service register' : data});
    return this.http.post('http://smktesting.herokuapp.com/api/register/', data)
      .map((response: Response) => {
        return response;
      });
  }

  authorized(token) {
    localStorage.setItem('authToken', token);
    this.authToken = token;
  }

  getToken() {
    return this.authToken;
  }
}
