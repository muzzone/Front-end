import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + this.authService.getToken()
      })
    };
  }

  getData() {
    return this.http.get('http://smktesting.herokuapp.com/api/products/', this.getHeaders());
  }

  getProducts() {
    return this.http.get('http://smktesting.herokuapp.com/api/products/', this.getHeaders())
      .map((response: Response) => {
        return response;
      });
  }

  getReviews(id) {
    return this.http.get('http://smktesting.herokuapp.com/api/reviews/' + id, this.getHeaders())
      .map((response: Response) => {
        return response;
      });
  }

  addReview(data, id) {
    return this.http.post('http://smktesting.herokuapp.com/api/reviews/' + id, data, this.getHeaders())
      .map((response: Response) => {
        return response;
      });
  }
}
