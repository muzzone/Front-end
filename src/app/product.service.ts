import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

interface Product {
  id: number;
  img: string;
  text: string;
  title: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getToken_().subscribe((token) => {
      this.authToken = token;
    });
    this.authToken ? this.setProducts() : '';
  }

  products_ = new ReplaySubject(1);
  authToken;

  setProducts() {
    this.getProducts().subscribe((products) => {
      this.products_.next(products);
    });
  }

  getProducts_() {
    return this.products_;
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + this.authToken
      })
    };
  }

  getProducts() {
    return this.http.get('http://smktesting.herokuapp.com/api/products/', this.getHeaders());
  }

  getReviews(id) {
    return this.http.get('http://smktesting.herokuapp.com/api/reviews/' + id, this.getHeaders());
  }

  addReview(data, id) {
    return this.http.post('http://smktesting.herokuapp.com/api/reviews/' + id, data, this.getHeaders());
  }
}
