import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
    if (localStorage.getItem('authToken')) {
      this.authToken_.next(localStorage.getItem('authToken'));
    }
  }

  authToken = '';
  authToken_ = new ReplaySubject(1);

  login(data) {
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data);
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.authToken_.next('');
  }

  register(data) {
    return this.http.post('http://smktesting.herokuapp.com/api/register/', data);
  }

  authorized(token) {
    localStorage.setItem('authToken', token);
    this.authToken_.next(token);
  }

  getToken_() {
    return this.authToken_;
  }
}
