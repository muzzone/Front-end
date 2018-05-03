import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';

interface Product {
  id: number;
  img: string;
  text: string;
  title: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) {
    this.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  products;

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + this.authService.getToken()
      })
    };
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
